import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({children}) {
    const [isDark, setIsDark] = useState(false);

    const handle = () => {
        return setIsDark(isDark = !isDark);
    }

    return (
        <div className={isDark ? "dark" : ""}>
            <Navbar/>
            <div className="pt-24 px-24 dark:bg-stone-900 bg-white">
                <div className="py-12">
                    {children}
                </div>
            </div>
            <Footer setFunc={handle}/>
        </div>
    )
}