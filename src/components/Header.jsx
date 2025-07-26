import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="w-full bg-[var(--color-background)] text-[var(--color-white2)] shadow-md relative z-50">
            {/* Top row */}
            <div className="flex justify-between items-center px-4 py-4 sm:px-8">
                {/* Logo / Name */}
                <h1 className="font-primary font-extrabold text-lg sm:text-2xl tracking-tighter">
                    BURGER HEAVEN
                </h1>

                {/* Desktop Menu */}
                <nav className="hidden sm:flex gap-6 items-center font-bold">
                    <a href="#about" className="hover:underline">ABOUT</a>
                    <a href="#menu" className="hover:underline">MENU</a>
                    <a href="#order" className="p-2 bg-[var(--color-lightpurple)] text-black rounded hover:opacity-90 transition">
                        ORDER ONLINE
                    </a>
                </nav>

                {/* Burger button */}
                <div className="sm:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-3xl text-white hover:bg-white/10 p-2 rounded transition"
                    >
                        {isMenuOpen ? <IoClose /> : <GiHamburgerMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`
                sm:hidden w-full bg-[var(--color-background)] text-white 
                absolute top-full left-0 px-6 py-4 space-y-4 font-semibold 
                transition-all duration-300 ease-in-out shadow-md
                ${isMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'}
            `}>
                <a href="#about" onClick={closeMenu} className="block hover:bg-white/10 px-4 py-2 rounded">
                    ABOUT
                </a>
                <a href="#menu" onClick={closeMenu} className="block hover:bg-white/10 px-4 py-2 rounded">
                    MENU
                </a>
                <a
                    href="#order"
                    onClick={closeMenu}
                    className="block bg-[var(--color-lightpurple)] text-black text-center font-bold px-4 py-2 rounded hover:opacity-90 transition"
                >
                    ORDER ONLINE
                </a>
            </div>
        </header>
    );
};

export default Header;
