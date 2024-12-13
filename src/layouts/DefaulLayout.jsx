// UTILITY
import { Outlet } from "react-router-dom";


// COMPONENTS IMPORT
import Navbar from "../components/Navbar";


// COMPONENT EXPORT

export default function DefaultLayout() {
    return <>
        <div className="wrapper">
            <header>
                <Navbar />
            </header>

            <main>
                <Outlet />
            </main>

            <footer className="debug">
                Footer
            </footer>
        </div>
    </>
}