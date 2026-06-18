// Dữ liệu bất động sản
const properties = [
  {
    id: 1,
    title: "Nhà phố hiện đại 3 tầng",
    price: 4500000000,
    street: "Nguyễn Trãi",
    ward: "Phường 1",
    district: "Quận 1",
    area: 80,
    direction: "Đông tứ trạch",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800"
    ],
    description: "Nhà mới xây, nội thất cao cấp, thiết kế hiện đại. Vị trí đẹp, gần trường học và chợ."
  },
  {
    id: 2,
    title: "Biệt thự mini 4 tầng",
    price: 8200000000,
    street: "Lê Lợi",
    ward: "Phường 2",
    district: "Quận 3",
    area: 120,
    direction: "Tây tứ trạch",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800",
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
    ],
    description: "Biệt thự cao cấp, không gian rộng rãi, sân vườn đẹp. Khu vực yên tĩnh, an ninh tốt."
  },
  {
    id: 3,
    title: "Nhà mặt tiền kinh doanh",
    price: 12000000000,
    street: "Trần Hưng Đạo",
    ward: "Phường 3",
    district: "Quận 5",
    area: 150,
    direction: "Đông tứ trạch",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800"
    ],
    description: "Mặt tiền rộng 8m, vị trí vàng cho kinh doanh. Gần khu chợ và trung tâm thành phố."
  },
  {
    id: 4,
    title: "Nhà phố 2 tầng giá tốt",
    price: 2800000000,
    street: "Nguyễn Huệ",
    ward: "Phường Bến Nghé",
    district: "Quận 1",
    area: 60,
    direction: "Tây tứ trạch",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
      "https://images.unsplash.com/photo-1600566753051-f0b8a623d1c8?w=800",
      "https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=800"
    ],
    description: "Nhà đẹp, gọn gàng, phù hợp gia đình nhỏ. Gần công viên và siêu thị."
  },
  {
    id: 5,
    title: "Nhà vườn cao cấp",
    price: 15000000000,
    street: "Võ Văn Tần",
    ward: "Phường 5",
    district: "Quận 3",
    area: 200,
    direction: "Đông tứ trạch",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800",
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=800"
    ],
    description: "Không gian sống xanh, sân vườn rộng rãi. Thích hợp cho gia đình muốn gần gũi thiên nhiên."
  },
  {
    id: 6,
    title: "Nhà phố 3 tầng đẹp",
    price: 5500000000,
    street: "Nguyễn Trãi",
    ward: "Phường 1",
    district: "Quận 1",
    area: 90,
    direction: "Tây tứ trạch",
    image: "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?w=800",
    images: [
      "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?w=800",
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=800",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800"
    ],
    description: "Thiết kế thông minh, tận dụng tối đa không gian. Gần trường học và bệnh viện."
  },
  {
    id: 7,
    title: "Biệt thự sang trọng",
    price: 25000000000,
    street: "Lê Lợi",
    ward: "Phường 2",
    district: "Quận 3",
    area: 300,
    direction: "Đông tứ trạch",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800"
    ],
    description: "Biệt thự cao cấp, nội thất sang trọng, bể bơi riêng. Khu đô thị đẳng cấp."
  },
  {
    id: 8,
    title: "Nhà cấp 4 mới xây",
    price: 1800000000,
    street: "Trần Hưng Đạo",
    ward: "Phường 3",
    district: "Quận 5",
    area: 50,
    direction: "Tây tứ trạch",
    image: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800",
    images: [
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800"
    ],
    description: "Nhà mới hoàn thiện, giá rất tốt. Phù hợp cho người mua nhà lần đầu."
  },
  {
    id: 9,
    title: "Nhà phố thương mại",
    price: 9800000000,
    street: "Nguyễn Huệ",
    ward: "Phường Bến Nghé",
    district: "Quận 1",
    area: 110,
    direction: "Đông tứ trạch",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800"
    ],
    description: "Mặt tiền kinh doanh sầm uất, gần trung tâm. Tiềm năng sinh lời cao."
  },
  {
    id: 10,
    title: "Nhà phố hiện đại 4 tầng",
    price: 7200000000,
    street: "Võ Văn Tần",
    ward: "Phường 5",
    district: "Quận 3",
    area: 100,
    direction: "Tây tứ trạch",
    image: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=800",
    images: [
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=800",
      "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?w=800",
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=800"
    ],
    description: "Thiết kế hiện đại, nội thất đầy đủ. Khu dân cư văn minh, an ninh."
  },
  {
    id: 11,
    title: "Nhà mặt phố 5 tầng",
    price: 18500000000,
    street: "Nguyễn Trãi",
    ward: "Phường 1",
    district: "Quận 1",
    area: 140,
    direction: "Đông tứ trạch",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800",
    images: [
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
    ],
    description: "Vị trí đắc địa, mặt tiền rộng. Thích hợp kinh doanh hoặc cho thuê văn phòng."
  },
  {
    id: 12,
    title: "Nhà vườn sinh thái",
    price: 6800000000,
    street: "Lê Lợi",
    ward: "Phường 2",
    district: "Quận 3",
    area: 180,
    direction: "Tây tứ trạch",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
    images: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800"
    ],
    description: "Không gian xanh mát, trong lành. Xa ồn ào phố thị, thích hợp nghỉ dưỡng."
  },
  {
    id: 13,
    title: "Nhà phố giá rẻ",
    price: 2200000000,
    street: "Trần Hưng Đạo",
    ward: "Phường 3",
    district: "Quận 5",
    area: 55,
    direction: "Đông tứ trạch",
    image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800",
    images: [
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800"
    ],
    description: "Nhà kiên cố, gọn gàng, giá cả phải chăng. Gần chợ và trường học."
  },
  {
    id: 14,
    title: "Biệt thự vườn đẹp",
    price: 32000000000,
    street: "Nguyễn Huệ",
    ward: "Phường Bến Nghé",
    district: "Quận 1",
    area: 400,
    direction: "Tây tứ trạch",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800",
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=800",
      "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?w=800"
    ],
    description: "Biệt thự siêu sang, khuôn viên rộng lớn, hồ bơi và sân tennis. Đẳng cấp thượng lưu."
  },
  {
    id: 15,
    title: "Nhà phố 2 mặt tiền",
    price: 11500000000,
    street: "Võ Văn Tần",
    ward: "Phường 5",
    district: "Quận 3",
    area: 130,
    direction: "Đông tứ trạch",
    image: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=800",
    images: [
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=800",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800"
    ],
    description: "Vị trí góc, 2 mặt tiền, thuận lợi kinh doanh. Dòng người qua lại đông đúc."
  },
  {
    id: 16,
    title: "Nhà ống 3 tầng",
    price: 3900000000,
    street: "Nguyễn Trãi",
    ward: "Phường 1",
    district: "Quận 1",
    area: 70,
    direction: "Tây tứ trạch",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800"
    ],
    description: "Nhà mới, thiết kế hợp lý, thoáng mát. Gần công viên và siêu thị."
  },
  {
    id: 17,
    title: "Nhà mặt tiền rộng",
    price: 16000000000,
    street: "Lê Lợi",
    ward: "Phường 2",
    district: "Quận 3",
    area: 160,
    direction: "Đông tứ trạch",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
    ],
    description: "Mặt tiền 10m, vị trí đẹp, gần khu trung tâm. Tiềm năng kinh doanh lớn."
  },
  {
    id: 18,
    title: "Nhà phố thiết kế Nhật",
    price: 8900000000,
    street: "Trần Hưng Đạo",
    ward: "Phường 3",
    district: "Quận 5",
    area: 95,
    direction: "Tây tứ trạch",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800",
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=800"
    ],
    description: "Thiết kế tối giản phong cách Nhật Bản, không gian thoáng đạng. Nội thất gỗ cao cấp."
  },
  {
    id: 19,
    title: "Nhà cấp 4 sân vườn",
    price: 3200000000,
    street: "Nguyễn Huệ",
    ward: "Phường Bến Nghé",
    district: "Quận 1",
    area: 85,
    direction: "Đông tứ trạch",
    image: "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?w=800",
    images: [
      "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?w=800",
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=800",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800"
    ],
    description: "Nhà cấp 4 có sân vườn rộng, không gian thoáng mát. Thích hợp cho người yêu thiên nhiên."
  },
  {
    id: 20,
    title: "Biệt thự hiện đại",
    price: 28000000000,
    street: "Võ Văn Tần",
    ward: "Phường 5",
    district: "Quận 3",
    area: 350,
    direction: "Tây tứ trạch",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800"
    ],
    description: "Biệt thự thiết kế hiện đại, smart home, sân vườn đẹp. Khu an ninh 24/7."
  }
];
