const { ReadUser } = require('../modules/CRUD/Read');

const Login = async (req, res) => {
    const { email, password } = req.body;
    const user = await ReadUser( email );

    if(user === 'user not found') {
        res.send("user not found");
        console.log('user not found');
    } else{
        if (user.password === password) {
            res.send(`${user.email} found`);
            console.log(`${user.email} found`);
        } else {
            console.log("Invalid password");
            res.send("Invalid password");
        }
    }
};

module.exports = Login;
