import {NavigationBar} from "@/custom-components/navigation-bars.jsx";

export const MerchantAuthLayout = ({ children }) => {
    return (
        <div className={`w-full min-h-screen flex flex-col bg-[#F8F8F8] md:gap-16`}>
            <NavigationBar type={'merchant'}/>
            <div className={`flex flex-1 flex-col md:grid md:grid-cols-2 md:grid-rows-1`}>
                <div className={`hidden md:block overflow-hidden`}>
                    <img
                        src={"/auth.png"}
                        alt="side-pic"
                        className={`h-full object-cover`}
                    />
                </div>
                <div className={`flex items-center justify-start px-4 py-8 md:pr-8 md:pl-32`}>
                    <div className={`w-full h-full flex items-center rounded-md`}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export const CustomerAuthLayout = ({ children }) => {
    return (
        <div className={`w-full min-h-screen flex flex-col bg-[#F8F8F8] md:gap-16`}>
            <NavigationBar type={'customer'}/>
            <div className={`flex flex-1 items-center justify-center`}>
                {children}
            </div>
        </div>
    )
}