export const Footer = () => {
    return (
        <footer
            className={`
                w-full 
                border-t border-[#D1D0D4] 
                py-10 md:py-8 mx-auto 
                flex flex-col items-center justify-center gap-y-1
            `}
        >
            <p className={`font-bold text-[#D1D0D4]`}>Powered by:</p>
            <img src={"/logo.png"} alt="company_logo"/>
        </footer>
    )
}