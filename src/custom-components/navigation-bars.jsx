import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const navItems = [
    {name: 'Home', href: '/',},
    {name: 'About', href: '/about',},
    {name: 'Services', href: '/services',},
]

export const NavigationBar = ({ type }) => {
    const [scrollY, setScrollY] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const isScrollY = window.scrollY > 10;
            if (isScrollY !== scrollY) {
                setScrollY(isScrollY);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollY]);

    switch (type) {
        case 'merchant':
            return (
                <nav
                    className={`
                        w-full h-12 md:h-24 px-8 md:px-28
                        fixed top-0 left-0 z-50
                        transition-all duration-300
                        ${scrollY ? 'bg-white/80 backdrop-blur-sm' : 'bg-white/90'}
                    `}
                     role="navigation"
                >
                    <div className={`w-full h-full flex justify-between items-center`}>
                        <Link to={'/'}>
                            <picture>
                                <img src={undefined} alt="logo" loading={'lazy'}/>
                            </picture>
                        </Link>
                        <div>Translations</div>
                    </div>
                </nav>
            )
        case 'customer':
            return (
                <nav
                    className={`
                        w-full h-12 md:h-24 px-8 md:px-28
                        fixed top-0 left-0 z-50
                        transition-all duration-300
                        ${scrollY ? 'bg-white/80 backdrop-blur-sm' : 'bg-[inherit]'}
                    `}
                    role="navigation"
                >
                    <div className={`w-full h-full flex justify-between items-center`}>
                        <Link to={'/'}>
                            <picture>
                                <img src={undefined} alt="logo" loading={'lazy'} />
                            </picture>
                        </Link>
                        <div className={`hidden md:flex md:justify-center items-center gap-16`}>
                            {navItems.map((item, i) => (
                                <NavLink
                                    key={`${i}+${item.name}`}
                                    to={item.href}
                                    end={item.href === ""}
                                    className={({isActive}) => `
                                        font-semibold text-[#757480] text-lg
                                        border-b-2 border-transparent
                                        hover:border-[#4338CA] hover:text-black
                                        transition-colors duration-200 ease-in-out
                                        ${isActive && 'border-b-[#4338CA] text-black'}
                                    `}
                                >{item.name}</NavLink>
                            ))}
                        </div>
                        <div>
                            Translation
                        </div>
                    </div>
                </nav>
            )
        default:
            return (
                <nav
                    className={`
                        w-full h-12 md:h-24 px-8 md:px-28
                        fixed top-0 left-0 z-50
                        transition-all duration-300
                        ${scrollY ? 'bg-white/80 backdrop-blur-sm' : 'bg-white/90'}
                    `}
                    role="navigation"
                >
                    <div className={`w-full h-full flex justify-between items-center`}>
                        <Link to={'/'}>
                            <picture>
                                <img src={undefined} alt="logo" loading={'lazy'} />
                            </picture>
                        </Link>
                        <div className={`hidden md:flex md:justify-center items-center gap-16`}>
                            {navItems.map((item, i) => (
                                <NavLink
                                    key={`${i}+${item.name}`}
                                    to={item.href}
                                    end={item.href === ""}
                                    className={({isActive}) => `
                                        font-semibold text-[#757480] text-lg
                                        border-b-2 border-transparent
                                        hover:border-[#4338CA] hover:text-black
                                        transition-colors duration-200 ease-in-out
                                        ${isActive && 'border-b-[#4338CA] text-black'}
                                    `}
                                >{item.name}</NavLink>
                            ))}
                        </div>
                        <div className={`flex justify-center items-center gap-5`}>
                            <button
                                type={'button'}
                                className={`
                                    hidden md:block md:w-36 bg-[#DFDDF6]
                                    text-[#4338CA] font-semibold 
                                    p-2 rounded-md cursor-pointer
                                `}
                                onClick={() => navigate('/customer/login')}
                            >Login</button>
                            Translation
                        </div>
                    </div>
                </nav>
            )
    }
}