import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import api from "../services/api";

import MenuHeader from "../components/MenuHeader";
import DrawerMenu from "../components/DrawerMenu";
import SearchBar from "../components/SearchBar";
import CategoryTabs from "../components/CategoryTabs";
import FoodList from "../components/FoodList";
import BottomNavigation from "../components/BottomNavigation";

import "../Styles/Menu.css";

function Menu() {
    const location = useLocation();
    const [foods, setFoods] = useState([]);
const [loading, setLoading] = useState(true);

    // Drawer
    const [drawerOpen, setDrawerOpen] = useState(false);

    // Search
    const [searchText, setSearchText] = useState("");

    // Category
    const [selectedCategory, setSelectedCategory] = useState("All");
    useEffect(() => {
    if (location.state?.category) {
        setSelectedCategory(location.state.category);
    } else {
        setSelectedCategory("All");
    }
}, [location]);
useEffect(() => {
    const fetchFoods = async () => {
        try {
            const response = await api.get("/food-items/");
            setFoods(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    fetchFoods();
}, []);
if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
}

    // Filter Foods
    const filteredFoods = foods.filter((food) => {

        const searchMatch = food.name
            .toLowerCase()
            .includes(searchText.toLowerCase());

        const categoryMatch =
            selectedCategory === "All" ||
            food.category === selectedCategory;

        return searchMatch && categoryMatch;

    });

    return (

        <div className="menu-page">

            {/* Drawer */}

            <DrawerMenu
                isOpen={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            />

            {/* Header */}

            <MenuHeader
                onMenuClick={() => setDrawerOpen(true)}
            />

            {/* Search */}

            <SearchBar
                searchText={searchText}
                setSearchText={setSearchText}
            />

            {/* Categories */}

            <CategoryTabs
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />

            {/* Food List */}

            <FoodList
                foods={filteredFoods}
            />

            {/* Bottom Navigation */}

            <BottomNavigation />

        </div>

    );

}

export default Menu;