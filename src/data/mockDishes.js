const mockDishes = [
  // -------- Starters --------
  {
    id: 1,
    name: "Paneer Tikka",
    categoryId: 1,
    mealType: "STARTER",
    type: "VEG",
    description: "Grilled paneer cubes marinated with spices and yogurt.",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9HJGVLdtBH6MJOqchhSXhU-Kero7_KZhpa3swnWmd4ciTYzb3Px4LNUkjsr68-SJGokKipZPkGi_diBU4pGjW_9v8e0u8&s=10",
    category: { id: 1, name: "North Indian", image: "", isRecommendedForMealSuggestion: true },
    dishType: "APPETIZER",
    forChefit: true,
    forParty: true,
    ingredients: [
  { name: "Paneer", qty: "200g (cubed)" },
  { name: "Greek yogurt or thick curd", qty: "6 tbsp" },
  { name: "Ginger garlic paste", qty: "1 to 1.5 tsp" },
  { name: "Red chili powder", qty: "1 to 1.5 tsp" }
]

  },
  {
    id: 2,
    name: "Chicken 65",
    categoryId: 1,
    mealType: "STARTER",
    type: "NONVEG",
    description: "Spicy fried chicken bites tossed with curry leaves and green chilies.",
    image: "https://myfoodstory.com/wp-content/uploads/2021/05/Chicken-65-Spicy-Crispy-3.jpg",
    category: { id: 1, name: "South Indian", image: "", isRecommendedForMealSuggestion: true },
    dishType: "APPETIZER",
    forChefit: true,
    forParty: true,
    ingredients: [
  { name: "Boneless chicken", qty: "300-400g (cubed)" },
  { name: "Ginger garlic paste", qty: "1 to 1.5 tbsp" },
  { name: "Red chili powder (Kashmiri preferred)", qty: "1.5 tsp" },
  { name: "Yogurt (curd)", qty: "3 to 4 tbsp" }
]

  },
  {
    id: 3,
    name: "Veg Spring Rolls",
    categoryId: 1,
    mealType: "STARTER",
    type: "VEG",
    description: "Crispy rolls stuffed with mixed vegetables.",
    image: "https://www.thecookingcollective.com.au/wp-content/uploads/2022/08/Vegetable-Spring-Rolls-2-1.jpg",
    category: { id: 1, name: "Chinese", image: "", isRecommendedForMealSuggestion: true },
    dishType: "APPETIZER",
    forChefit: true,
    forParty: true,
    ingredients: [
  { name: "Cabbage (shredded)", qty: "1 cup" },
  { name: "Carrot (julienned)", qty: "1 medium" },
  { name: "Capsicum (bell pepper, thinly sliced)", qty: "1/2" },
  { name: "Spring onions (white and green parts separated)", qty: "2 sprigs" }
]

  },
  {
    id: 4,
    name: "Mutton Seekh Kebab",
    categoryId: 1,
    mealType: "STARTER",
    type: "NONVEG",
    description: "Juicy minced mutton kebabs grilled on skewers.",
    image: "https://glebekitchen.com/wp-content/uploads/2019/07/seekhkebabtopplatterbig.jpg",
    category: { id: 1, name: "Mughlai", image: "", isRecommendedForMealSuggestion: true },
    dishType: "APPETIZER",
    forChefit: true,
    forParty: true,
    ingredients: [
  { name: "Minced mutton (keema)", qty: "400g" },
  { name: "Ginger garlic paste", qty: "2 tbsp" },
  { name: "Green chillies (finely chopped)", qty: "2-3" },
  { name: "Fresh coriander leaves (chopped)", qty: "2 tbsp" }
]

  },
  {
    id: 5,
    name: "Hara Bhara Kabab",
    categoryId: 1,
    mealType: "STARTER",
    type: "VEG",
    description: "Spinach and green pea cutlets shallow fried to perfection.",
    image: "https://carveyourcraving.com/wp-content/uploads/2024/03/hara-bhara-kebab_.jpg",
    category: { id: 1, name: "North Indian", image: "", isRecommendedForMealSuggestion: true },
    dishType: "APPETIZER",
    forChefit: true,
    forParty: true,
    ingredients: [
  { name: "Spinach (palak)", qty: "120g (about 3.5 cups)" },
  { name: "Green peas", qty: "1 cup" },
  { name: "Potatoes (boiled and mashed)", qty: "2 medium" },
  { name: "Gram flour (besan)", qty: "2 tablespoons" }
]

  },

  // -------- Main Course --------
  {
    id: 6,
    name: "Butter Chicken",
    categoryId: 2,
    mealType: "MAIN COURSE",
    type: "NONVEG",
    description: "Tender chicken cooked in a creamy tomato butter gravy.",
    image: "https://masalaandchai.com/wp-content/uploads/2022/03/Butter-Chicken.jpg",
    category: { id: 2, name: "North Indian", image: "", isRecommendedForMealSuggestion: true },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    ingredients: [
  { name: "Boneless chicken", qty: "500g (cut into pieces)" },
  { name: "Greek yogurt (or thick curd)", qty: "1/3 cup" },
  { name: "Butter", qty: "75g (about 5 tbsp)" },
  { name: "Tomato puree", qty: "6 tbsp" }
]

  },
  {
    id: 7,
    name: "Paneer Butter Masala",
    categoryId: 2,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Cottage cheese cubes in a rich creamy tomato gravy.",
    image: "https://www.cookwithmanali.com/wp-content/uploads/2019/05/Paneer-Butter-Masala.jpg",
    category: { id: 2, name: "North Indian", image: "", isRecommendedForMealSuggestion: true },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    ingredients: [
  { name: "Paneer (Indian cottage cheese)", qty: "250g (cubed)" },
  { name: "Butter", qty: "2 tbsp" },
  { name: "Tomatoes (pureed or chopped)", qty: "3-4 medium" },
  { name: "Cream", qty: "3-4 tbsp" }
]

  },
  {
    id: 8,
    name: "Hyderabadi Biryani",
    categoryId: 2,
    mealType: "MAIN COURSE",
    type: "NONVEG",
    description: "Fragrant rice layered with marinated chicken and spices.",
    image: "https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg",
    category: { id: 2, name: "Hyderabadi", image: "", isRecommendedForMealSuggestion: true },
    dishType: "RICE",
    forChefit: true,
    forParty: true,
    ingredients: [
  { name: "Basmati rice (aged)", qty: "500g" },
  { name: "Mutton or chicken", qty: "1 kg" },
  { name: "Yogurt (curd)", qty: "200g" },
  { name: "Ginger garlic paste", qty: "2 tbsp" }
]

  },
  {
    id: 9,
    name: "Dal Tadka",
    categoryId: 2,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Yellow lentils cooked with onions, tomatoes, and tempered spices.",
    image: "https://pipingpotcurry.com/wp-content/uploads/2025/03/Dal-Tadka-Recipe-Piping-Pot-Curry.jpg",
    category: { id: 2, name: "North Indian", image: "", isRecommendedForMealSuggestion: true },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    ingredients: [
  { name: "Toor dal (split pigeon peas)", qty: "1 cup" },
  { name: "Garlic cloves (chopped)", qty: "4" },
  { name: "Cumin seeds", qty: "1 tsp" },
  { name: "Ghee (clarified butter) or oil", qty: "2 tbsp" }
]

  },
  {
    id: 10,
    name: "Fish Curry",
    categoryId: 2,
    mealType: "MAIN COURSE",
    type: "NONVEG",
    description: "Tangy and spicy fish curry cooked with tamarind and coconut.",
    image: "https://www.thedeliciouscrescent.com/wp-content/uploads/2023/07/Fish-Curry-7.jpg",
    category: { id: 2, name: "Coastal", image: "", isRecommendedForMealSuggestion: true },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    ingredients: [
  { name: "Firm white fish (like cod, tilapia)", qty: "500g (cut into pieces)" },
  { name: "Onions (finely chopped)", qty: "1 medium" },
  { name: "Tomatoes (pureed or chopped)", qty: "2 medium" },
  { name: "Ginger garlic paste", qty: "1 tbsp" }
]

  },

  // -------- Sides --------
  {
    id: 11,
    name: "Butter Naan",
    categoryId: 3,
    mealType: "SIDES",
    type: "VEG",
    description: "Soft Indian bread brushed with butter.",
    image: "https://static.vecteezy.com/system/resources/previews/039/002/677/non_2x/ai-generated-indian-naan-bread-with-garlic-butter-on-wooden-table-photo.jpg",
    category: { id: 3, name: "North Indian", image: "", isRecommendedForMealSuggestion: true },
    dishType: "BREAD",
    forChefit: true,
    forParty: true,
    ingredients: [
  { name: "All-purpose flour (maida)", qty: "2 cups" },
  { name: "Yogurt (curd)", qty: "½ cup" },
  { name: "Baking powder", qty: "1 tsp" },
  { name: "Butter (for brushing)", qty: "3-4 tbsp" }
]

  },
  {
    id: 12,
    name: "Garlic Naan",
    categoryId: 3,
    mealType: "SIDES",
    type: "VEG",
    description: "Naan topped with garlic and coriander.",
    image: "https://media.istockphoto.com/id/893029766/photo/garlic-and-coriander-naan-served-in-a-plate-its-a-type-of-indian-bread-or-roti-flavoured-with.jpg?s=612x612&w=0&k=20&c=WLGXBd45MxMdC7gyXqawzbyZ-1qRSSrLxO6Rbp92G70=",
    category: { id: 3, name: "North Indian", image: "", isRecommendedForMealSuggestion: true },
    dishType: "BREAD",
    forChefit: true,
    forParty: true,
    ingredients: [
  { name: "All-purpose flour (maida)", qty: "2 cups" },
  { name: "Yogurt (curd)", qty: "¼ cup" },
  { name: "Garlic (grated or minced)", qty: "1 to 2 tsp" },
  { name: "Butter (for brushing & garlic butter)", qty: "3 tbsp" }
]

  },
  {
    id: 13,
    name: "Jeera Rice",
    categoryId: 3,
    mealType: "SIDES",
    type: "VEG",
    description: "Steamed rice flavored with cumin seeds.",
    image: "https://media.istockphoto.com/id/609930740/photo/jeera-rice-cumin-rice.jpg?s=612x612&w=0&k=20&c=D0eo5vuexF1DpPqpmXZ6TXKJY59IKHz00YFmzlhkImk=",
    category: { id: 3, name: "North Indian", image: "", isRecommendedForMealSuggestion: true },
    dishType: "RICE",
    forChefit: true,
    forParty: true,
    ingredients: [
  { name: "Basmati rice", qty: "1.5 cups" },
  { name: "Cumin seeds (jeera)", qty: "2 tsp" },
  { name: "Ghee or oil", qty: "2 tbsp" },
  { name: "Green chili (optional)", qty: "1 slit" }
]

  },
  {
    id: 14,
    name: "Raita",
    categoryId: 3,
    mealType: "SIDES",
    type: "VEG",
    description: "Curd mixed with cucumber and spices.",
    image: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/20bec9d8-ef73-5911-a6d4-d170236c1b68/076e8f9a-4a70-5197-9179-a2dcd1b7b8f1.jpg",
    category: { id: 3, name: "North Indian", image: "", isRecommendedForMealSuggestion: true },
    dishType: "ACCOMPANIMENT",
    forChefit: true,
    forParty: true,
    ingredients: [
  { name: "Plain yogurt (curd)", qty: "1 cup" },
  { name: "Cucumber (finely chopped or grated)", qty: "½ cup" },
  { name: "Roasted cumin powder (jeera powder)", qty: "½ tsp" },
  { name: "Salt", qty: "to taste" }
]

  },
  {
    id: 15,
    name: "Masala Papad",
    categoryId: 3,
    mealType: "SIDES",
    type: "VEG",
    description: "Crispy papad topped with chopped onions, tomatoes, and spices.",
    image: "https://media.istockphoto.com/id/1263817605/photo/masala-papad-or-spicy-papadum-is-an-indian-or-asian-vegetarian-crispy-food-starter-in.jpg?s=612x612&w=0&k=20&c=leHxfC-oTlHAQaT16NmgDIqS_wITa8m-6ZqJvrWjodk=",
    category: { id: 3, name: "Indian", image: "", isRecommendedForMealSuggestion: true },
    dishType: "ACCOMPANIMENT",
    forChefit: true,
    forParty: true,
    ingredients: [
  { name: "Papad (fried or roasted)", qty: "4 pieces" },
  { name: "Onion (finely chopped)", qty: "1 cup" },
  { name: "Tomato (finely chopped)", qty: "½ cup" },
  { name: "Chaat masala", qty: "1 tsp" }
]

  },

  // -------- Desserts --------
  {
    id: 16,
    name: "Gulab Jamun",
    categoryId: 4,
    mealType: "DESSERT",
    type: "VEG",
    description: "Soft fried balls soaked in sugar syrup.",
    image: "https://media.istockphoto.com/id/1194662949/photo/indian-dessert-or-sweet-dish-gulab-jamun-in-white-bowl-on-yellow-background.jpg?s=612x612&w=0&k=20&c=XAOQkQC-Mu-XXviGtWU6NTz8vZzT1sY0oaJQ4jWo2Fo=",
    category: { id: 4, name: "Indian Sweet", image: "", isRecommendedForMealSuggestion: true },
    dishType: "SWEET",
    forChefit: true,
    forParty: true,
    ingredients: [
  { name: "Khoya (mawa)", qty: "200g (grated)" },
  { name: "All-purpose flour (maida)", qty: "3 tbsp" },
  { name: "Sugar", qty: "2 cups (for syrup)" },
  { name: "Cardamom pods (crushed)", qty: "4-5" }
]

  },
  {
    id: 17,
    name: "Rasmalai",
    categoryId: 4,
    mealType: "DESSERT",
    type: "VEG",
    description: "Soft cheese patties soaked in saffron milk.",
    image: "https://media.istockphoto.com/id/515853026/photo/traditional-rasmalai-or-ras-malai-indian-dessert-bengali-sweet.jpg?s=612x612&w=0&k=20&c=LYftdDAkIa8lVyfmwt8iK-OPSQr2KCcJcYpPhbFtFBk=",
    category: { id: 4, name: "Bengali Sweet", image: "", isRecommendedForMealSuggestion: true },
    dishType: "SWEET",
    forChefit: true,
    forParty: true,
    ingredients: [
  { name: "Rasgulla (paneer balls)", qty: "12-15 pieces" },
  { name: "Whole milk", qty: "1 liter" },
  { name: "Sugar", qty: "4-5 tablespoons" },
  { name: "Cardamom powder", qty: "¼ teaspoon" }
]

  },
  {
    id: 18,
    name: "Carrot Halwa",
    categoryId: 4,
    mealType: "DESSERT",
    type: "VEG",
    description: "Grated carrot cooked with milk, sugar, and ghee.",
    image: "https://www.shutterstock.com/image-photo/gajar-ka-halwa-carrotbased-sweet-600nw-759925072.jpg",
    category: { id: 4, name: "North Indian", image: "", isRecommendedForMealSuggestion: true },
    dishType: "SWEET",
    forChefit: true,
    forParty: true,
    ingredients: [
  { name: "Carrots (grated)", qty: "1 kg" },
  { name: "Whole milk", qty: "1.25 liters" },
  { name: "Ghee (clarified butter)", qty: "3 to 4 tbsp" },
  { name: "Sugar", qty: "¾ cup" }
]

  },
  {
    id: 19,
    name: "Ice Cream Sundae",
    categoryId: 4,
    mealType: "DESSERT",
    type: "VEG",
    description: "Vanilla ice cream topped with chocolate syrup and nuts.",
    image: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/295346ce-8838-577b-9e97-34cd39d88752/8f037b8a-487e-5bc4-8aef-95264a468c03.jpg",
    category: { id: 4, name: "Western", image: "", isRecommendedForMealSuggestion: true },
    dishType: "SWEET",
    forChefit: true,
    forParty: true,
    ingredients: [
  { name: "Ice cream (any flavor)", qty: "2-3 scoops" },
  { name: "Chocolate or caramel syrup", qty: "1-2 tbsp" },
  { name: "Whipped cream", qty: "¼ cup" },
  { name: "Chopped nuts or sprinkles", qty: "1 tbsp" }
]

  },
  {
    id: 20,
    name: "Fruit Custard",
    categoryId: 4,
    mealType: "DESSERT",
    type: "VEG",
    description: "Seasonal fruits mixed in sweet custard.",
    image: "https://www.mygingergarlickitchen.com/wp-content/rich-markup-images/1x1/1x1-fruit-custard.jpg",
    category: { id: 4, name: "Fusion", image: "", isRecommendedForMealSuggestion: true },
    dishType: "SWEET",
    forChefit: true,
    forParty: true,
    ingredients: [
  { name: "Milk", qty: "2.5 cups" },
  { name: "Custard powder", qty: "3 tbsp" },
  { name: "Sugar", qty: "4-5 tbsp" },
  { name: "Mixed fruits (apple, banana, mango, pomegranate, etc.)", qty: "about 2 cups" }
]

  },

  // -------- More Main Course to make it 30 --------
  {
    id: 21,
    name: "Chole Bhature",
    categoryId: 2,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Spicy chickpeas served with fried bread.",
    image: "https://static.toiimg.com/thumb/53314156.cms?height=800&imgsize=1762111&width=800",
    category: { id: 2, name: "North Indian", image: "", isRecommendedForMealSuggestion: true },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    ingredients: [
  { name: "Chickpeas (chole)", qty: "1 cup (soaked overnight)" },
  { name: "All-purpose flour (maida) for bhature", qty: "2 cups" },
  { name: "Tea bags (for cooking chole)", qty: "2" },
  { name: "Ginger garlic paste", qty: "1 tbsp" }
]

  },
  {
    id: 22,
    name: "Egg Curry",
    categoryId: 2,
    mealType: "MAIN COURSE",
    type: "NONVEG",
    description: "Boiled eggs in spicy onion-tomato gravy.",
    image: "https://allwaysdelicious.com/wp-content/uploads/2024/12/egg-curry-in-pan-11.jpg",
    category: { id: 2, name: "Indian", image: "", isRecommendedForMealSuggestion: true },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    ingredients: [
  { name: "Hard boiled eggs", qty: "4-5" },
  { name: "Onions (finely chopped or pureed)", qty: "1 to 2 medium" },
  { name: "Tomatoes (pureed or finely chopped)", qty: "2 to 3 medium" },
  { name: "Ginger garlic paste", qty: "1 tbsp" }
]

  },
  {
    id: 23,
    name: "Palak Paneer",
    categoryId: 2,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Spinach puree cooked with paneer cubes.",
    image: "data:image/jpeg;base64,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",
    category: { id: 2, name: "North Indian", image: "", isRecommendedForMealSuggestion: true },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    ingredients: [
  { name: "Fresh spinach (palak)", qty: "500g" },
  { name: "Paneer (Indian cottage cheese)", qty: "250g (cubed)" },
  { name: "Onion (finely chopped)", qty: "1 medium" },
  { name: "Ginger garlic paste", qty: "1 tbsp" }
]

  },
  {
    id: 24,
    name: "Prawn Masala",
    categoryId: 2,
    mealType: "MAIN COURSE",
    type: "NONVEG",
    description: "Prawns cooked in spicy onion tomato masala.",
    image: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/b6592e63-0725-520f-a927-a9913aee947a/96dc44a6-6856-5044-ac58-75be01ed881d.jpg",
    category: { id: 2, name: "Coastal", image: "", isRecommendedForMealSuggestion: true },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    ingredients: [
    { name: "Prawn", qty: "200g" },
    { name: "Yogurt", qty: "2 tbsp" },
    { name: "Spices", qty: "to taste" },
    { name: "Capsicum", qty: "1/2" },
  ],
  },
  {
    id: 25,
    name: "Veg Pulao",
    categoryId: 2,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Aromatic rice cooked with vegetables and spices.",
    image: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/1353d776-bf7f-5cbb-90c0-37978b2843dc/265aa44e-5635-5608-9e96-f54abb855d85.jpg",
    category: { id: 2, name: "Indian", image: "", isRecommendedForMealSuggestion: true },
    dishType: "RICE",
    forChefit: true,
    forParty: true,
    ingredients: [
  { name: "Basmati rice", qty: "1.5 cups" },
  { name: "Mixed vegetables (carrot, peas, beans)", qty: "1 cup" },
  { name: "Cumin seeds", qty: "1 tsp" },
  { name: "Ghee or oil", qty: "2 tbsp" }
]

  },
  {
    id: 26,
    name: "Shahi Paneer",
    categoryId: 2,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Paneer cooked in rich cashew-based gravy.",
    image: "https://images.prismic.io/arvindas/fbbc01a9-9408-4623-bd4b-19f5cb5a7dae_Arvinda%27s+Shahi+Paneer.jpg?auto=compress,format&w=1024&h=721&fm=webp&fit=crop",
    category: { id: 2, name: "North Indian", image: "", isRecommendedForMealSuggestion: true },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    ingredients: [
  { name: "Paneer (Indian cottage cheese)", qty: "250g (cubed)" },
  { name: "Onion (finely chopped or pureed)", qty: "1 medium" },
  { name: "Cashew nuts", qty: "10-12 (soaked and ground to paste)" },
  { name: "Cream or fresh malai", qty: "3-4 tbsp" }
]

  },
  {
    id: 27,
    name: "Keema Curry",
    categoryId: 2,
    mealType: "MAIN COURSE",
    type: "NONVEG",
    description: "Minced mutton curry cooked with spices.",
    image: "https://thumbs.dreamstime.com/b/delicious-keema-curry-thali-arrangement-under-soft-daylight-bowl-flavorful-traditional-setup-beautifully-lit-table-374739169.jpg",
    category: { id: 2, name: "Mughlai", image: "", isRecommendedForMealSuggestion: true },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    ingredients: [
  { name: "Minced meat (mutton, lamb, or chicken)", qty: "400g" },
  { name: "Onions (finely chopped)", qty: "1 large" },
  { name: "Tomato puree or finely chopped tomatoes", qty: "1/4 to 1/2 cup" },
  { name: "Ginger garlic paste", qty: "1 tbsp" }
]

  },
  {
    id: 28,
    name: "Rajma Masala",
    categoryId: 2,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Red kidney beans cooked in onion tomato gravy.",
    image: "https://www.shutterstock.com/image-photo/rajma-masala-preparation-photos-260nw-1076205782.jpg",
    category: { id: 2, name: "North Indian", image: "", isRecommendedForMealSuggestion: true },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    ingredients: [
  { name: "Rajma (kidney beans)", qty: "1 cup (soaked overnight)" },
  { name: "Onion (finely chopped)", qty: "1 large" },
  { name: "Tomatoes (pureed or chopped)", qty: "2 large" },
  { name: "Ginger garlic paste", qty: "1.5 tbsp" }
]

  },
  {
    id: 29,
    name: "Malai Kofta",
    categoryId: 2,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Fried paneer-potato balls in creamy cashew gravy.",
    image: "https://media.istockphoto.com/id/520124728/photo/indian-food-specialties-indian-dish-malai-kofta-or-veg-kofta.jpg?s=612x612&w=0&k=20&c=HvINRjHvf_95CAgVpqUQM3dcCsMW8a_S_jwjnAfjthE=",
    category: { id: 2, name: "North Indian", image: "", isRecommendedForMealSuggestion: true },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    ingredients: [
  { name: "Paneer (crumbled)", qty: "150g" },
  { name: "Boiled potatoes (crumbled)", qty: "200g" },
  { name: "Cornflour (cornstarch)", qty: "2.5 tbsp" },
  { name: "Cashews (chopped)", qty: "2 tbsp (optional)" }
]

  },
  {
    id: 30,
    name: "Mutton Rogan Josh",
    categoryId: 2,
    mealType: "MAIN COURSE",
    type: "NONVEG",
    description: "Traditional Kashmiri mutton curry cooked with aromatic spices.",
    image: "https://media.istockphoto.com/id/1440333964/photo/lamb-rogan-gosht-mutton-korma-karahi-with-white-rice-served-in-dish-isolated-on-table-side.jpg?s=612x612&w=0&k=20&c=zOps_-bcm9vBqvJhE4YOl-o9r5WtO3OoSUfg0gpHmCg=",
    category: { id: 2, name: "Kashmiri", image: "", isRecommendedForMealSuggestion: true },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    ingredients: [
  { name: "Bone-in mutton pieces", qty: "500g" },
  { name: "Yogurt (curd)", qty: "¾ cup" },
  { name: "Kashmiri red chili powder", qty: "1 to 1.5 tbsp" },
  { name: "Whole spices (bay leaf, cloves, cinnamon, cardamoms)", qty: "as needed" }
]

  },
];

export default mockDishes;