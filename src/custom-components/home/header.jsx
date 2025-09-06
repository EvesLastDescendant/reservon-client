import {useNavigate} from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();

    return (
        <div className={`w-full h-[671px] sm:h-[650px] px-8 md:px-28 mt-16 md:mt-28 flex flex-col sm:flex-row justify-between`}>
            <div className={`w-full h-full justify-center items-start md:w-2/3 flex flex-col gap-4`}>
                <div className={`md:w-[580px] md:h-[316px] space-y-7`}>
                    <h1 className={`font-extrabold text-3xl md:text-6xl`}>Welcome to Lorem Technology limited!</h1>
                    <p className={`font-light`}>At "Example Store", we believe in enhancing your natural beauty with our exceptional services.</p>
                    <div className={`flex gap-4`}>
                        <button
                            className={`
                                w-[151px] md:w-[192px] h-[38px] md:h-[44px] rounded-md
                                bg-[#4338CA] text-[#DFDDF6] hover:bg-[#4338CA] 
                                hover:text-[#DFDDF6] hover:font-semibold cursor-pointer
                            `}
                            onClick={()=> navigate("/customer/signup")}
                        >Book now</button>
                        <button
                            className={`
                                w-[161px] md:w-[150px] h-[38px] md:h-[44px] rounded-md 
                                bg-[#DFDDF6] text-[#4338CA] hover:bg-[#DFDDF6] 
                                hover:text-[#4338CA] hover:font-semibold cursor-pointer
                            `}
                            onClick={()=> navigate("/customer/login")}
                        >Login</button>
                    </div>
                </div>
            </div>
            <div className={`w-full h-full flex items-center justify-center md:w-1/2 pt-5 md:p-0`}>
                <div className={`w-full md:[506px] h-full md:h-[510px] flex flex-col justify-center gap-10 `}>
                    <div className={`w-full h-full md:h-[434px] flex justify-center`}>
                        <img src={undefined} alt="header_image" className={`aspect-auto`} loading={"lazy"}/>
                    </div>
                    <div className="flex justify-center items-center gap-x-2">
                        <a href="#"><img src={undefined} alt="facebook_logo" loading={`lazy`}/></a>
                        <a href="#"><img src={undefined} alt="instagram_logo" loading={`lazy`}/></a>
                        <a href="#"><img src={undefined} alt="x_logo" loading={`lazy`}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
