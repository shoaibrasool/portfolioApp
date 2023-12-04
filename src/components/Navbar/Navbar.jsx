
import { Link } from "react-router-dom";



export default function Navbar() {

    return (
        <>
            <div style={{ color: "white", width: '100%', position: 'fixed', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '22px' }}>
                <h2>SHOAIB RASOOL</h2>
                <div className="links" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px', color: 'white' }}>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to={"/"}>HOME</Link>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to={"/hello"}>ABOUT</Link>
                </div>
            </div>


        </>
    );
}