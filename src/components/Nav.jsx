
import { navLinks } from '../constants'
import { hamburger, solesourcelogo } from '../assets/icons'

const Nav = () => {
    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-between items-center max-container rounded-xl backdrop-blur-xl bg-white/30 drop-shadow-md 2xl:auto">
                <a href="/"><img src={ solesourcelogo } alt="Logo" width={200} height={50}></img></a>
            
                <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((item) =>(
                        <li key={item.label}>
                            <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-300 hover:text-sole-red">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="hidden max-lg:block mr-[12px]">
                    <img src={hamburger} alt="Hamburger" width={25} height={25}></img>
                </div>
            </nav>
            
        </header>

    )
}

export default Nav