import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [email, setEmail] = useState(undefined);
    const [role, setRole] = useState(undefined); 

    const login = (email, password) => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser && storedUser.email === email && storedUser.password === password) {
            setEmail(email);
            setRole(storedUser.role);
            setIsAuthenticated(true);
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
        setEmail(undefined);
        setRole(undefined);
    };

    const signup = (newUser) => {
        localStorage.setItem('user', JSON.stringify(newUser)); 
        setEmail(newUser.email);
        setRole(newUser.role);
        setIsAuthenticated(true);
    };

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setEmail(storedUser.email);
            setRole(storedUser.role);
            setIsAuthenticated(true);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, email, role, login, logout, signup }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within the AuthProvider');
    }
    return context;
};
