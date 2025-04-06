import BurgerSRC from '../assets/Burgers.png'
import CustomersSRC from '../assets/Rectangle21.png'
import FrenchFriesSRC from '../assets/Rectangle17.png'
import ChickenSandwichSRC from '../assets/Rectangle16.png'

const Main = () => {
    return (
        <main>
            <div>
                
                <div>
                    <h1 className='text-[var(--color-white2)] text-8xl font-bold text-center'>NEW YORK’S FAVORITE ORGANIC HAMBURGER JOINT</h1>
                    <div>
                        <img src={BurgerSRC} alt="" />
                    </div>
                </div>

                <div className='bg-[var(--color-lime)] h-72 rounded-3xl'>
                    <div className='h-full flex justify-center items-center px-[5%]'>
                        <div>
                            <p className='text-5xl font-bold'>THE BURGER ABOVE ALL BURGERS</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec ornare neque.</p>
                            <button className='px-4 py-2 font-bold text-2xl bg-[var(--color-white2)] shadow-[7px_6px_0px_1px_rgba(0,_0,_0,_0.85)]'>ABOUT US</button>
                        </div>
                    </div>
                </div>

                <div className='flex gap-5 mt-[3%]'>
                    <div>
                        <img src={FrenchFriesSRC} alt="french fries" />
                        <div>

                        </div>
                    </div>
                    <div>
                        <img src={ChickenSandwichSRC} alt="chicken sandwich" />
                        <div>

                        </div>
                    </div>
                </div>

                <div className='mt-[4%]'>
                    <marquee className="text-5xl font-secondary font-bold text-[var(--color-lime)] uppercase pb-[4%]" behavior="" direction="">the best burger i’ve ever had</marquee>

                    <div>
                        <img src={CustomersSRC} alt="customers" className=""/>
                    </div>
                </div>

                <div className='flex flex-col justify-center h-48 text-center text-[var(--color-white2)] font-bold'>
                    <div>
                        <h1 className='text-7xl'>ORDER ONLINE OR COME VISIT US TODAY</h1>
                    </div>
                    <div>
                        <button className='bg-[var(--color-lime)] text-[var(--color-black2)] px-4 py-2'>GET STARTED</button>
                    </div>
                </div>

            </div>
        </main>
    );
}

export default Main;