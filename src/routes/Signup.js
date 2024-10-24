const Create = require('../modules/CRUD/Create');

const Signup = async (req, res) => {
    const { name, email, password } = req.body;
    
    const data = await Create(name, email, password);
    res.send(data);
}

module.exports = Signup;