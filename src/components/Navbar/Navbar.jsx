import { Link } from "react-router-dom";
import './navbar.css'


export default function Navbar() {

    return (
        <>
            <div className="nav">
                <h2>SHOAIB RASOOL</h2>
                <div className="links">
                    <Link className="link" to={"/"}>HOME</Link>
                    <Link className="link" to={"/hello"}>ABOUT</Link>
                    <Link className="link" to={"/contact"}>CONTACT</Link>
                </div>
            </div>


        </>
    );
}