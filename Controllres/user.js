// import User from '../models/User';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import nodemailer from 'nodemailer'

// const Register = async (req, res) => {
//     const { name, email, phone, password } = req.body;
//     try {
//         const data = { name, email, phone, password }
//         let user = await User.findOne({ email: email })
//         if (user) {
//             return res.status(400).json({ msg: 'User with this email already exists' })
//         }
//         user = new User({ name, email, phone, password })
//         const salt = await bcrypt.genSalt(10);
//         user.password = await bcrypt.hash(password, salt)
//         await user.save();

//         const payload = {
//             user: {
//                 id: user.id
//             }
//         }

//         jwt.sign(payload, process.env.JWTSECRET || 'myscretkey', { expiresIn: 3600000 }, (err, token) => {
//             if (err) throw err.message;

//             return res.json({ token }); console.log(token);
//         })
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send('Server Error')
//     }
// }

// export { Register }