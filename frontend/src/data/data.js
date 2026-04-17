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