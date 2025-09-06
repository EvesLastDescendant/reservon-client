import {CustomerAuthLayout} from "@/auth/components/auth-layout.jsx";
import {CustomInput} from "@/custom-components/form/custom-input.jsx";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {Separator} from "@/components/ui/separator.jsx";

export const CustomerLogin = () => {
    const [loginDetails, setLoginDetails] = useState({email: "", password: ""});
    const [loading, setLoading] = useState(false);

    const onValueChange = (e) => {
        const { name, value } = e.target;
        setLoginDetails({
            ...loginDetails,
            [name]: value
        })
    }

    return (
        <CustomerAuthLayout title={'customer login'}>
            <div className={`max-w-xl flex-1 p-5 md:p-10 bg-white shadow rounded-md space-y-5`}>
                <div className={`flex flex-col items-center justify-center`}>
                    <h1 className={`font-extrabold text-xl md:text-3xl`}>Welcome back!</h1>
                    <p className={`text-lg`}>Provide your login details to continue</p>
                </div>
                <form onSubmit={() => {}} className={`space-y-8`}>
                    <CustomInput
                        type={'email'}
                        id={'email-input'}
                        label={'Email'}
                        name={'email'}
                        value={loginDetails.email}
                        onChange={onValueChange}
                        required
                    />

                    <CustomInput
                        type="password"
                        id="password"
                        label="Password"
                        name="password"
                        value={loginDetails.password}
                        onChange={onValueChange}
                        required
                    />

                    <div className={`flex`}>
                        <p>Forgot password?{" "}</p>
                        <Link to="/reset-password" className={`text-[#4237C9] ml-1`}>
                            Reset
                        </Link>
                    </div>

                    {/*<hr className={`border-t border-[#D1D0D4] mt-10`} />*/}
                    <Separator />

                    <div className={`flex flex-col md:flex-row items-center justify-between gap-y-4`}>
                        <div className={`order-2 md:order-1 flex`}>
                            <p>Don't have an account?</p>
                            <Link to="/customer/signup" className={`text-[#4237C9] ml-1 font-medium`}>
                                Sign-up
                            </Link>
                        </div>
                        <button
                            type="submit"
                            className={`
                                order-1 md:order-2 
                                w-full md:w-[204px] h-[42px] 
                                bg-[#4237C9] text-white 
                                rounded-md cursor-pointer
                            `}
                        >
                            {loading ? <FontAwesomeIcon icon={faSpinner} spin/> : 'Login'}
                        </button>
                    </div>

                    {/* login with socials */}
                    {/*<SocialsLogin />*/}
                </form>
            </div>
        </CustomerAuthLayout>
    )
}