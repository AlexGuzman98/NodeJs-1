const User = require('../models/user.models');
const userService = {};
userService.createUser = async function ({name,email}) {
    try {
        const user = new User({name,email});
        const newUser = await user.save();
        return newUser;
    } catch (e) {
        throw new Error ('Error While save User')
    }
}
userService.getUsers = async function () {
    try {
        const users = await User.find({});
        return users;
    } catch (error) {
        throw new Error ('Error while PAginating User');
    }
}
module.exports = userService;