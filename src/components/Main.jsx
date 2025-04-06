import BurgerSRC from '../assets/Burgers.png'
import CustomersSRC from '../assets/Rectangle21.png'
import FrenchFriesSRC from '../assets/Rectangle17.png'
import ChickenSandwichSRC from '../assets/Rectangle16.png'

const Main = () => {
    return (
        <main>
            <div>
                
                <div>
                    <h1>NEW YORK’S FAVORITE ORGANIC HAMBURGER JOINT</h1>
                    <div>
                        <img src={BurgerSRC} alt="" />
                    </div>
                </div>

                <div>
                    <div>
                        <p>THE BURGER ABOVE ALL BURGERS</p>  
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec ornare neque.</p>
                        <button>ABOUT US</button>
                    </div>
                </div>

                <div className='flex'>
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

                <div>
                    <marquee className="text-5xl font-secondary text-[var(--color-lime)]" behavior="" direction="">“ the best burger i’ve ever had “</marquee>

                    <div>
                        <img src={CustomersSRC} alt="customers" className=""/>
                    </div>
                </div>

                <div>
                    <h1>ORDER ONLINE OR COME VISIT US TODAY</h1>
                    <button>GET STARTED</button>
                </div>

            </div>
        </main>
    );
}

export default Main;