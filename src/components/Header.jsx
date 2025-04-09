const Header = () => {
    return ( 
        <header className="">

            <div className="font-primary font-extrabold flex justify-between items-center text-[var(--color-white2)]">
                <div>
                    <p className="text-2xl tracking-tighter">BURGER HEAVEN</p>
                </div>
                <div className="font-bold flex items-center gap-4">
                    <a href="#">ABOUT</a>
                    <a href="#">MENU</a>
                    <button className="p-2 bg-[var(--color-lightpurple)] text-black">ORDER ONLINE</button>
                </div>
            </div>

        </header>
    );
}
 
export default Header;