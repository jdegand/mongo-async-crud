const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const handleLogin = async (req, res) => {
    const { user, pwd } = req.body;  // match in frontend code
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and pwd are required.' });

    const foundUser = await User.findOne({ username: user }).exec();
    if (!foundUser) return res.sendStatus(401); //Unauthorized 
    // evaluate pwd 
    const match = await bcrypt.compare(pwd, foundUser.pwd);
    if (match) {
        const roles = Object.values(foundUser.roles).filter(Boolean);
        // create JWTs
        const accessToken = jwt.sign(
            {
                "UserInfo": {
                    "username": foundUser.username, 
                    "roles": roles
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '20s' }
        );
        const refreshToken = jwt.sign(
            { "username": foundUser.username },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1m' }
        );

        // Saving refreshToken with current user
        foundUser.refreshToken = refreshToken;
        const result = await foundUser.save();
      
        // Creates Secure Cookie with refresh token
        res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 }); // sameSite: 'None', secure: true,

        // Send authorization roles and access token to user
        res.json({ accessToken });  // roles

    } else {
        res.sendStatus(401);
    }
}

module.exports = { handleLogin };