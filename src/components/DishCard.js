// src/components/DishCard.js
import React from "react";

function DishCard({ dish, onAddDish, onRemoveDish, isSelected, onViewIngredients }) {
  return (
    <div className="dish-card">
      <img src={dish.image} alt={dish.name} />
      <h3>{dish.name}</h3>
      <p>{dish.description}</p>
      <p><b>Type:</b> {dish.type}</p>

      <div className="card-actions">
        {isSelected ? (
          <button className="remove-btn" onClick={() => onRemoveDish(dish.id)}>Remove</button>
        ) : (
          <button className="add-btn" onClick={() => onAddDish(dish.id)}>Add</button>
        )}
        <button className="ingredients-btn" onClick={() => onViewIngredients(dish)}>Ingredients</button>
      </div>
    </div>
  );
}

export default DishCard;
