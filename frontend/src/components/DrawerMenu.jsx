import "../Styles/DrawerMenu.css";
import {
  FaHome,
  FaShoppingCart,
  FaClipboardList,
  FaUser,
  FaPhoneAlt,
  FaInfoCircle,
  FaSignOutAlt,
  FaTimes
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function DrawerMenu({ isOpen, onClose }) {

  const navigate = useNavigate();

  const menuItems = [
    { icon: <FaHome />, title: "Home", path: "/menu" },
    { icon: <FaShoppingCart />, title: "My Cart", path: "/cart" },
    { icon: <FaClipboardList />, title: "My Orders", path: "/tracking" },
    { icon: <FaUser />, title: "My Profile", path: "/profile" },
    { icon: <FaPhoneAlt />, title: "Contact Us", path: "/contact" },
    { icon: <FaInfoCircle />, title: "About Us", path: "/about" }
  ];

  return (
    <>
      {isOpen && (
        <div
          className="drawer-overlay"
          onClick={onClose}
        />
      )}

      <aside className={`drawer ${isOpen ? "show" : ""}`}>

        <div className="drawer-top">
          <button
            className="close-btn"
            onClick={onClose}
          >
            <FaTimes />
          </button>

        </div>

        <div className="drawer-profile">

          <div className="profile-circle">

            👤

          </div>

          <div>

            <h4>Guest User</h4>

            <span>Welcome</span>

          </div>

        </div>

        <div className="drawer-list">

          {menuItems.map((item) => (

            <div
              key={item.title}
              className="drawer-item"
              onClick={() => {

                navigate(item.path);

                onClose();

              }}
            >

              {item.icon}

              <span>{item.title}</span>

            </div>

          ))}

        </div>

        <button
          className="logout-button"
          onClick={() => {

            navigate("/login");

            onClose();

          }}
        >

          <FaSignOutAlt />

          Logout

        </button>

        <div className="version">

          Version 1.0

        </div>

      </aside>
    </>
  );

}

export default DrawerMenu;