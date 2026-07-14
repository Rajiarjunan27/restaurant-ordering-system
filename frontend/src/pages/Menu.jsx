import { useState } from "react";

import MenuHeader from "../components/MenuHeader";
import DrawerMenu from "../components/DrawerMenu";
import SearchBar from "../components/SearchBar";
import CategoryTabs from "../components/CategoryTabs";
import FoodList from "../components/FoodList";
import BottomNavigation from "../components/BottomNavigation";

import "../Styles/Menu.css";

function Menu() {

    const [drawerOpen, setDrawerOpen] = useState(false);

    return (

        <div className="menu-page">

            <DrawerMenu
                isOpen={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            />

            <MenuHeader
                onMenuClick={() => setDrawerOpen(true)}
            />

            <SearchBar />

            <CategoryTabs />

            <FoodList />

            <BottomNavigation />

        </div>

    );

}

export default Menu;