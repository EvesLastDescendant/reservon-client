import img from "/service_img.png";
import {useNavigate} from "react-router-dom";

const MOCK_SERVICES = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `Service ${i + 1}`,
    description: `Description for Service ${i + 1}`,
    image: img,
    price: 'N50,000',
    duration: '2 hours',
}));

export const Services = () => {
    const navigate = useNavigate();

    return (
        <div className={`w-full px-8 md:px-28 py-5 md:py-10`}>
            <h2 className={`text-3xl font-bold text-center mb-8`}>Services</h2>
            <div
                className={`
                    w-full h-full md:h-[920px] overflow-y-scroll scrollbar-hide
                    grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-5 md:p-10
                `}
            >
                {MOCK_SERVICES.map((item, index) => (
                    <div
                        key={item.id+index}
                        className={`p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100`}
                    >
                        <div className={`w-full mb-3`}>
                            <img src={item.image} alt="booking_image" className={`w-full`} loading={`lazy`}/>
                        </div>
                        <div className={`flex justify-between items-start mb-3`}>
                            <h3 className={`text-xl font-semibold text-gray-800`}>{item.title}</h3>
                            <span className={`px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full`}>{item.category}</span>
                        </div>
                        <p className={`text-gray-600 mb-4`}>{item.description}</p>
                        <div className={`flex justify-between items-center mt-4 pt-4 border-t border-gray-100`}>
                            <span className={`text-lg font-bold text-blue-600`}>${item.price}</span>
                            <div className={`flex items-center`}>
                                <span className={`text-yellow-400`}>★</span>
                                <span className={`ml-1 text-gray-600`}>{item.duration}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={`w-full flex justify-center items-center mt-5`}>
                <button
                    type={'button'}
                    className={`
                        w-56 h-14 rounded-md
                        bg-[#4338CA] text-[#DFDDF6] cursor-pointer
                    `}
                    onClick={() => navigate('/customer/signup')}
                >Book now</button>
            </div>
        </div>
    )
}