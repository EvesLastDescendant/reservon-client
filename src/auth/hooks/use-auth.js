import {useEffect, useState} from "react";
import {AuthServices} from "@/auth/services/auth-client.js";

export const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkForToken = async () => {
            const token = localStorage.getItem('accessToken');

            if (token) {
                try {
                    const res = await AuthServices.userProfile();
                    const { data } = res;
                    setUser(data.user);
                } catch (e) {
                    console.error("failed to fetch data", e);
                    localStorage.removeItem('accessToken');
                }
            }
            setLoading(false);
        }
        checkForToken();
    }, []);

    const login = async (credentials) => {
        try {
            const res = await AuthServices.login(credentials);
            const { access_token } = res.data;

            localStorage.setItem('accessToken', access_token);
            setUser(res.data.user);

            return { data: res.data };
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
    const logout = async () => {
        await AuthServices.logout();
        localStorage.removeItem('accessToken');
        setUser(null);
    }

    const signup = async (credentials) => {
        try {
            const res = await AuthServices.register(credentials);
            const { data } = res;
            const { access_token } = res.data;

            localStorage.setItem('accessToken', access_token);
            setUser(data.user);

            return { res };
        } catch (err) {
            console.error("Sign up failed", err);
            throw err;
        }
    }

    const verifyEmail = async (credentials) => {
        try {
            const res = await AuthServices.verifyEmail(credentials);
            return { res };
        } catch (err) {
            return { status: false, details: err };
        }
    }

    const createBusiness = async (credentials) => {
        try {
            const res = await AuthServices.createBusiness(credentials);
            return { res };
        } catch (err) {
            return { status: false, details: err };
        }
    }

    const forgotPassword = async (credentials) => {
        try {
            const res = await AuthServices.forgotPassword(credentials);
            return { res } ;
        } catch (e) {
            return { status: false, details: e };
        }
    }

    const verifyOtp = async (credentials) => {
        try {
            const res = await AuthServices.verifyForgotPassword(credentials);
            return { res };
        } catch (err) {
            return { status: false, details: err };
        }
    }

    const resetPassword = async (credentials) => {
        try {
            const res = await AuthServices.resetPassword(credentials);
            return { res };
        } catch (err) {
            return { status: false, details: err };
        }
    }

    return { user, loading, login, logout, signup, verifyEmail, createBusiness, forgotPassword, verifyOtp, resetPassword };
}