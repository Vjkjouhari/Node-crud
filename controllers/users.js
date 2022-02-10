import { v4 as uuidv4 } from 'uuid';

export const createUser = (req, res) => {
    const user = req.body;
    // const userId = uuidv4();
    // const userwithId = { ...user, id:userId }
    // users.push(userwithId);

    // or
    // const userwithId = { ...user, id:uuidv4() }
    // users.push(userwithId);
    // or
   
    users.push({ ...user, id:uuidv4() });
    res.send(`user with the name ${user.name} added to the database`);
}

export const getUser =  (req, res) => {
    res.send(users);
}

export const getUserData = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id)
    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);
    res.send('user deleted ');
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;

    const user = users.find((user) => user.id === id);

    if(name) user.name = name;
    if(email) user.email = email;
    if(age) user.age = age;

    res.send('user updated');
}