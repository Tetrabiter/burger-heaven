import BurgerSRC from '../assets/Burgers.png'
import CustomersSRC from '../assets/Rectangle21.png'
import FrenchFriesSRC from '../assets/Rectangle17.png'
import ChickenSandwichSRC from '../assets/Rectangle16.png'

const Main = () => {
    return (
        <main>
            <div>

                <div>
                    <div className='w-full flex justify-center'>
                        <h1 className='w-2/3 text-[var(--color-white2)] text-8xl font-extrabold text-center tracking-tighter'>NEW YORK’S FAVORITE ORGANIC HAMBURGER JOINT</h1>
                    </div>
                    <div className='-mt-[2%]'>
                        <img className='' src={BurgerSRC} alt="" />
                    </div>
                </div>

                <div className='bg-[var(--color-lime)] h-92 rounded-3xl'>
                    <div className='h-full flex justify-center items-center px-[5%] font-extrabold'>
                        <div className='w-3/5'>
                            <p className='w-3/4 text-7xl tracking-tighter'>THE BURGER ABOVE ALL BURGERS</p>
                        </div>
                        <div>
                            <p className='font-bold mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec ornare neque.</p>
                            <button className='px-4 py-2 text-2xl bg-[var(--color-white2)] shadow-[7px_6px_0px_1px_rgba(0,_0,_0,_0.85)]'>ABOUT US</button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 mt-8 px-4">
                    {/* French Fries Card */}
                    <div className="relative w-full md:w-1/2">
                        <img src={FrenchFriesSRC} alt="french fries" className="w-full h-auto object-cover rounded-2xl" />
                        <div className="absolute bottom-4 left-4 bg-[var(--color-black2)] text-[var(--color-white2)] rounded-3xl p-4 sm:p-6 text-xl sm:text-2xl lg:text-3xl uppercase font-extrabold tracking-tight w-[90%] max-w-[400px]">
                            <p>Salt & Vinegar French Fries</p>
                            <p className="text-[var(--color-lightpurple)] text-base sm:text-xl">Order Online</p>
                        </div>
                    </div>

                    {/* Chicken Sandwich Card */}
                    <div className="relative w-full md:w-1/2">
                        <img src={ChickenSandwichSRC} alt="chicken sandwich" className="w-full h-auto object-cover rounded-2xl" />
                        <div className="absolute bottom-4 left-4 bg-[var(--color-black2)] text-[var(--color-white2)] rounded-3xl p-4 sm:p-6 text-xl sm:text-2xl lg:text-3xl uppercase font-extrabold tracking-tight w-[90%] max-w-[400px]">
                            <p>Crispy Chicken Sandwich</p>
                            <p className="text-[var(--color-lightpurple)] text-base sm:text-xl">Order Online</p>
                        </div>
                    </div>
                </div>

                <div className='mt-[4%]'>
                    <marquee className="text-8xl font-secondary font-extrabold text-[var(--color-lime)] uppercase pb-[4%] tracking-tighter" behavior="" direction="">the best burger i’ve ever had</marquee>

                    <div>
                        <img src={CustomersSRC} alt="customers" className="" />
                    </div>
                </div>

                <div className='w-full h-48 my-[9%] flex justify-center items-center text-center text-[var(--color-white2)] font-extrabold'>
                    <div className='w-2/3 flex flex-col gap-6'>
                        <div className=''>
                            <h1 className='text-7xl'>ORDER ONLINE OR COME VISIT US TODAY</h1>
                        </div>
                        <div>
                            <button className='bg-[var(--color-lime)] text-[var(--color-black2)] px-6 py-3 font-extrabold tracking-tighter'>GET STARTED</button>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}

export default Main;