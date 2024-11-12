import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '../src/components/AuthContext';
import LoginPage from './components/LoginPage';
import LandingPage from './components/LandingPage';
// import HomePage from './components/HomePage';
import PrivateRoute from '../src/components/PrivateRoute';
import AdminPage from './components/AdminPage';
import SuperAdminPage from './components/SuperAdminPage';
import DataView from './components/DataView';
import DynamicFamilyTree from './components/DynamicFamilyTree';

function RoleBasedRoute({ children, requiredRole }) {
    const { role } = useAuth();
    return role === requiredRole ? children : <Navigate to="/" />;
}

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/landingpage" element={<PrivateRoute><LandingPage /></PrivateRoute>} />
                    <Route path="/home" element={<PrivateRoute><DynamicFamilyTree /></PrivateRoute>} />
                    <Route path="/view-data" element={<PrivateRoute><DataView /></PrivateRoute>} />

                    {/* Role-based routes */}
                    <Route path="/admin" element={
                        <RoleBasedRoute requiredRole="admin">
                            <AdminPage />
                        </RoleBasedRoute>
                    } />
                    <Route path="/superadmin" element={
                        <RoleBasedRoute requiredRole="superadmin">
                            <SuperAdminPage />
                        </RoleBasedRoute>
                    } />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
