export const Loader1 = () => {
    return (
        <div className="flex items-center justify-center h-full">
            <div className="relative w-16 h-16">
                <div className={`
                absolute inset-0 
                border-6 border-blue-600 
                border-t-transparent rounded-full 
                animate-spin
                `}></div>
            </div>
        </div>
    )
}