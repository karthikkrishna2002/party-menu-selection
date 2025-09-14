// src/components/DishList.js
import React from "react";
import DishCard from "./DishCard";

function DishList({ dishes, onAddDish, onRemoveDish, selectedDishes, onViewIngredients }) {
  const selectedType = selectedDishes.length === 0 ? null : selectedDishes[0].type;
  const filteredDishes = dishes.filter((dish) => {
    if (selectedType === null) {
      return true;
    }
    return dish.type === selectedType;
  });

  if (filteredDishes.length === 0) {
    return <p>No dishes found.</p>;
  }

  return (
    <div className="dish-list">
      {filteredDishes.map((dish) => (
        <DishCard
          key={dish.id}
          dish={dish}
          onAddDish={onAddDish}
          onRemoveDish={onRemoveDish}
          isSelected={selectedDishes.includes(dish.id)}
          onViewIngredients={onViewIngredients}
        />
      ))}
    </div>
  );
}

export default DishList;
