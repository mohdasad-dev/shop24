import { assets } from '../assets/assets';

export const categories = [
    { id: 1, name: "Atta, Rice & Dal", icon: "🍳", image:assets.Atta_Rice_Dal },
    { id: 2, name: "Masala, Oil & Ghee", icon: "🧃" , image: assets.Biscuits_Instant_Food },
    { id: 3, name: "Dry Fruits & Oats", icon: "🥗",  image: assets.Dry_Fruits_Oats},
    { id: 4, name: "Snacks & Munchies", icon: "🧊", image: assets.Snacks_Munchies },
    { id: 5, name: "Sweet Tooth", icon: "☕", image: assets.Sweet_Tooth },
    { id: 6, name: "Biscuits & Instant Food", icon: "🧴", image: assets.Biscuits_Instant_Food },
    { id: 6, name: "Tea, Coffee & Drinks", icon: "🧴", image: assets.Tea_Coffee_Drinks},
    { id: 6, name: "Dairy, Bread & Eggs", icon: "🧴", image: assets.Dairy_Bread_Eggs },
    { id: 6, name: "Ice Cream & Frozen", icon: "🧴", image: assets.IceCream_Frozen },
    { id: 6, name: "Personal Care", icon: "🧴" , image: assets.Personal_Care},
    { id: 6, name: "Cleaning Essentials", icon: "🧴", image: assets.Cleaning_Essentials},
    { id: 6, name: "Pharma & Wellness", icon: "🧴", image: assets.Pharma_Wellness },
    { id: 6, name: "Paper & Disposables", icon: "🧴", image: assets.Paper_Disposables},
    { id: 6, name: "Home & Office", icon: "🧴", image: assets.Home_Office },
    { id: 6, name: "Cigarettes", icon: "🧴", image: assets.Cigarettes },
    { id: 6, name: "Baby care", icon: "🧴", image: assets.Baby_Care},
  ];
  
  export const products = [
    // Dairy (example)
    { id: 1, name: "Milk", category: "Fresh & Dairy" },
    { id: 2, name: "Butter", category: "Fresh & Dairy" },
    { id: 3, name: "Paneer", category: "Fresh & Dairy" },
    { id: 4, name: "Cheese", category: "Fresh & Dairy" },
  
    // Snacks
    { id: 5, name: "Chips", category: "Snacks", images: "https://e7.pngegg.com/pngimages/484/133/png-clipart-potato-chip-pepsi-flavor-lay-s-frito-lay-pepsi-thumbnail.png" },
    { id: 6, name: "Biscuits", category: "Snacks" },
    { id: 7, name: "Namkeen", category: "Snacks" },
  
    // Beverages
    { id: 8, name: "Coca Cola", category: "Beverages" },
    { id: 9, name: "Juice", category: "Beverages" },
    { id: 10, name: "Tea", category: "Beverages" },
  
    // Frozen
    { id: 11, name: "Ice Cream", category: "Frozen Foods" },
    { id: 12, name: "Frozen Pizza", category: "Frozen Foods" },
  
    // Breakfast
    { id: 13, name: "Bread", category: "Breakfast" },
    { id: 14, name: "Cornflakes", category: "Breakfast" },
  
    // Household
    { id: 15, name: "Detergent", category: "Household" },
    { id: 16, name: "Soap", category: "Household" },
    { id: 17, name: "Shampoo", category: "Household" },
  
    // Extra items
    { id: 18, name: "Yogurt", category: "Fresh & Dairy" },
    { id: 19, name: "Cold Coffee", category: "Beverages" },
    { id: 20, name: "Popcorn", category: "Snacks" }
  ];


 // Data matching the 4 sections in your image
export const promoCards = [
  { title: "Get printouts delivered", subtitle: "Safe & secure · Convenient & Fast", color: "#E8F0FE", img: "printer.png" },
  { title: "Pharmacy at your doorstep!", subtitle: "Cough syrups, pain relief sprays & more", color: "#E6FAF4", img: "pharma.png" },
  { title: "Pet care supplies at your door", subtitle: "Food, treats, toys & more", color: "#FFF8E1", img: "pet.png" },
  { title: "No time for a diaper run?", subtitle: "Get baby care essentials", color: "#F3F4F6", img: "baby.png" }
]; 


// ═══════════════════════════════════════
//  menuData.js — Shop24Hours Full Menu
//  Updated from menu.xlsx
// ═══════════════════════════════════════

export const FEATURED = {
  emoji: "🍕",
  tag: "Chef's Pick · Made Fresh Now",
  name: "Three Chicken Pizza",
  desc: "Loaded with Chicken Tikka, Salami & Seekh Kebab on a crispy base with signature sauce and melted cheese. The ultimate crowd-pleaser.",
  time: "20 min",
  serves: "1–2 persons",
  calories: "780 kcal",
  price: 349,
  category: "Pizza",
};

export const CATEGORIES = [
  {
    id: "burgers",
    label: "Burgers",
    emoji: "🍔",
    color: "#f5a623",
    addon: { label: "Add-on Cheese", price: 25 },
    items: [
      { id: 101, name: "Aloo Tikki Burger",      desc: "Crispy potato patty, soft bun",           prep: "8 min",  price: 69,  tag: "Veg"     },
      { id: 102, name: "Classic Veggie Burger",   desc: "Veg patty, mayo & cheese",                prep: "8 min",  price: 89,  tag: "Veg"     },
      { id: 103, name: "Chicken Burger",          desc: "Juicy chicken patty with sauces",         prep: "10 min", price: 129, tag: "Chicken" },
      { id: 104, name: "Crunchy Chicken Burger",  desc: "Crispy fried chicken, special sauce",     prep: "12 min", price: 139, tag: "Chicken" },
      { id: 105, name: "Double Chicken Burger",   desc: "Double patty, extra indulgence",          prep: "14 min", price: 169, tag: "Chicken" },
    ],
  },
  {
    id: "wraps",
    label: "Wraps",
    emoji: "🫔",
    color: "#e67e22",
    items: [
      { id: 201, name: "Vegetable Wrap",          desc: "Fresh veggie filling, mint chutney",      prep: "8 min",  price: 99,  tag: "Veg"     },
      { id: 202, name: "Aloo Patty Wrap",         desc: "Crispy potato patty in a soft wrap",      prep: "9 min",  price: 129, tag: "Veg"     },
      { id: 203, name: "Paneer Tikka Wrap",       desc: "Spiced paneer tikka, tangy chutney",      prep: "10 min", price: 149, tag: "Veg"     },
      { id: 204, name: "Peri Peri Paneer Wrap",   desc: "Paneer with fiery peri peri sauce",       prep: "10 min", price: 159, tag: "Veg"     },
      { id: 205, name: "Chicken Tikka Wrap",      desc: "Juicy chicken tikka, herbed wrap",        prep: "12 min", price: 179, tag: "Chicken" },
      { id: 206, name: "Double Chicken Wrap",     desc: "Double the chicken, double the joy",      prep: "14 min", price: 199, tag: "Chicken" },
      { id: 207, name: "Crunchy Chicken Wrap",    desc: "Crispy fried chicken in a soft wrap",     prep: "14 min", price: 199, tag: "Chicken" },
    ],
  },
  {
    id: "momos",
    label: "Momos",
    emoji: "🥟",
    color: "#b5e550",
    items: [
      { id: 301, name: "Veggie Momos Steam (6 pcs)",    desc: "Fresh veggie filling, steamed soft",   prep: "10 min", price: 69,  tag: "Veg"     },
      { id: 302, name: "Paneer Momos Steam (6 pcs)",    desc: "Paneer filling, momo sauce",           prep: "10 min", price: 89,  tag: "Veg"     },
      { id: 303, name: "Chicken Momos Steam (6 pcs)",   desc: "Juicy chicken filling, soft momo",     prep: "12 min", price: 99,  tag: "Chicken" },
      { id: 304, name: "Kurkure Veggie Momos (6 pcs)",  desc: "Crispy coating, crunchy veggie bite",  prep: "12 min", price: 109, tag: "Veg"     },
      { id: 305, name: "Kurkure Paneer Momos (6 pcs)",  desc: "Paneer delight, golden fried",         prep: "13 min", price: 119, tag: "Veg"     },
      { id: 306, name: "Kurkure Chicken Momos (6 pcs)", desc: "Chicken filling, extra crunchy fried", prep: "14 min", price: 129, tag: "Chicken" },
    ],
  },
  {
    id: "pizza",
    label: "Pizza",
    emoji: "🍕",
    color: "#e74c3c",
    items: [
      { id: 401, name: "Margherita Pizza",               desc: "Classic tomato sauce & mozzarella",         prep: "15 min", price: 169, tag: "Veg"     },
      { id: 402, name: "Farmhouse Pizza",                desc: "Loaded veggie toppings, herbed base",       prep: "15 min", price: 199, tag: "Veg"     },
      { id: 403, name: "Paneer Tikka Pizza",             desc: "Spiced paneer tikka on cheesy base",        prep: "18 min", price: 249, tag: "Veg"     },
      { id: 404, name: "Chicken Tikka Pizza",            desc: "Juicy chicken tikka, melted cheese",        prep: "18 min", price: 289, tag: "Chicken" },
      { id: 405, name: "Double Chicken Tikka Pizza",     desc: "Extra chicken tikka, double the flavour",   prep: "20 min", price: 329, tag: "Chicken" },
      { id: 406, name: "Three Chicken Pizza",            desc: "Tikka, Salami & Seekh Kebab on one pizza",  prep: "22 min", price: 349, tag: "Chicken" },
    ],
  },
  {
    id: "biryani",
    label: "Biryani & Meals",
    emoji: "🍚",
    color: "#ff6b35",
    badge: "New",
    items: [
      { id: 501, name: "Veg Biryani",                        desc: "Fragrant basmati with fresh vegetables",           prep: "18 min", price: 169, tag: "Veg"     },
      { id: 502, name: "Chicken Biryani",                    desc: "Slow-cooked chicken in aromatic spiced rice",      prep: "22 min", price: 199, tag: "Chicken" },
      { id: 503, name: "Yellow Dal Tadka · Rice/Parantha",   desc: "Comforting dal tadka, choice of rice or bread",    prep: "15 min", price: 129, tag: "Veg"     },
      { id: 504, name: "Rajma Rice / Parantha",              desc: "Classic rajma with steamed rice or parantha",      prep: "15 min", price: 149, tag: "Veg"     },
      { id: 505, name: "Chole Rice / Parantha",              desc: "Spiced chole with rice or parantha",               prep: "15 min", price: 149, tag: "Veg"     },
      { id: 506, name: "Dal Makhni · Rice / Parantha",       desc: "Creamy black dal with rice or fresh parantha",     prep: "18 min", price: 149, tag: "Veg"     },
      { id: 507, name: "Chicken Curry · Rice / Parantha",    desc: "Home-style chicken curry, hearty & flavourful",    prep: "20 min", price: 199, tag: "Chicken" },
    ],
  },
  {
    id: "subs",
    label: "Sub Station",
    emoji: "🫓",
    color: "#9b59b6",
    items: [
      { id: 601, name: "Aloo Patty Sub",         desc: "Crispy patty with fresh veggies",      prep: "8 min",  price: 119, tag: "Veg"     },
      { id: 602, name: "Green Veggie Sub",        desc: "Fresh veggie loaded sub",              prep: "8 min",  price: 99,  tag: "Veg"     },
      { id: 603, name: "Paneer Tikka Sub",        desc: "Spicy paneer tikka with sauces",       prep: "10 min", price: 159, tag: "Veg"     },
      { id: 604, name: "Peri Peri Paneer Sub",    desc: "Paneer with fiery peri peri touch",    prep: "10 min", price: 169, tag: "Veg"     },
      { id: 605, name: "Chicken Tikka Sub",       desc: "Juicy chicken tikka filling",          prep: "10 min", price: 179, tag: "Chicken" },
      { id: 606, name: "Chicken Salami Sub",      desc: "Smoky salami with sauces",             prep: "10 min", price: 179, tag: "Chicken" },
      { id: 607, name: "Chicken Seekh Sub",       desc: "Flavourful seekh kebab in a sub",      prep: "12 min", price: 179, tag: "Chicken" },
    ],
  },
  {
    id: "sandwiches",
    label: "Sandwiches",
    emoji: "🥪",
    color: "#d4a017",
    items: [
      { id: 701, name: "Vegetables Sandwich",         desc: "Fresh veggie mix, toasted",            prep: "7 min",  price: 99,  tag: "Veg"     },
      { id: 702, name: "Paneer Tikka Sandwich",       desc: "Spicy paneer filling, grilled",        prep: "9 min",  price: 149, tag: "Veg"     },
      { id: 703, name: "Peri Peri Paneer Sandwich",   desc: "Paneer with peri peri sauce",          prep: "10 min", price: 169, tag: "Veg"     },
      { id: 704, name: "Chicken Tikka Sandwich",      desc: "Juicy chicken tikka, grilled",         prep: "10 min", price: 169, tag: "Chicken" },
      { id: 705, name: "BBQ Chicken Sandwich",        desc: "Smoky BBQ chicken, toasted",           prep: "10 min", price: 169, tag: "Chicken" },
    ],
  },
  {
    id: "italian",
    label: "Italian",
    emoji: "🍝",
    color: "#27ae60",
    items: [
      { id: 801, name: "White Sauce Pasta",          desc: "Creamy béchamel pasta",               prep: "12 min", price: 169, tag: "Veg"     },
      { id: 802, name: "Red Sauce Pasta",            desc: "Rich tangy tomato sauce pasta",        prep: "12 min", price: 169, tag: "Veg"     },
      { id: 803, name: "Chicken White Sauce Pasta",  desc: "Creamy white sauce with chicken",      prep: "14 min", price: 189, tag: "Chicken" },
      { id: 804, name: "Chicken Red Sauce Pasta",    desc: "Tomato & herbs sauce with chicken",    prep: "14 min", price: 189, tag: "Chicken" },
    ],
  },
  {
    id: "maggi",
    label: "Maggi",
    emoji: "🍜",
    color: "#f39c12",
    items: [
      { id: 901, name: "Plain Maggi",          desc: "Classic masala taste",          prep: "6 min",  price: 69,  tag: "Veg"     },
      { id: 902, name: "Double Masala Maggi",  desc: "Extra spicy & flavorful",       prep: "7 min",  price: 89,  tag: "Veg"     },
      { id: 903, name: "Vegetable Maggi",      desc: "Loaded with fresh veggies",     prep: "8 min",  price: 119, tag: "Veg"     },
      { id: 904, name: "Chicken Maggi",        desc: "Maggi noodles with chicken",    prep: "10 min", price: 159, tag: "Chicken" },
    ],
  },
  {
    id: "sides",
    label: "Sides",
    emoji: "🍟",
    color: "#f1c40f",
    items: [
      { id: 1001, name: "Spring Roll (4 pcs)",          desc: "Crispy veggie spring rolls",               prep: "8 min",  price: 79,  priceDisplay: "₹79",      tag: "Veg"     },
      { id: 1002, name: "Cheese Garlic Bread",           desc: "Buttery garlic bread with melted cheese",  prep: "8 min",  price: 99,  priceDisplay: "₹99",      tag: "Veg"     },
      { id: 1003, name: "Baked Cheese Nachos Veg",       desc: "Cheesy baked nachos, veggie loaded",       prep: "10 min", price: 99,  priceDisplay: "₹99",      tag: "Veg"     },
      { id: 1004, name: "Harabhara Kebab (6 pcs)",       desc: "Spinach & pea kebabs, mint chutney",       prep: "10 min", price: 99,  priceDisplay: "₹99",      tag: "Veg"     },
      { id: 1005, name: "Cheese Cigar Roll (4 pcs)",     desc: "Oozy cheese stuffed crispy rolls",         prep: "10 min", price: 129, priceDisplay: "₹129",     tag: "Veg"     },
      { id: 1006, name: "Baked Cheese Nachos Non-Veg",   desc: "Cheesy nachos with chicken topping",       prep: "12 min", price: 159, priceDisplay: "₹159",     tag: "Chicken" },
      { id: 1007, name: "Chicken Seekh Kebab",           desc: "Flavourful seekh kebab, green chutney",    prep: "14 min", price: 179, priceDisplay: "₹179",     tag: "Chicken" },
      { id: 1008, name: "Chicken Nuggets (6/8 pcs)",     desc: "Golden fried nuggets, dipping sauce",      prep: "10 min", price: 129, priceDisplay: "₹129/159", tag: "Chicken" },
      { id: 1009, name: "Fried Chicken Wings",           desc: "Crispy wings · Regular or Large",          prep: "14 min", price: 159, priceDisplay: "₹159/189", tag: "Chicken" },
      { id: 1010, name: "Cheese Loaded Fries",           desc: "Fries smothered in cheese · Reg/Large",    prep: "8 min",  price: 99,  priceDisplay: "₹99/129",  tag: "Veg"     },
      { id: 1011, name: "Peri Peri Fries",               desc: "Spicy peri peri fries · Reg/Large",        prep: "7 min",  price: 89,  priceDisplay: "₹89/119",  tag: "Veg"     },
      { id: 1012, name: "Classic Fries",                 desc: "Salted golden fries · Reg/Large",          prep: "7 min",  price: 69,  priceDisplay: "₹69/99",   tag: "Veg"     },
    ],
  },
  {
    id: "salads",
    label: "Salads & Chaat",
    emoji: "🥗",
    color: "#2ecc71",
    items: [
      { id: 1101, name: "Veggie Delight Salad",               desc: "Fresh seasonal vegetables",              prep: "7 min",  price: 99,  tag: "Veg"     },
      { id: 1102, name: "Aloo Patty Salad",                   desc: "Crispy potato with greens",              prep: "8 min",  price: 109, tag: "Veg"     },
      { id: 1103, name: "Grilled Cottage Cheese & Veggies",   desc: "Grilled paneer with seasoned veggies",   prep: "10 min", price: 169, tag: "Veg"     },
      { id: 1104, name: "Grilled Tofu & Veggies Salad",       desc: "Protein-rich tofu with fresh veggies",   prep: "10 min", price: 169, tag: "Veg"     },
      { id: 1105, name: "Chickpeas Salad",                    desc: "Hearty spiced chickpea salad",           prep: "7 min",  price: 149, tag: "Veg"     },
      { id: 1106, name: "Peanut Chaat",                       desc: "Tangy spiced peanut street chaat",       prep: "5 min",  price: 149, tag: "Veg"     },
      { id: 1107, name: "Black Chana Chaat",                  desc: "Spiced black chickpeas, chutneys",       prep: "5 min",  price: 149, tag: "Veg"     },
      { id: 1108, name: "Three Bean Salad",                   desc: "Mixed beans, lemon herb dressing",       prep: "7 min",  price: 169, tag: "Veg"     },
      { id: 1109, name: "Hara Bhara Kabab Salad",             desc: "Spinach kebab salad bowl",               prep: "10 min", price: 149, tag: "Veg"     },
      { id: 1110, name: "Chicken Salami Salad",               desc: "Smoky salami, greens & dressing",        prep: "8 min",  price: 159, tag: "Chicken" },
      { id: 1111, name: "Chicken Tikka Salad",                desc: "Grilled chicken tikka on fresh greens",  prep: "10 min", price: 169, tag: "Chicken" },
    ],
  },
  {
    id: "hot-beverages",
    label: "Hot Beverages",
    emoji: "☕",
    color: "#795548",
    items: [
      { id: 1201, name: "Green Tea",                  desc: "Light & refreshing green tea",            prep: "3 min", price: 59, tag: "Veg" },
      { id: 1202, name: "Lemon Tea",                  desc: "Tangy lemon infused black tea",           prep: "3 min", price: 59, tag: "Veg" },
      { id: 1203, name: "Ginger Adrak Elaichi Tea",   desc: "Aromatic ginger & cardamom chai",         prep: "4 min", price: 49, tag: "Veg" },
      { id: 1204, name: "Masala Tea",                 desc: "Classic spiced masala chai",              prep: "4 min", price: 59, tag: "Veg" },
      { id: 1205, name: "Hot Coffee",                 desc: "Rich, freshly brewed hot coffee",         prep: "4 min", price: 89, tag: "Veg" },
    ],
  },
  {
    id: "cold-beverages",
    label: "Cold Beverages",
    emoji: "🧋",
    color: "#3498db",
    items: [
      { id: 1301, name: "Cold Coffee",       desc: "Chilled & creamy coffee · Reg/Large",        prep: "5 min", price: 99,  priceDisplay: "₹99/129",  tag: "Veg" },
      { id: 1302, name: "Chocolate Shake",   desc: "Rich thick chocolate shake · Reg/Large",     prep: "5 min", price: 119, priceDisplay: "₹119/139", tag: "Veg" },
      { id: 1303, name: "Strawberry Shake",  desc: "Sweet strawberry shake · Reg/Large",         prep: "5 min", price: 119, priceDisplay: "₹119/139", tag: "Veg" },
      { id: 1304, name: "Mango Shake",       desc: "Fresh seasonal mango shake · Reg/Large",     prep: "5 min", price: 119, priceDisplay: "₹119/139", tag: "Veg" },
      { id: 1305, name: "Vanilla Shake",     desc: "Classic creamy vanilla shake · Reg/Large",   prep: "5 min", price: 119, priceDisplay: "₹119/139", tag: "Veg" },
      { id: 1306, name: "Oreo Shake",        desc: "Thick Oreo cookie shake · Reg/Large",        prep: "5 min", price: 129, priceDisplay: "₹129/149", tag: "Veg" },
      { id: 1307, name: "Kit Kat Shake",     desc: "Creamy Kit Kat shake · Reg/Large",           prep: "5 min", price: 149, priceDisplay: "₹149/179", tag: "Veg" },
    ],
  },
  {
    id: "cocktails",
    label: "Cocktails",
    emoji: "🍹",
    color: "#e91e63",
    items: [
      { id: 1401, name: "Virgin Mojito",       desc: "Classic lime & mint mocktail",        prep: "4 min", price: 99, tag: "Veg" },
      { id: 1402, name: "Watermelon Mojito",   desc: "Fresh watermelon, mint, lime",        prep: "4 min", price: 99, tag: "Veg" },
      { id: 1403, name: "Masala Soda",         desc: "Spiced tangy fizzy drink",            prep: "3 min", price: 99, tag: "Veg" },
      { id: 1404, name: "Strawberry Mojito",   desc: "Sweet strawberry lime mocktail",      prep: "4 min", price: 99, tag: "Veg" },
      { id: 1405, name: "Blue Lagoon Mojito",  desc: "Blue curacao style fruity mocktail",  prep: "4 min", price: 99, tag: "Veg" },
      { id: 1406, name: "Lemon Ice Tea",       desc: "Chilled lemon infused iced tea",      prep: "4 min", price: 99, tag: "Veg" },
      { id: 1407, name: "Peach Ice Tea",       desc: "Sweet peach flavoured iced tea",      prep: "4 min", price: 99, tag: "Veg" },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    emoji: "🍫",
    color: "#c0392b",
    items: [
      { id: 1501, name: "Pineapple Pastry",   desc: "Classic fresh cream pineapple pastry",   prep: "2 min", price: 69, tag: "Veg" },
      { id: 1502, name: "Choco Lava",         desc: "Warm molten chocolate cake",             prep: "8 min", price: 99, tag: "Veg" },
      { id: 1503, name: "Brownie",            desc: "Rich fudgy chocolate brownie",           prep: "2 min", price: 99, tag: "Veg" },
      { id: 1504, name: "Truffle Pastry",     desc: "Decadent chocolate truffle cake",        prep: "2 min", price: 99, tag: "Veg" },
      { id: 1505, name: "Chocolate Donut",    desc: "Glazed chocolate topped donut",          prep: "2 min", price: 99, tag: "Veg" },
      { id: 1506, name: "Vanilla Donut",      desc: "Classic vanilla glazed donut",           prep: "2 min", price: 99, tag: "Veg" },
      { id: 1507, name: "Chocolate Tart",     desc: "Buttery tart shell with choco filling",  prep: "2 min", price: 99, tag: "Veg" },
    ],
  },
];

// Quick-access flat list for search / cart lookups
export const ALL_ITEMS = CATEGORIES.flatMap(cat =>
  cat.items.map(item => ({ ...item, category: cat.label, categoryId: cat.id }))
);