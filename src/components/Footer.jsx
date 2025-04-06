const Footer = () => {
    return (
        <footer className="w-80% bg-[var(--color-lightpurple)] h-80 rounded-2xl">
            <div className="mx-[5%] pt-[4%]">
                <div className="flex gap-3 justify-between">
                    <div>
                        <p className="font-primary font-bold">BURGER HEAVEN</p>
                    </div>
                    <div>
                        <ul title="MORE">
                            <a href="">
                                <li>About</li>
                            </a>
                            <a href="">
                                <li>Menu</li>
                            </a>
                            <a href="">
                                <li>Locations</li>
                            </a>
                            <a href="">
                                <li>Privacy</li>
                            </a>
                        </ul>
                    </div>
                    <div>
                        <ul className="font-secondary" title="HOURS">
                            <a href="">
                                <li>Open from</li>
                            </a>
                            <a href="">
                                <li>11AM to</li>
                            </a>
                            <a href="">
                                <li>11PM daily</li>
                            </a>
                        </ul>
                    </div>
                    <div className="w-3xs relative">
                        <p className="font-bold font-primary">JOIN OUR NEWSLETTER</p>
                        <div className="flex items-center mt-6">
                            <input className="border p-2 rounded-lg w-full" type="text" />
                            <button className="font-bold absolute right-[5%]">SUBMIT</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <p>Copyright Burger Heaven</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;