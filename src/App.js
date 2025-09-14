import React, { useState, useEffect } from "react";
import mockDishes from "./data/mockDishes";
import "./App.css";

const MEAL_TYPES = [
  { label: "All", value: "ALL" },
  { label: "Starter", value: "STARTER" },
  { label: "Main Course", value: "MAIN COURSE" },
  { label: "Dessert", value: "DESSERT" },
  { label: "Sides", value: "SIDES" },
];

const PLACEHOLDER_IMAGE =
  "https://via.placeholder.com/260x120?text=No+Image";

function App() {
  const [selectedMeal, setSelectedMeal] = useState("ALL");
  const [search, setSearch] = useState("");
  const [vegFilter, setVegFilter] = useState(true);
  const [nonVegFilter, setNonVegFilter] = useState(true);
  const [selectedDishes, setSelectedDishes] = useState(() => {
    // Load cart from localStorage on initial mount
    try {
      const saved = localStorage.getItem("selectedDishes");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [ingredientDish, setIngredientDish] = useState(null);
  const [showCart, setShowCart] = useState(false);

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("selectedDishes", JSON.stringify(selectedDishes));
    } catch {}
  }, [selectedDishes]);

  // Filter dishes by meal type, veg/non-veg, and search
  const filteredDishes = mockDishes.filter((dish) => {
    if (selectedMeal !== "ALL" && dish.mealType !== selectedMeal) return false;
    if (!vegFilter && dish.type === "VEG") return false;
    if (!nonVegFilter && (dish.type === "NONVEG" || dish.type === "NON_VEG"))
      return false;
    if (search && !dish.name.toLowerCase().includes(search.trim().toLowerCase()))
      return false;
    return true;
  });

  // Count selected dishes per meal type
  const selectedCountByMeal = (mealType) =>
    selectedDishes.filter((id) => {
      const dish = mockDishes.find((d) => d.id === id);
      return dish && dish.mealType === mealType;
    }).length;

  // Add/remove dish
  const toggleDish = (id) => {
    setSelectedDishes((prev) =>
      prev.includes(id) ? prev.filter((dishId) => dishId !== id) : [...prev, id]
    );
  };

  // Remove dish from cart
  const removeFromCart = (id) => {
    setSelectedDishes((prev) => prev.filter((dishId) => dishId !== id));
  };

  // Get dish details from selectedDishes
  const cartDishes = selectedDishes
    .map((id) => mockDishes.find((d) => d.id === id))
    .filter(Boolean);

  return (
    <div className="app-container">
      {/* Header with Title and Cart Icon Side-by-Side */}
      <div
        className="app-header"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
          marginBottom: 20,
        }}
      >
        <h1 style={{ margin: 0 }}>Party Menu Selection</h1>
        <button
          style={{
            background: "none",
            border: "none",
            fontSize: "2rem",
            cursor: "pointer",
            position: "relative",
            marginBottom: 0,
            marginLeft: 0,
          }}
          onClick={() => setShowCart(true)}
          aria-label="View Cart"
        >
          🛒
          {selectedDishes.length > 0 && (
            <span
              style={{
                position: "absolute",
                top: -5,
                right: -10,
                background: "#dc3545",
                color: "#fff",
                borderRadius: "50%",
                padding: "2px 7px",
                fontSize: "0.9em",
                fontWeight: 700,
              }}
            >
              {selectedDishes.length}
            </span>
          )}
        </button>
      </div>

      {/* Tabs */}
      <div className="filters">
        <div className="categories">
          {MEAL_TYPES.map((tab) => (
            <button
              key={tab.value}
              className={selectedMeal === tab.value ? "active" : ""}
              onClick={() => setSelectedMeal(tab.value)}
            >
              {tab.label}
              {tab.value !== "ALL" && selectedCountByMeal(tab.value) > 0 && (
                <span
                  style={{
                    background: "#007bff",
                    color: "#fff",
                    borderRadius: "50%",
                    padding: "2px 8px",
                    marginLeft: 8,
                    fontSize: "0.9em",
                  }}
                >
                  {selectedCountByMeal(tab.value)}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Veg/Non-Veg Toggle */}
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={() => setVegFilter((v) => !v)}
            style={{
              padding: "8px 16px",
              borderRadius: "8px",
              border: "none",
              background: vegFilter ? "#4caf50" : "#f0f0f0",
              color: vegFilter ? "white" : "black",
              cursor: "pointer",
            }}
          >
            Veg
          </button>

          <button
            onClick={() => setNonVegFilter((v) => !v)}
            style={{
              padding: "8px 16px",
              borderRadius: "8px",
              border: "none",
              background: nonVegFilter ? "#e53935" : "#f0f0f0",
              color: nonVegFilter ? "white" : "black",
              cursor: "pointer",
            }}
          >
            Non-Veg
          </button>
        </div>

        {/* Search */}
        <div className="search-filter">
          <input
            type="text"
            placeholder="Search dishes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Dish List */}
      <div className="dish-list">
        {filteredDishes.length === 0 ? (
          <div className="summary">No dishes found.</div>
        ) : (
          filteredDishes.map((dish) => {
            const isSelected = selectedDishes.includes(dish.id);
            return (
              <div
                className="dish-card"
                key={dish.id}
                style={{
                  border: isSelected && "#007bff 2px solid",
                  boxShadow: isSelected
                    ? "0 4px 16px rgba(0,123,255,0.12)"
                    : undefined,
                  opacity: dish.type === "NONVEG" || dish.type === "NON_VEG" ? 0.92 : 1,
                }}
              >
                <img
                  src={dish.image || PLACEHOLDER_IMAGE}
                  alt={dish.name}
                  style={{
                    border:
                      dish.type === "VEG"
                        ? "2px solid #28a745"
                        : "2px solid #dc3545",
                  }}
                />
                <h2 style={{ margin: "12px 0 8px", color: "#2d3a4a" }}>{dish.name}</h2>
                <p style={{ color: "#555", minHeight: 48 }}>{dish.description}</p>
                <div className="card-actions">
                  <button
                    className={isSelected ? "remove-btn" : "add-btn"}
                    onClick={() => toggleDish(dish.id)}
                  >
                    {isSelected ? "Remove" : "Add to Menu"}
                  </button>
                  <button
                    className="ingredients-btn"
                    onClick={() => setIngredientDish(dish)}
                  >
                    View Ingredients
                  </button>
                </div>

                {/* Veg/Non-Veg badge */}
                <span
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    background: dish.type === "VEG" ? "#28a745" : "#dc3545",
                    color: "#fff",
                    borderRadius: "50%",
                    width: 22,
                    height: 22,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                    fontWeight: 700,
                  }}
                  title={dish.type}
                >
                  {dish.type === "VEG" ? "V" : "NV"}
                </span>
              </div>
            );
          })
        )}
      </div>

      {/* Summary and Continue */}
      <div className="summary" style={{ marginTop: 32, textAlign: "center" }}>
        <strong>Total Selected Dishes: {selectedDishes.length}</strong>
        <button
          className="add-btn"
          style={{
            marginLeft: 24,
            padding: "10px 28px",
            fontSize: "1.1em",
            fontWeight: 600,
          }}
        >
          Continue
        </button>
      </div>

      {/* Ingredient Modal */}
      {ingredientDish && (
        <div className="modal-overlay" onClick={() => setIngredientDish(null)}>
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
            style={{ minWidth: 320 }}
          >
            <h2 style={{ marginBottom: 8 }}>{ingredientDish.name}</h2>
            <p style={{ color: "#555", marginBottom: 18 }}>
              {ingredientDish.description}
            </p>
            <h3 style={{ marginBottom: 8 }}>Ingredients</h3>
            <ul style={{ paddingLeft: 18, marginBottom: 18 }}>
              {(ingredientDish.ingredients || []).map((ing, idx) => (
                <li key={idx}>
                  {ing.name} - <span style={{ color: "#007bff" }}>{ing.qty}</span>
                </li>
              ))}
            </ul>
            <button className="close-btn" onClick={() => setIngredientDish(null)}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Cart Modal */}
      {showCart && (
        <div className="modal-overlay" onClick={() => setShowCart(false)}>
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
            style={{ minWidth: 320, maxWidth: 400 }}
          >
            <h2 style={{ marginBottom: 8 }}>🛒 Your Cart</h2>
            {cartDishes.length === 0 ? (
              <p style={{ color: "#555" }}>No dishes in cart.</p>
            ) : (
              <ul
                style={{
                  paddingLeft: 0,
                  marginBottom: 18,
                  listStyle: "none",
                }}
              >
                {cartDishes.map((dish) => (
                  <li
                    key={dish.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 10,
                      borderBottom: "1px solid #eee",
                      paddingBottom: 6,
                    }}
                  >
                    <span>
                      <img
                        src={dish.image || PLACEHOLDER_IMAGE}
                        alt={dish.name}
                        style={{
                          width: 40,
                          height: 40,
                          objectFit: "cover",
                          borderRadius: 6,
                          marginRight: 10,
                          border:
                            dish.type === "VEG"
                              ? "2px solid #28a745"
                              : "2px solid #dc3545",
                        }}
                      />
                      {dish.name}
                    </span>
                    <button
                      className="remove-btn"
                      style={{ padding: "4px 10px", fontSize: "0.9em" }}
                      onClick={() => removeFromCart(dish.id)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <button className="close-btn" onClick={() => setShowCart(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
