function createCarCard(car) {
  return `
      <div class="car-card" data-car-id="${car.id}">
          <div class="car-image">
              <img src="${car.image}" alt="${car.name}">
          </div>
          <div class="car-content">
              <h3 class="car-title">${car.name}</h3>
              <p class="car-description">${car.shortDescription}</p>
              <div class="car-features">
                  <div class="feature">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                          <circle cx="9" cy="7" r="4"/>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                      ${car.seats} seats
                  </div>
                  <div class="feature">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M3 22v-3"/>
                          <path d="M21 22v-3"/>
                          <path d="M12 2v20"/>
                          <path d="M8 8.5v.5"/>
                          <path d="M16 8.5v.5"/>
                          <path d="M7 15h10"/>
                      </svg>
                      ${car.fuelType}
                  </div>
              </div>
          </div>
      </div>
  `;
}

function createCarDetails(car) {
  return `
      <div class="car-details">
          <img src="${car.image}" alt="${car.name}">
          <div>
              <h2>${car.name}</h2>
              <p>${car.description}</p>
          </div>
          <div class="car-info-grid">
              <div class="info-card">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                  <p>${car.seats} Seats</p>
              </div>
              <div class="info-card">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M3 22v-3"/>
                      <path d="M21 22v-3"/>
                      <path d="M12 2v20"/>
                      <path d="M8 8.5v.5"/>
                      <path d="M16 8.5v.5"/>
                      <path d="M7 15h10"/>
                  </svg>
                  <p>${car.fuelType}</p>
              </div>
              
          </div>
          <div>
              <h3>Key Features</h3>
              <div class="features-list">
                  ${car.features.map(feature => `
                      <div class="feature-item">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          ${feature}
                      </div>
                  `).join('')}
              </div>
          </div>
          <a href="#contact" class="btn btn-primary" onclick="closeModal()">Contact to Book</a>
      </div>
  `;
}