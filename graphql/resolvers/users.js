const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');

const { validateRegisterInput, validateLoginInput } = require('../../utils/Validator')
const { SECRET_KEY } = require('../../myConfig');
const User = require('../../models/User');

const generateToken = (user) => {
  return (
    jwt.sign({
      id: user.id,
      username: user.username
    }, SECRET_KEY, { expiresIn: '1h' })
  )

}

module.exports = {

  Query: {
    async getUser(_, { userId }) {
      try {
        const user = await User.findById(userId);
        if (user) {
          return user;
        } else {
          throw new Error('User not found');
        }
      } catch (err) {
        throw new Error(err);
      }
    }
  },

  Mutation: {
    async login(_, { username, password }) {
      const { valid, errors } = validateLoginInput(username, password);
      if (!valid) {
        throw new UserInputError('Errors', { errors });
      }

      const user = await User.findOne({ username })

      if (!user) {
        errors.general = 'User not found'
        throw new UserInputError('User not found', { errors });
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        errors.general = 'Wrong password'
        throw new UserInputError('Wrong password', { errors });
      }

      const token = generateToken(user)
      return {
        ...user._doc,
        id: user._id,
        token
      }


    },
    async register(_, {
      registerInput: {
        username,
        password,
        confirmPassword,
        userType,
      } }) {
      //Valide user data
      const { valid, errors } = validateRegisterInput(username, password, confirmPassword, userType)
      if (!valid) {
        throw new UserInputError('Errors input', { errors })
      }
      //user doesnt exist
      const user = await User.findOne({ username })
      if (user) {
        throw new UserInputError('Username is taken', {
          errors: {
            username: "This usernane is taken"
          }
        })
      }

      //hash password
      password = await bcrypt.hash(password, 12);

      const newUser = new User({
        username,
        password,
        userType
      })

      const res = await newUser.save();

      const token = generateToken(res)
      return {
        ...res._doc,
        id: res._id,
        token
      }
    }
  }
}