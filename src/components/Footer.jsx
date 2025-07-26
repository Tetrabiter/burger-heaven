const Footer = () => {
    return (
        <footer className="w-full bg-[var(--color-lightpurple)] rounded-2xl px-4 py-6">
            <div className="max-w-screen-xl mx-auto space-y-6">
                <div className="flex flex-col md:flex-row md:justify-between gap-y-6 gap-x-6">
                    <div>
                        <p className="font-primary text-3xl font-extrabold text-center md:text-left">
                            BURGER <br /> HEAVEN
                        </p>
                    </div>

                    <div className="text-center md:text-left">
                        <ul className="space-y-2 font-medium" title="MORE">
                            <li><a href="">About</a></li>
                            <li><a href="">Menu</a></li>
                            <li><a href="">Locations</a></li>
                            <li><a href="">Privacy</a></li>
                        </ul>
                    </div>

                    <div className="text-center md:text-left">
                        <ul className="font-secondary space-y-2" title="HOURS">
                            <li><a href="">Open from</a></li>
                            <li><a href="">11AM to</a></li>
                            <li><a href="">11PM daily</a></li>
                        </ul>
                    </div>

                    <div className="w-full md:w-64">
                        <p className="font-bold font-primary text-center md:text-left">JOIN OUR NEWSLETTER</p>
                        <div className="flex flex-col sm:flex-row gap-2 mt-4">
                            <input
                                className="border p-2 rounded-lg w-full"
                                type="text"
                                placeholder="Enter your email"
                            />
                            <button className="bg-black text-white px-4 py-2 rounded-lg font-bold">
                                SUBMIT
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-center gap-y-2">
                    <p>&copy; 2025 Burger Heaven</p>
                    <p><a href="">Privacy Policy</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;