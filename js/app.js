// App logic
let filteredProperties = [...properties];

// Hàm khởi tạo
function init() {
  renderProperties(properties);
  populateStreetFilter();
  populateWardFilter();
  populateDistrictFilter();
  setupEventListeners();
}

// Render danh sách bất động sản
function renderProperties(props) {
  const container = document.getElementById('propertyList');
  if (!container) return;

  if (props.length === 0) {
    container.innerHTML = '<div class="col-12 text-center p-5"><h4>Không tìm thấy bất động sản nào phù hợp</h4></div>';
    return;
  }

  container.innerHTML = props.map(prop => `
    <div class="col-12 col-sm-6 col-lg-4 mb-4">
      <div class="card property-card h-100 shadow-sm">
        <img src="${prop.image}" class="card-img-top property-img" alt="${prop.title}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${prop.title}</h5>
          <p class="price mb-2">${formatPrice(prop.price)}</p>
          <p class="card-text mb-1"><i class="bi bi-geo-alt-fill"></i> ${prop.street}, ${prop.ward}, ${prop.district}</p>
          <p class="card-text mb-1"><i class="bi bi-rulers"></i> ${prop.area} m² (${formatPricePerM2(prop.price, prop.area)})</p>
          <p class="card-text mb-3"><i class="bi bi-compass"></i> ${prop.direction}</p>
          <button class="btn btn-primary mt-auto" onclick="showPropertyDetail(${prop.id})">Xem chi tiết</button>
        </div>
      </div>
    </div>
  `).join('');
}

// Format giá tiền
function formatPrice(price) {
  const billion = price / 1000000000;
  return `${billion.toFixed(1)} tỷ`;
}

// Format giá tiền trên mét vuông
function formatPricePerM2(price, area) {
  const pricePerM2 = price / area;
  const million = pricePerM2 / 1000000;
  return `${million.toFixed(0)}tr/m²`;
}

// Tạo danh sách tên đường cho filter
function populateStreetFilter() {
  const streetSelect = document.getElementById('filterStreet');
  if (!streetSelect) return;

  const streets = [...new Set(properties.map(p => p.street))].sort();
  streets.forEach(street => {
    const option = document.createElement('option');
    option.value = street;
    option.textContent = street;
    streetSelect.appendChild(option);
  });
}

// Tạo danh sách phường cho filter
function populateWardFilter() {
  const wardSelect = document.getElementById('filterWard');
  if (!wardSelect) return;

  const wards = [...new Set(properties.map(p => p.ward))].sort();
  wards.forEach(ward => {
    const option = document.createElement('option');
    option.value = ward;
    option.textContent = ward;
    wardSelect.appendChild(option);
  });
}

// Tạo danh sách quận cho filter
function populateDistrictFilter() {
  const districtSelect = document.getElementById('filterDistrict');
  if (!districtSelect) return;

  const districts = [...new Set(properties.map(p => p.district))].sort();
  districts.forEach(district => {
    const option = document.createElement('option');
    option.value = district;
    option.textContent = district;
    districtSelect.appendChild(option);
  });
}

// Thiết lập event listeners
function setupEventListeners() {
  const filterStreet = document.getElementById('filterStreet');
  const filterWard = document.getElementById('filterWard');
  const filterDistrict = document.getElementById('filterDistrict');
  const minPrice = document.getElementById('minPrice');
  const maxPrice = document.getElementById('maxPrice');
  const minArea = document.getElementById('minArea');
  const maxArea = document.getElementById('maxArea');
  const direction = document.getElementById('direction');
  const resetBtn = document.getElementById('resetBtn');

  if (filterStreet) filterStreet.addEventListener('change', applyFilters);
  if (filterWard) filterWard.addEventListener('change', applyFilters);
  if (filterDistrict) filterDistrict.addEventListener('change', applyFilters);
  if (minPrice) minPrice.addEventListener('input', applyFilters);
  if (maxPrice) maxPrice.addEventListener('input', applyFilters);
  if (minArea) minArea.addEventListener('input', applyFilters);
  if (maxArea) maxArea.addEventListener('input', applyFilters);
  if (direction) direction.addEventListener('change', applyFilters);
  if (resetBtn) resetBtn.addEventListener('click', resetFilters);
}

// Áp dụng bộ lọc
function applyFilters() {
  const street = document.getElementById('filterStreet')?.value || '';
  const ward = document.getElementById('filterWard')?.value || '';
  const district = document.getElementById('filterDistrict')?.value || '';
  const minPrice = parseFloat(document.getElementById('minPrice')?.value || 0) * 1000000000;
  const maxPrice = parseFloat(document.getElementById('maxPrice')?.value || Infinity) * 1000000000;
  const minArea = parseFloat(document.getElementById('minArea')?.value || 0);
  const maxArea = parseFloat(document.getElementById('maxArea')?.value || Infinity);
  const direction = document.getElementById('direction')?.value || '';

  filteredProperties = properties.filter(prop => {
    const matchStreet = !street || prop.street === street;
    const matchWard = !ward || prop.ward === ward;
    const matchDistrict = !district || prop.district === district;
    const matchPrice = (!minPrice || prop.price >= minPrice) &&
                      (!maxPrice || maxPrice === Infinity || prop.price <= maxPrice);
    const matchArea = (!minArea || prop.area >= minArea) &&
                     (!maxArea || maxArea === Infinity || prop.area <= maxArea);
    const matchDirection = !direction || prop.direction === direction;

    return matchStreet && matchWard && matchDistrict && matchPrice && matchArea && matchDirection;
  });

  renderProperties(filteredProperties);
  updateResultCount();
}

// Cập nhật số lượng kết quả
function updateResultCount() {
  const countElement = document.getElementById('resultCount');
  if (countElement) {
    countElement.textContent = `Tìm thấy ${filteredProperties.length} bất động sản`;
  }
}

// Reset bộ lọc
function resetFilters() {
  document.getElementById('filterStreet').value = '';
  document.getElementById('filterWard').value = '';
  document.getElementById('filterDistrict').value = '';
  document.getElementById('minPrice').value = '';
  document.getElementById('maxPrice').value = '';
  document.getElementById('minArea').value = '';
  document.getElementById('maxArea').value = '';
  document.getElementById('direction').value = '';
 
  filteredProperties = [...properties];
  renderProperties(properties);
  updateResultCount();
}

// Hiển thị chi tiết bất động sản trong modal
function showPropertyDetail(propertyId) {
  const property = properties.find(p => p.id === propertyId);
 
  if (!property) {
    alert('Không tìm thấy bất động sản này');
    return;
  }

  const modalContent = document.getElementById('modalPropertyDetail');
 
  modalContent.innerHTML = `
    <div class="property-detail">
      <!-- Property Info -->
      <div class="row">
        <div class="col-lg-8">
          <h3 class="mb-3">${property.title}</h3>
         
          <div class="row mb-4">
            <div class="col-md-6">
              <div class="info-group">
                <h5><i class="bi bi-cash-stack"></i> Giá bán</h5>
                <p class="price-large">${formatPriceFull(property.price)}</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="info-group">
                <h5><i class="bi bi-calculator"></i> Đơn giá</h5>
                <p style="font-size: 1.3rem; font-weight: 600; color: #e67e22;">${formatPricePerM2(property.price, property.area)}</p>
              </div>
            </div>
          </div>

          <div class="row mb-4">
            <div class="col-md-6">
              <div class="info-group">
                <h5><i class="bi bi-rulers"></i> Diện tích</h5>
                <p>${property.area} m²</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="info-group">
                <h5><i class="bi bi-compass"></i> Hướng nhà</h5>
                <p>${property.direction}</p>
              </div>
            </div>
          </div>

          <div class="info-group mb-4">
            <h5><i class="bi bi-geo-alt-fill"></i> Địa chỉ</h5>
            <p>${property.street}, ${property.ward}, ${property.district}</p>
          </div>

          <div class="info-group mb-4">
            <h5><i class="bi bi-card-text"></i> Mô tả</h5>
            <p>${property.description}</p>
          </div>

          <!-- Image Gallery -->
          <div class="info-group mb-4">
            <h5><i class="bi bi-images"></i> Hình ảnh</h5>
            <div class="row">
              ${property.images.map((img, index) => `
                <div class="col-md-6 mb-3">
                  <img src="${img}" class="img-fluid rounded shadow" alt="${property.title} - Hình ${index + 1}" style="width: 100%; height: 250px; object-fit: cover;">
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="contact-box p-4 rounded shadow-sm" style="background: #f8f9fa;">
            <h5 class="mb-3"><i class="bi bi-person-badge"></i> Thông Tin Liên Hệ</h5>
           
            <div class="mb-3">
              <strong><i class="bi bi-person-fill"></i> Người liên hệ:</strong><br>
              <span id="modalContactName">Nguyễn Văn A</span>
            </div>
           
            <div class="mb-3">
              <strong><i class="bi bi-telephone-fill"></i> Số điện thoại:</strong><br>
              <a href="tel:0909999999" class="text-decoration-none" id="modalContactPhone">0909 999 999</a>
            </div>
           
            <div class="mb-3">
              <a href="https://facebook.com/bdsabc" target="_blank" class="btn btn-primary w-100" id="modalContactFacebook">
                <i class="bi bi-facebook"></i> Liên hệ qua Facebook
              </a>
            </div>
           
            <div>
              <a href="tel:0909999999" class="btn btn-success w-100">
                <i class="bi bi-telephone-fill"></i> Gọi ngay
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Sử dụng contactInfo từ contact.js nếu có
  if (typeof contactInfo !== 'undefined') {
    document.getElementById('modalContactName').textContent = contactInfo.name;
    document.getElementById('modalContactPhone').textContent = contactInfo.phone;
    document.getElementById('modalContactPhone').href = `tel:${contactInfo.phone}`;
    document.getElementById('modalContactFacebook').href = contactInfo.facebook;
  }

  // Hiển thị modal
  const modal = new bootstrap.Modal(document.getElementById('propertyModal'));
  modal.show();
}

// Format giá tiền đầy đủ
function formatPriceFull(price) {
  const billion = price / 1000000000;
  return `${billion.toFixed(1)} tỷ VNĐ`;
}

// Khởi tạo khi trang load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
