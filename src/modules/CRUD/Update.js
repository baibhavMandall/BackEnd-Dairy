const User = require('../Module');

const Update = async (email, key, value) => {
    try {
        const user = await User.findOne({ email });
        if(user) {
            await User.findByIdAndUpdate(user._id, { [key]: value });
            return 'User updated successfully';
        } else {
            return 'user not found';
        }
    }   catch (error) {
        return `Error : ${error}`;
    }
}

module.exports = Update;
