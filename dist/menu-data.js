// Edit this list to update menu names, descriptions, prices, categories, and dietary labels.
window.menuItems = [
  { id: 1, category: "pizza", name: "Pizza Margherita", description: "San Marzano tomato, fior di latte, basil, and extra-virgin olive oil.", price: 15, tags: ["Vegetarian"], image: "assets/pizza-margherita.jpg", featured: true },
  { id: 2, category: "pizza", name: "Pepperoni Pizza", description: "Tomato sauce, mozzarella, crisp pepperoni, and oregano.", price: 17, tags: [] },
  { id: 3, category: "pasta-risotto", name: "Spaghetti Carbonara", description: "Pecorino Romano, egg yolk, black pepper, and guanciale.", price: 19, tags: [] },
  { id: 4, category: "pasta-risotto", name: "Lasagna Bolognese", description: "Pasta layers, slow-cooked beef ragù, béchamel, and gratin cheese.", price: 21, tags: [], image: "assets/lasagna-bolognese.jpg", featured: true },
  { id: 5, category: "pasta-risotto", name: "Fettuccine Alfredo", description: "Silky butter-Parmesan sauce, cracked pepper, and fresh fettuccine.", price: 18, tags: ["Vegetarian"] },
  { id: 6, category: "pasta-risotto", name: "Spaghetti Bolognese", description: "Spaghetti dressed with our slow-simmered tomato and beef ragù.", price: 19, tags: [], image: "assets/tagliatelle-ragu.jpg", featured: true },
  { id: 7, category: "pasta-risotto", name: "Spinach & Ricotta Ravioli", description: "Pillowy ravioli, lemon butter, sage, and shaved Parmesan.", price: 20, tags: ["Vegetarian"] },
  { id: 8, category: "pasta-risotto", name: "Gnocchi al Pesto", description: "Potato gnocchi with basil pesto, garlic, and aged cheese.", price: 18, tags: ["Vegetarian"] },
  { id: 9, category: "pasta-risotto", name: "Risotto ai Funghi", description: "Creamy Carnaroli rice, roasted mushrooms, thyme, and Parmesan.", price: 19, tags: ["Vegetarian"] },
  { id: 10, category: "pasta-risotto", name: "Pollo alla Parmigiana", description: "Crisp chicken cutlet, tomato sauce, melted mozzarella, and basil.", price: 22, tags: [] },
  { id: 11, category: "antipasti", name: "Bruschetta al Pomodoro", description: "Charred bread with tomato, garlic, basil, and olive oil.", price: 9, tags: ["Vegetarian"], image: "assets/antipasti.jpg", featured: true },
  { id: 12, category: "antipasti", name: "Caprese Salad", description: "Ripe tomato, fresh mozzarella, basil, and olive oil.", price: 12, tags: ["Vegetarian"] },
  { id: 13, category: "antipasti", name: "Arancini", description: "Golden risotto balls filled with mozzarella and served with tomato sauce.", price: 11, tags: ["Vegetarian"] },
  { id: 14, category: "antipasti", name: "Minestrone", description: "Seasonal vegetables, beans, tiny pasta, and a Parmesan finish.", price: 9, tags: ["Vegetarian"] },
  { id: 15, category: "dolci", name: "Tiramisù", description: "Espresso-soaked ladyfingers, mascarpone, cocoa, and dark chocolate.", price: 9, tags: ["Vegetarian"], image: "assets/tiramisu.jpg", featured: true },
  { id: 16, category: "dolci", name: "Panna Cotta", description: "Vanilla cream with a bright berry compote.", price: 8, tags: ["Vegetarian"] },
  { id: 17, category: "dolci", name: "Gelato Trio", description: "A scoop each of pistachio, vanilla, and dark chocolate.", price: 8, tags: ["Vegetarian"] },
  { id: 18, category: "coffee-drinks", name: "Espresso", description: "Short, aromatic, and unapologetically Italian.", price: 4, tags: ["Vegetarian"] },
  { id: 19, category: "coffee-drinks", name: "Cappuccino", description: "Espresso, steamed milk, and a soft cap of foam.", price: 5, tags: ["Vegetarian"] },
  { id: 20, category: "coffee-drinks", name: "Italian Lemonade", description: "Bright lemon, sparkling water, and a touch of cane sugar.", price: 5, tags: ["Vegetarian"] }
];

window.menuCategories = [
  { id: "pizza", name: "Pizzas", kicker: "Out of the oven" },
  { id: "pasta-risotto", name: "Pasta & risotto", kicker: "Slow things down" },
  { id: "antipasti", name: "Antipasti", kicker: "Start at the table" },
  { id: "dolci", name: "Dolci", kicker: "A sweet little finish" },
  { id: "coffee-drinks", name: "Coffee & drinks", kicker: "A proper pause" }
];