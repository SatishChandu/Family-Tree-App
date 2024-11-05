import React, { useState } from 'react';
import { Alert, Button, Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import '../App.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const [showSignupModal, setShowSignupModal] = useState(false);
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [signupRole, setSignupRole] = useState('user');
    const [signupError, setSignupError] = useState('');

    const navigate = useNavigate();
    const { login, signup } = useAuth();

    const loginHandler = () => {
        if (!email || !password) {
            setLoginError("Please enter valid credentials");
            setTimeout(() => setLoginError(''), 3000);
            return;
        }
        login(email, password);
        navigate('/landingpage');
    };

    const handleSignupSubmit = () => {
        if (!signupEmail || !signupPassword) {
            setSignupError("Please enter valid credentials");
            setTimeout(() => setSignupError(''), 3000);
            return;
        }
        signup({ email: signupEmail, password: signupPassword, role: signupRole });
        setShowSignupModal(false);
        navigate('/landingpage');
    };

    return (
        <div className="main-container">
          <div className="login-form">
          <h3 className='text-center mb-3'>Welcome to the Family Tree App</h3>
            <h4>Login/Signup</h4>
            {loginError && <Alert variant="danger">{loginError}</Alert>}
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            <Button onClick={loginHandler} className='btn-submit'>Login</Button>
           <div>Not registered yet? <span onClick={() => setShowSignupModal(true)} className='btn-signup'>Signup</span></div>

            <Modal show={showSignupModal} onHide={() => setShowSignupModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Signup here</Modal.Title>
                </Modal.Header>
                {signupError && <Alert variant="danger">{signupError}</Alert>}
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={signupEmail}
                            onChange={(e) => setSignupEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter password"
                            value={signupPassword}
                            onChange={(e) => setSignupPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Role</Form.Label>
                        <Form.Control as="select" value={signupRole} onChange={(e) => setSignupRole(e.target.value)}>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                            <option value="superadmin">Super Admin</option>
                        </Form.Control>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleSignupSubmit}>Register</Button>
                </Modal.Footer>
            </Modal>
            </div>
        </div>
    );
};

export default LoginPage;
