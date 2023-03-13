import "./layout.scss";
import { FaBars, FaBuffer, FaHome } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
function LayOut() {
    const [open, setOpen] = useState(false);
    const collpaseMemu = () => {
        setOpen(!open);
    }

    return (
        <div id="main" className={`main ${open ? "close" : ""}`}>
            <nav>
                <button onClick={collpaseMemu}>
                    <FaBars />
                </button>
                <ul>
                    <Link to="/">
                        <li><FaHome /> <span>Home</span></li>
                    </Link>
                    <Link to="/form">
                        <li> <FaBuffer /> <span>Form</span></li>

                    </Link>
                </ul>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default LayOut;