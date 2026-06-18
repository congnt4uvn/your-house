import os
import re

def split_txt_to_files(input_file, output_folder="restored_files"):
    """
    Split a merged text file back into original folder structure.
    Reads the merged file and recreates all files with their exact paths.
   
    Args:
        input_file: Input text file to split
        output_folder: Root folder to restore files to
    """
   
    # Hardcoded input - change this to your desired values
    input_file = "file.txt"
    output_folder = "restored_files"
   
    if not os.path.exists(input_file):
        print(f"Error: File '{input_file}' does not exist!")
        return
   
    # Create output folder if it doesn't exist
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)
   
    with open(input_file, 'r', encoding='utf-8') as infile:
        content = infile.read()
   
    # Split by file markers
    file_pattern = r'={80}\nFILE: (.*?)\n={80}\n(.*?)\n={80}\nEND FILE: .*?\n={80}'
    matches = re.findall(file_pattern, content, re.DOTALL)
   
    file_count = 0
   
    for relative_path, file_content in matches:
        # Create full output path
        output_path = os.path.join(output_folder, relative_path)
       
        # Create subdirectories if needed
        output_dir = os.path.dirname(output_path)
        if output_dir and not os.path.exists(output_dir):
            os.makedirs(output_dir)
       
        try:
            # Write the file
            with open(output_path, 'w', encoding='utf-8') as outfile:
                outfile.write(file_content)
           
            file_count += 1
            print(f"Restored: {relative_path}")
           
        except Exception as e:
            print(f"Error restoring {relative_path}: {str(e)}")
   
    print(f"\nTotal files restored: {file_count}")
    print(f"Files restored to: {output_folder}")

if __name__ == "__main__":
    split_txt_to_files(r"D:\myhouse\file.txt", "")