import os

def merge_files_to_txt(folder_name, output_file="merged_files.txt"):
    """
    Merge all files from a folder (including subfolders) into a single text file.
    Each file's content is prefixed with its relative path and separated by markers.
   
    Args:
        folder_name: Root folder to merge files from
        output_file: Output text file name
    """
   
    # Hardcoded input - change this to your desired folder
    folder_name = "c:\\Temp\\house"
    output_file = "merged_files.txt"
   
    if not os.path.exists(folder_name):
        print(f"Error: Folder '{folder_name}' does not exist!")
        return
   
    with open(output_file, 'w', encoding='utf-8') as outfile:
        file_count = 0
       
        # Walk through all directories and files
        for root, dirs, files in os.walk(folder_name):
            for filename in files:
                # Skip the output file itself if it's in the same directory
                if filename == output_file:
                    continue
               
                file_path = os.path.join(root, filename)
                relative_path = os.path.relpath(file_path, folder_name)
               
                try:
                    # Try to read as text file
                    with open(file_path, 'r', encoding='utf-8') as infile:
                        content = infile.read()
                   
                    # Write file marker and content
                    outfile.write(f"{'='*80}\n")
                    outfile.write(f"FILE: {relative_path}\n")
                    outfile.write(f"{'='*80}\n")
                    outfile.write(content)
                    outfile.write(f"\n{'='*80}\n")
                    outfile.write(f"END FILE: {relative_path}\n")
                    outfile.write(f"{'='*80}\n\n")
                   
                    file_count += 1
                    print(f"Merged: {relative_path}")
                   
                except Exception as e:
                    print(f"Skipped {relative_path}: {str(e)}")
       
        print(f"\nTotal files merged: {file_count}")
        print(f"Output saved to: {output_file}")

if __name__ == "__main__":
    merge_files_to_txt(r"C:\Temp\house", "")
