import {forwardRef, useState, useRef, useCallback} from "react";
import {CountrySelect} from "@/custom-components/form/country-select.jsx";
import {Eye, EyeOff} from "lucide-react";

export const CustomInput = forwardRef((props, ref) => {
    const {type = 'text', id, name, label, value = '', hasNoError, onChange, onBlur, className = '', checked, withCountryCode = false, ...rest} = props
    const [showPassword, setShowPassword] = useState(false)
    const [isFocused, setIsFocused] = useState(false)
    const inputRef = useRef(null)
    const buttonRef = useRef(null)

    const togglePassword = useCallback((e) => {
        e.preventDefault()
        setShowPassword(prevState => !prevState)
        setTimeout(() => {
            if (inputRef.current) {
                inputRef.current.focus()
            }
        }, 0)
    }, [])

    const inputType = useCallback(() => {
        if (type === 'password') {
            return showPassword ? 'text' : 'password'
        }
        return type
    }, [type, showPassword])

    const handleFocus = useCallback((e) => {
        setIsFocused(true)
        if (props.onFocus) props.onFocus(e)
    }, [props.onFocus])

    const handleBlur = useCallback((e) => {
        setIsFocused(!!e.target.value)
        if (onBlur) onBlur(e)
    }, [onBlur])

    if (type === 'checkbox') {
        return (
            <div className={`flex items-center ${className}`}>
                <input
                    ref={ref || inputRef}
                    type={type}
                    id={id}
                    name={name}
                    checked={checked}
                    onChange={onChange}
                    className={`hidden`}
                />
                <label htmlFor={id} className={`flex items-center cursor-pointer`}>
                    {checked
                        ? (<CircleCheck strokeWidth={2} color={'#4237C9'} size={20}/> )
                        : (<div
                                className={`
                                w-4 h-4 rounded flex items-center justify-center border
                                `}
                            />
                        )
                    }
                    <span className={'ml-2 block text-xs md:text-sm text-[#757480]'}>{label}</span>
                </label>
            </div>
        )
    }

    return (
        <div>
            <div className={`relative ${className}`}>
                <label
                    htmlFor={id}
                    className={`
                        absolute transition-all duration-200 ease-in-out pointer-events-none text-[#757480]
                        ${type === 'tel' ? 'left-12 md:left-20' : 'left-3'}
                        ${isFocused || value
                        ? 'top-5 -translate-y-1/2 text-sm px-1'
                        : 'top-1/2 -translate-y-1/2 text-base'
                    }   
                `}
                >
                    {label}
                </label>

                {withCountryCode ? (
                    <div className={`relative flex items-stretch`}>
                        {/* country code selector */}
                        <div className={`p-1.5 rounded-l absolute top-1/5 left-3 flex items-center bg-[#E8E7E9]`}>
                            <CountrySelect />
                        </div>
                        <input
                            ref={node => {
                                inputRef.current = node
                                if (typeof ref === 'function') ref(node)
                                else if (ref) ref.current = node
                            }}
                            type="tel"
                            id={id}
                            value={value}
                            name={name}
                            onChange={onChange}
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                            placeholder={" "}
                            className={`
                            w-full pl-12 md:pl-20 pt-6 pb-2 border rounded-md border-[#BAB9BF] shadow
                            focus:outline-none focus:border-[#4338CA] focus:ring-2 focus:ring-[#C0BCED]
                        `}
                            {...rest}
                        />
                    </div>
                ) : (
                    <input
                        ref={ref || inputRef}
                        type={inputType()}
                        id={id}
                        value={value}
                        name={name}
                        onChange={onChange}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        placeholder={" "}
                        className={`
                    w-full px-4 pt-6 pb-2 border rounded-md border-[#BAB9BF] shadow
                    focus:outline-none focus:border-[#4338CA] focus:ring-2 focus:ring-[#C0BCED]
                    ${name === 'confirmPassword' && hasNoError && 'focus:outline-none focus:border-[#4338CA] focus:ring-2 focus:ring-[#C0BCED]'}
                    ${name === 'confirmPassword' && !hasNoError && 'focus:outline-none border-[#D3351D] ring-2 ring-[#FCE4D1]'}
                `}
                        {...rest}
                    />
                )}

                {type === 'password' && (
                    <button
                        ref={buttonRef}
                        type={"button"}
                        className={`absolute right-3 top-1/2 transform -translate-y-1/2 border-none focus:outline-none cursor-pointer`}
                        onClick={togglePassword}
                        onMouseDown={(e) => e.preventDefault()}
                    >
                        {showPassword
                            ? (<Eye />)
                            : (<EyeOff />)
                        }
                    </button>
                )}
            </div>
            {name === 'confirmPassword' && !hasNoError && (<p className={"text-[#D3351D] mt-3 text-sm text-wrap"}>Passwords do not match, please make sure this password is the same as the one above.</p>)}
        </div>
    )
})