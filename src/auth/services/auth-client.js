import { apiClient } from "@/auth/services/api-client.js";

export const AuthServices = {
    login: (credentials) => {
        return apiClient.post("/auth/login", credentials)
            .then(res => res.data);
    },

    logout: () => {},

    register: (credentials) => {
        return apiClient.post("/auth/register", credentials)
            .then(res => res.data);
    },

    verifyEmail: (credentials) => {
        return apiClient.post("/auth/verify-email", credentials)
            .then(res => res.data);
    },

    resendVerification: () => {
        return apiClient.post("/auth/resend-verification")
            .then(res => res.data);
    },

    createBusiness: (credentials) => {
        return apiClient.post("/auth/register-business", credentials)
            .then(res => res.data);
    },

    userProfile: () => {
        return apiClient.get("/auth/profile")
            .then(res => res.data);
    },

    forgotPassword: (credentials) => {
        return apiClient.post("/auth/forgot-password", credentials)
            .then(res => res.data);
    },

    verifyForgotPassword: (credentials) => {
        return apiClient.post("/auth/verify-reset-code", credentials)
            .then(res => res.data);
    },

    resetPassword: (credentials) => {
        return apiClient.post("/auth/reset-password", credentials)
            .then(res => res.data);
    }
};
