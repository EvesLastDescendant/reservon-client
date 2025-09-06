import {useAuth} from "@/auth/hooks/use-auth.js";
import {AuthContext} from "@/auth/context/auth-context.js";

export const AuthProvider = ({ children }) => {
    const auth = useAuth();
    return (
        <AuthContext value={auth}>
            {children}
        </AuthContext>
    )
}