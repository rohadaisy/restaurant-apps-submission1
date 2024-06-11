import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import data from '../public/data/DATA.json';

// Function to display restaurants
function displayRestaurants() {
  const restaurantContainer = document.getElementById('restaurants');
  data.restaurants.forEach((restaurant) => {
    const restaurantItem = document.createElement('div');
    restaurantItem.classList.add('restaurant-item');
    
    restaurantItem.innerHTML = `
      <img src="${restaurant.pictureId}" alt="${restaurant.name}" />
      <div class="badge-rating">
        <span class="star">★</span>${restaurant.rating}
      </div>
      <h3>${restaurant.name}</h3>
      <p>${restaurant.city}</p>
      <p>${restaurant.description}</p>
    `;
    
    restaurantContainer.appendChild(restaurantItem);
  });
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  displayRestaurants();
  
  const menuButton = document.getElementById('menu');
  const navigation = document.querySelector('.app-bar__navigation');

  menuButton.addEventListener('click', () => {
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', !isExpanded);
    navigation.classList.toggle('active');
  });
});
