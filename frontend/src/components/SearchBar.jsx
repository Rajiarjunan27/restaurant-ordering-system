import { FaSearch } from "react-icons/fa";
import "../Styles/SearchBar.css";

function SearchBar({ searchText, setSearchText }) {

    return (

        <div className="search-container">

            <FaSearch className="search-icon" />

            <input
                type="text"
                placeholder="Search for food..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />

        </div>

    );

}

export default SearchBar;