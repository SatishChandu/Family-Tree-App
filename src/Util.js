export const users = JSON.parse(localStorage.getItem('users')) || [];

export const addUser = (email, password, role, fullName, mobile) => {
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
        throw new Error('User already exists with this email.');
    }

    const newUser = {
        email,
        password, 
        role,
        fullName,
        mobile
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users)); 
};

export const findUser = (email, password) => {
    return users.find((user) => user.email === email && user.password === password);
};

export const isFirstUser = () => {
    return users.length === 0;
};
