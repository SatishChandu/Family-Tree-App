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

let familyData = [];
let personData = [];

export const saveFamilyData = (data) => {
    familyData.push(data);
    console.log("Family data saved:", familyData);
};

export const savePersonData = (data) => {
    personData.push(data);
    console.log("Person data saved:", personData);
};

export const getFamilyData = () => familyData;
export const getPersonData = () => personData;

export const getFamilyDataById = (id) => {
    const familyData = getFamilyData();
    return familyData.find(data => data.id === id);
};

export const getPersonDataById = (id) => {
    const personData = getPersonData();
    return personData.find(data => data.id === id);
};
export const deleteFamilyData = (id) => {
    familyData = familyData.filter(data => data.id !== id);
    console.log("Family data after deletion:", familyData);
    return familyData;
};

export const deletePersonData = (id) => {
    personData = personData.filter(data => data.id !== id);
    console.log("Person data after deletion:", personData);
    return personData;
};

export const clearFamilyData = () => {
    localStorage.removeItem('familyData');
};

export const clearPersonData = () => {
    localStorage.removeItem('personData');
};