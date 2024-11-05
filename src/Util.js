export const addUser = (email, password, role, fullName, mobile) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
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
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.find((user) => user.email === email && user.password === password);
};

export const isFirstUser = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.length === 0;
};

let familyData = {};
let personData = {};

export const saveFamilyData = (data) => {
    familyData = data;
    console.log("Family data saved:", familyData);
};

export const savePersonData = (data) => {
    personData = data;
    console.log("Person data saved:", personData);
};

export const getFamilyData = () => familyData;
export const getPersonData = () => personData;