import {EmailIcon, LocationIcon, PhoneIcon, WebGlobeIcon} from "@/custom-components/custom-svgs.jsx";

const businessDetails = [
    {title: 'Business address', description: '3, Adeyemi street, Ota, Ogun State', icon: <LocationIcon />},
    {title: 'Phone number', description: '(+234) 701 886 0969', icon: <PhoneIcon />},
    {title: 'Email', description: '5o1oG@example.com', icon: <EmailIcon />},
    {title: 'Website', description: 'www.example.com', icon: <WebGlobeIcon />},
]

const hours = [
    { day: 'Monday', opening: '09:80AM', closing: '09:80PM' },
    { day: 'Tuesday', opening: '09:80AM', closing: '09:80PM' },
    { day: 'Wednesday', opening: '09:80AM', closing: '09:80PM' },
    { day: 'Thursday', opening: '09:80AM', closing: '09:80PM' },
    { day: 'Friday', opening: '09:80AM', closing: '09:80PM' },
    { day: 'Saturday', opening: '09:80AM', closing: '09:80PM' },
    { day: 'Sunday', opening: 'Closed', closing: 'Closed' },
];


export const Policy = () => {
    return (
        <div className={"w-full bg-white"}>
            <div className={"py-8"}>
                <div className={`h-full md:h-[760px] grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1`}>
                    <div className={`flex items-center justify-center`}>
                        <div className={`md:w-[504px] md:h-[650px] space-y-4`}>
                            <h1 className={`text-2xl md:text-4xl font-extrabold`}>Scheduling terms and policy</h1>
                            <p className={`text-[15.5px] mb-4 md:mb-8`}>
                                Clients can cancel or reschedule appointments up to 24 hours before start
                                time. Deposits are non-refundable in case of cancellation or no-show. However, if you
                                reschedule your appointment using the link provided, your deposit will be automatically transferred to your future booking.
                            </p>
                            <div className={`md:w-[373px] md:h-[392px] p-5 md:p-10 space-y-8 bg-[#F6F6F6] shadow-sm rounded-md`}>
                                {businessDetails.map((item, index) => (
                                    <div key={index} className={"w-full flex justify-start items-start gap-x-4"}>
                                        <span className={`bg-black text-white p-1.5 rounded-full`}>{item.icon}</span>
                                        <div className={"flex flex-col gap-y-1"}>
                                            <p><strong>{item.title}</strong></p>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={`flex items-center justify-center`}>
                        <div className={`md:w-[504px] md:h-[650px] space-y-4`}>
                            <h1 className="text-black text-2xl md:text-4xl font-extrabold mb-6">Work hours</h1>

                            <div className={`rounded-lg`}>
                                <div className={`grid grid-cols-3 bg-[#4237C9] text-white text-base md:text-lg py-4 px-6`}>
                                    <div className={`col-span-1`}>Days</div>
                                    <div className={`col-span-1 text-center`}>Opening time</div>
                                    <div className={`col-span-1 text-end md:text-center`}>Closing time</div>
                                </div>
                                {hours.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`
                                            border-l border-r border-b border-t-0 border-[#4237C9]
                                            grid grid-cols-3 items-center py-4 px-6
                                            ${item.day === 'Sunday' ? 'rounded-b-lg' : ''}
                                        `}
                                    >
                                        <div className={`col-span-1 text-black text-sm md:text-lg`}>{item.day}</div>
                                        <div className={`col-span-1 flex justify-start md:justify-center`}>
                                            <span
                                                className={`
                                                    w-[90px] md:w-[120px] h-10
                                                    py-1 md:py-2 px-2 md:px-4 flex items-center justify-center rounded-md  
                                                    bg-[#E8E7E9] text-black text-sm md:text-lg
                                                `}
                                            >
                                                {item.opening}
                                            </span>
                                        </div>
                                        <div className={`col-span-1 flex justify-end md:justify-center`}>
                                            <span
                                                className={`
                                                    w-[90px] md:w-[120px] h-10
                                                    py-1 md:py-2 px-2 md:px-4 flex items-center justify-center rounded-md  
                                                    bg-[#E8E7E9] text-black text-sm md:text-lg
                                                `}
                                            >
                                                {item.closing}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
