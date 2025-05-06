// Initialize cars grid
const carsGrid = document.getElementById('carsGrid');
cars.forEach(car => {
    carsGrid.innerHTML += createCarCard(car);
});

// Add click event listeners to car cards
document.querySelectorAll('.car-card').forEach(card => {
    card.addEventListener('click', () => {
        const carId = card.dataset.carId;
        const car = cars.find(c => c.id === carId);
        openModal(car);
    });
});

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();