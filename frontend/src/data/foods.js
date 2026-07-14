import briyani from "../assets/Food/briyani.jpg";
import muttonBriyani from "../assets/Food/mutton_briyani.jpg";
import chicken65 from "../assets/Food/chicken_65.jpg";
import juice from "../assets/Food/juice.jpg";
import kattukari from "../assets/Food/kattukari.jpg";
import parotta from "../assets/Food/parota_varites.jpg";

const foods = [

{
    id:1,
    name:"Chicken Biryani",
    category:"Biryani",
    price:170,
    image:briyani,
    description:"Authentic basmati rice with chicken and aromatic spices."
},

{
    id:2,
    name:"Mutton Biryani",
    category:"Biryani",
    price:250,
    image:muttonBriyani,
    description:"Traditional dum cooked mutton biryani."
},

{
    id:3,
    name:"Chicken 65",
    category:"Starters",
    price:160,
    image:chicken65,
    description:"Crispy and spicy boneless chicken."
},

{
    id:4,
    name:"Chicken Kattukari",
    category:"Gravy",
    price:180,
    image:kattukari,
    description:"Traditional village style chicken curry."
},

{
    id:5,
    name:"Parotta",
    category:"Parotta",
    price:15,
    image:parotta,
    description:"Soft layered parotta."
},

{
    id:6,
    name:"Coke / Juice",
    category:"Drinks",
    price:40,
    image:juice,
    description:"Refreshing chilled beverage."
}

];

export const categories = [
    "All",
    "Biryani",
    "Starters",
    "Gravy",
    "Parotta",
    "Drinks"
];

export default foods;