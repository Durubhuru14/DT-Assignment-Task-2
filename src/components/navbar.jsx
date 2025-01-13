import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faScrewdriverWrench,
    faBell,
    faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import pfpImg from "../assets/pfp.png";

export const Navbar = () => {
    return (
        <header>
            <div className="logo">
                <img
                    src="https://deepthought.education/assets/images/logo/logo.svg"
                    alt="Deep Thought Logo"
                />
            </div>
            <div className="navbar">
                <div className="nav-icons">
                    <FontAwesomeIcon icon={faHome} />
                </div>
                <div className="nav-icons">
                    <FontAwesomeIcon icon={faScrewdriverWrench} />
                </div>
                <div className="nav-icons">
                    <FontAwesomeIcon icon={faBell} />
                </div>
                <div className="nav-user-pfp">
                    <img src={pfpImg} alt="user pfp" />
                </div>
                <div className="nav-options">
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                </div>
            </div>
        </header>
    );
};
