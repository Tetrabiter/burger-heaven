const Header = () => {
    return ( 
        <header className="">

            <div className="font-primary flex justify-between items-center">
                <div>
                    <p className="font-extrabold text-2xl">BURGER HEAVEN</p>
                </div>
                <div className="font-bold flex items-center gap-4">
                    <a href="#">ABOUT</a>
                    <a href="#">MENU</a>
                    <button className="p-2 bg-[var(--color-lightpurple)]">ORDER ONLINE</button>
                </div>
            </div>

        </header>
    );
}
 
export default Header;