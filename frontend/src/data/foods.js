import briyani from "../assets/Food/briyani.jpg";
import muttonBriyani from "../assets/Food/mutton_briyani.jpg";
import chicken65 from "../assets/Food/chicken_65.jpg";
import juice from "../assets/Food/juice.jpg";
import kattukari from "../assets/Food/kattukari.jpg";
import parotta from "../assets/Food/parota_varites.jpg";

const foods = [

  // =========================
  // BIRYANI
  // =========================

  {
    id: 1,
    name: "Chicken Biryani",
    category: "Biryani",
    price: 170,
    image: briyani,
    description: "Authentic basmati rice with chicken."
  },

  {
    id: 2,
    name: "Chicken 65 Biryani",
    category: "Biryani",
    price: 190,
    image: briyani,
    description: "Chicken 65 served with flavorful biryani."
  },

  {
    id: 3,
    name: "Chicken Thokku Biryani",
    category: "Biryani",
    price: 190,
    image: briyani,
    description: "Special chicken thokku biryani."
  },

  {
    id: 4,
    name: "Mutton Biryani",
    category: "Biryani",
    price: 250,
    image: muttonBriyani,
    description: "Traditional dum cooked mutton biryani."
  },

  {
    id: 5,
    name: "Egg Biryani",
    category: "Biryani",
    price: 140,
    image: briyani,
    description: "Delicious egg biryani."
  },

  // =========================
  // STARTERS
  // =========================

  {
    id: 6,
    name: "Chicken 65",
    category: "Starters",
    price: 160,
    image: chicken65,
    description: "Crispy spicy chicken."
  },

  {
    id: 7,
    name: "Pepper Chicken",
    category: "Starters",
    price: 180,
    image: chicken65,
    description: "Pepper flavored chicken."
  },

  {
    id: 8,
    name: "Chilli Chicken",
    category: "Starters",
    price: 180,
    image: chicken65,
    description: "Hot and spicy chilli chicken."
  },

  // =========================
  // GRAVY
  // =========================

  {
    id: 9,
    name: "Chicken Kattukari",
    category: "Gravy",
    price: 180,
    image: kattukari,
    description: "Traditional village style chicken curry."
  },

  {
    id: 10,
    name: "Pepper Chicken Semi Gravy",
    category: "Gravy",
    price: 190,
    image: kattukari,
    description: "Semi gravy pepper chicken."
  },

  // =========================
  // PAROTTA
  // =========================

  {
    id: 11,
    name: "Parotta",
    category: "Parotta",
    price: 15,
    image: parotta,
    description: "Soft layered parotta."
  },

  {
    id: 12,
    name: "Bun Parotta",
    category: "Parotta",
    price: 20,
    image: parotta,
    description: "Soft bun parotta."
  },

  {
    id: 13,
    name: "Ceylon Parotta",
    category: "Parotta",
    price: 90,
    image: parotta,
    description: "Stuffed Ceylon parotta."
  },

  {
    id: 14,
    name: "Kothu Parotta",
    category: "Parotta",
    price: 120,
    image: parotta,
    description: "Finely chopped kothu parotta."
  },

  {
    id: 15,
    name: "Chicken Kothu Parotta",
    category: "Parotta",
    price: 160,
    image: parotta,
    description: "Chicken kothu parotta."
  },

  // =========================
  // CHINESE
  // =========================

  {
    id: 16,
    name: "Chicken Fried Rice",
    category: "Chinese",
    price: 160,
    image: briyani,
    description: "Delicious chicken fried rice."
  },

  {
    id: 17,
    name: "Veg Fried Rice",
    category: "Chinese",
    price: 120,
    image: briyani,
    description: "Veg fried rice."
  },

  {
    id: 18,
    name: "Chicken Noodles",
    category: "Chinese",
    price: 160,
    image: briyani,
    description: "Chicken noodles."
  },

  {
    id: 19,
    name: "Veg Noodles",
    category: "Chinese",
    price: 120,
    image: briyani,
    description: "Veg noodles."
  },

  // =========================
  // DOSA
  // =========================

  {
    id: 20,
    name: "Plain Dosa",
    category: "Dosa",
    price: 40,
    image: parotta,
    description: "Plain dosa."
  },

  {
    id: 21,
    name: "Onion Dosa",
    category: "Dosa",
    price: 60,
    image: parotta,
    description: "Onion dosa."
  },

  {
    id: 22,
    name: "Kal Dosa",
    category: "Dosa",
    price: 60,
    image: parotta,
    description: "Kal dosa."
  },

  {
    id: 23,
    name: "Ghee Roast",
    category: "Dosa",
    price: 80,
    image: parotta,
    description: "Crispy ghee roast."
  },

  // =========================
  // EGG
  // =========================

  {
    id: 24,
    name: "Omelette",
    category: "Egg",
    price: 30,
    image: chicken65,
    description: "Fresh omelette."
  },

  {
    id: 25,
    name: "Karandi Omelette",
    category: "Egg",
    price: 60,
    image: chicken65,
    description: "Karandi omelette."
  },

  {
    id: 26,
    name: "Chicken Karandi Omelette",
    category: "Egg",
    price: 120,
    image: chicken65,
    description: "Chicken karandi omelette."
  },

  // =========================
  // DRINKS
  // =========================

  {
    id: 27,
    name: "Coke",
    category: "Drinks",
    price: 40,
    image: juice,
    description: "Chilled Coke."
  },

  {
    id: 28,
    name: "Sprite",
    category: "Drinks",
    price: 40,
    image: juice,
    description: "Refreshing Sprite."
  },

  {
    id: 29,
    name: "Water Bottle",
    category: "Drinks",
    price: 20,
    image: juice,
    description: "Mineral water."
  }

];

export const categories = [
  "All",
  "Biryani",
  "Starters",
  "Gravy",
  "Parotta",
  "Chinese",
  "Dosa",
  "Egg",
  "Drinks"
];

export default foods;