const User = require('../Module');

const Delete = async (email) => {
    try {
        const user = await User.findOne({ email });
        if(user) {
            await User.deleteOne({ email });
            return 'user deleted successfully';
        } else {
            return 'user not found';
        }
    }   catch (error) {
        return `Error : ${error}`;
    }
}

module.exports = Delete;