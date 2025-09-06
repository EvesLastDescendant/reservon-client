import {useContext} from "react";
import {AuthContext} from "@/auth/context/auth-context.js";
import {Loader1} from "@/custom-components/loader.jsx";
import {Navigate} from "react-router-dom";

export const ProtectedRoute = ({ children, role, path }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div className={`min-h-screen bg-neutral-100 flex items-center justify-center`}>
                <div><Loader1 /></div>
            </div>
        )
    }

    if (!user) {
        return <Navigate to={path} replace />
    }

    if (role && user.userType !== role) {
        return <Navigate to={'/unauthorized'} replace />
    }

    return children;
}