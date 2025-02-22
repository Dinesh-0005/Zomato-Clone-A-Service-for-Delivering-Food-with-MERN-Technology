import React from 'react';
import './HomePage.css'; // Optional CSS file for styling

const HomePage = () => {
  const restaurants = [
    {
      id: 1,
      name: "Pizza Place",
      cuisine: "Italian",
      rating: 4.5,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Sushi Spot",
      cuisine: "Japanese",
      rating: 4.7,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Burger Joint",
      cuisine: "American",
      rating: 4.3,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Curry House",
      cuisine: "Indian",
      rating: 4.8,
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="homepage-container">
      <header className="header">
        <h1>Welcome to Zomato</h1>
        <h2>Your favorite restaurants are waiting for you!</h2>
      </header>
      <section className="restaurant-list">
        <h3>Popular Restaurants</h3>
        <div className="card-container">
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} className="restaurant-card">
              <img src={restaurant.image} alt={restaurant.name} />
              <h4>{restaurant.name}</h4>
              <p>Cuisine: {restaurant.cuisine}</p>
              <p>Rating: {restaurant.rating} ⭐</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;