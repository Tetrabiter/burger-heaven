import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isVisible, setVisible] = useState(true);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
        setVisible(!isVisible);
    }



    return (
        <>
            <header className="w-full">

                <div className="font-primary font-extrabold flex justify-between items-center text-[var(--color-white2)]">
                    <div>
                        <h1 className="text-lg sm:text-2xl tracking-tighter">BURGER HEAVEN</h1>
                    </div>

                    {isVisible && (<div className="sm:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white text-3xl cursor-pointer"
                        >
                            <GiHamburgerMenu />
                        </button>
                    </div>)}



                    <div className="font-bold hidden sm:flex items-center gap-4">
                        <a href="#about">ABOUT</a>
                        <a href="#menu">MENU</a>
                        <button className="p-2 bg-[var(--color-lightpurple)] text-black">ORDER ONLINE</button>
                    </div>
                </div>

            </header>
            {isMenuOpen && (
                <div className="sm:hidden top-0 left-0 right-0 fixed w-full flex flex-col items-start gap-4 p-4 bg-[var(--color-background)] text-white shadow-md z-50">
                    <a
                        href="#"
                        onClick={() => { setMenuOpen(false), setVisible(true) }}
                        className="w-full text-center font-semibold"
                    >
                        ABOUT
                    </a>
                    <a
                        href="#"
                        onClick={() => { setMenuOpen(false), setVisible(true) }}
                        className="w-full text-center font-semibold"
                    >
                        MENU
                    </a>
                    <button
                        className="w-full  p-2 bg-[var(--color-lightpurple)] text-black"
                        onClick={() => { setMenuOpen(false), setVisible(true) }}
                    >
                        ORDER ONLINE
                    </button>
                </div>
            )}
        </>
    );
}

export default Header;