import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import "../Styles/SearchBar.css";

function SearchBar({ onSearch }) {

    const [search, setSearch] = useState("");

    const handleChange = (e) => {

        const value = e.target.value;
        setSearch(value);

        if (onSearch) {
            onSearch(value);
        }

    };

    return (

        <div className="search-container">

            <FaSearch className="search-icon" />

            <input
                type="text"
                placeholder="Search for food..."
                value={search}
                onChange={handleChange}
            />

        </div>

    );

}

export default SearchBar;