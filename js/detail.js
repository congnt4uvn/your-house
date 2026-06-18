// Detail page logic

function getPropertyId() {
  const urlParams = new URLSearchParams(window.location.search);
  return parseInt(urlParams.get('id'));
}

function renderPropertyDetail() {
  const propertyId = getPropertyId();
  const property = properties.find(p => p.id === propertyId);

  if (!property) {
    document.getElementById('propertyDetail').innerHTML = `
      <div class="alert alert-danger text-center">
        <h4>Không tìm thấy bất động sản này</h4>
        <a href="index.html" class="btn btn-primary mt-3">Quay lại trang chủ</a>
      </div>
    `;
    return;
  }

  // Render image gallery
  const propertyImages = document.getElementById('propertyImages');
 
  if (propertyImages) {
    propertyImages.innerHTML = property.images.map((img, index) => `
      <div class="col-md-4 col-sm-6">
        <img src="${img}" class="img-fluid rounded shadow" alt="${property.title} - Hình ${index + 1}" style="width: 100%; height: 350px; object-fit: cover;">
      </div>
    `).join('');
  }

  // Render thông tin chi tiết
  document.getElementById('propertyTitle').textContent = property.title;
  document.getElementById('propertyPrice').textContent = formatPrice(property.price);
  document.getElementById('propertyStreet').textContent = `${property.street}, ${property.ward}, ${property.district}`;
  document.getElementById('propertyArea').textContent = `${property.area} m² (${formatPricePerM2(property.price, property.area)})`;
  document.getElementById('propertyDirection').textContent = property.direction;
  document.getElementById('propertyDescription').textContent = property.description;
 
  // Sử dụng contactInfo chung
  document.getElementById('contactName').textContent = contactInfo.name;
  document.getElementById('contactPhone').textContent = contactInfo.phone;
  document.getElementById('contactPhone').href = `tel:${contactInfo.phone}`;
  document.getElementById('contactFacebook').href = contactInfo.facebook;
}

function formatPrice(price) {
  const billion = price / 1000000000;
  return `${billion.toFixed(1)} tỷ VNĐ`;
}

function formatPricePerM2(price, area) {
  const pricePerM2 = price / area;
  const million = pricePerM2 / 1000000;
  return `${million.toFixed(0)}tr/m²`;
}

// Khởi tạo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderPropertyDetail);
} else {
  renderPropertyDetail();
}
