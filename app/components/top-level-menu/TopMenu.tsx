"use client";

import { useEffect, useState } from "react";
import BurgerMenuButton from "./BurgerMenuButton";
import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {

    // Status of the visibility of the menu (true - open; false - closed)
    const [isOpen, setIsOpen] = useState(false);

    // Function to change the visibility of the menu
    const toggleMenu = () => setIsOpen(!isOpen);

    // Collapse the menu again, when the screen is larger than the md-breakpoint
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Links for the menu
    const links = [
        { label: "Punkt A", href: "/" },
        { label: "Punkt B", href: "/" },
        { label: "Punkt C", href: "/" },
        { label: "Punkt D", href: "/" },
        { label: "Punkt E", href: "/" },
    ];

    return (
        <nav className="bg-gray-700 sticky p-4 top-0">
            <BurgerMenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
            <ul className={`${isOpen ? "flex" : "hidden"} md:flex flex-col items-center justify-center md:flex-row md:space-x-16`}>
                {links.map((item, index) => 
                    <TopMenuItem key={index} href={item.href} label={item.label} />
                )}
            </ul>
        </nav>
    );
}