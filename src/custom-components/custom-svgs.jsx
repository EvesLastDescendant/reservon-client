// Email Icon Component
export const EmailIcon = ({ size = 20, color = 'currentColor', ...props }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
    )
};

// Location Icon Component
export const LocationIcon = ({ size = 20, color = 'currentColor', ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
        <line x1="3" y1="24" x2="20" y2="24"></line>
    </svg>
);

// Phone Icon Component
export const PhoneIcon = ({ size = 20, color = 'currentColor', ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        {...props}
    >
        <path d="M14.9437 3.75C16.2159 4.09141 17.3758 4.76142 18.3072 5.69279C19.2386 6.62416 19.9086 7.78412 20.25 9.05625" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.1656 6.64697C14.9308 6.85017 15.6286 7.25202 16.1883 7.81179C16.7481 8.37156 17.15 9.06936 17.3532 9.83447" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.67187 11.6998C9.44364 13.2935 10.7324 14.579 12.3281 15.3467C12.4458 15.4024 12.576 15.4265 12.7059 15.4167C12.8358 15.4068 12.9608 15.3633 13.0687 15.2904L15.4125 13.7248C15.516 13.6546 15.6357 13.6117 15.7603 13.6002C15.8849 13.5887 16.0104 13.609 16.125 13.6592L20.5125 15.5435C20.6625 15.6059 20.7877 15.7159 20.869 15.8565C20.9504 15.9971 20.9832 16.1606 20.9625 16.3217C20.8234 17.407 20.2937 18.4046 19.4723 19.1276C18.6509 19.8506 17.5943 20.2495 16.5 20.2498C13.1185 20.2498 9.87548 18.9065 7.48439 16.5154C5.0933 14.1243 3.75 10.8813 3.75 7.49979C3.75025 6.40553 4.1492 5.34886 4.87221 4.5275C5.59522 3.70613 6.59274 3.17635 7.67812 3.03729C7.83922 3.01659 8.00266 3.04943 8.14326 3.13074C8.28386 3.21206 8.39384 3.33733 8.45625 3.48729L10.3406 7.88416C10.3896 7.99699 10.4101 8.12013 10.4003 8.24275C10.3905 8.36537 10.3507 8.48369 10.2844 8.58729L8.71875 10.9685C8.64905 11.0762 8.60814 11.2 8.59993 11.328C8.59172 11.4561 8.61649 11.5841 8.67187 11.6998V11.6998Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

)

// Web Globe Icon Component
export const WebGlobeIcon = ({ size = 20, color = 'currentColor', ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
);

// image upload icon component
export const ImageUploadIcon = ({ size = 20, color = 'currentColor', ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 78 78"
        fill="none"
        stroke={color}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        {...props}
    >
        <path d="M29.25 71.5H48.75C65 71.5 71.5 65 71.5 48.75V29.25C71.5 13 65 6.5 48.75 6.5H29.25C13 6.5 6.5 13 6.5 29.25V48.75C6.5 65 13 71.5 29.25 71.5Z" />
        <path d="M29.25 32.5C32.8399 32.5 35.75 29.5899 35.75 26C35.75 22.4101 32.8399 19.5 29.25 19.5C25.6601 19.5 22.75 22.4101 22.75 26C22.75 29.5899 25.6601 32.5 29.25 32.5Z" />
        <path d="M8.67749 61.5874L24.7 50.8299C27.2675 49.1074 30.9725 49.3024 33.28 51.2849L34.3525 52.2274C36.8875 54.4049 40.9825 54.4049 43.5175 52.2274L57.0375 40.6249C59.5725 38.4474 63.6675 38.4474 66.2025 40.6249L71.5 45.1749" />
    </svg>

)

export const RadioIcon = ({ size = 4, color = 'currentColor', isSelected }) => {
    return (
        <div
            className={`
                w-4 h-4 rounded-full border-2
                ${isSelected ? 'border-[#4237C9]' : 'border-[#BAB9BF]'}
        `}
        >
            {isSelected && (
                <svg
                    width={size}
                    height={size}
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke={color}
                    strokeWidth={"2"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
            )}
        </div>
    )
}