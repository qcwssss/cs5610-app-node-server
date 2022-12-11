import mongoose from 'mongoose';
import usersShcema from './users-schema.js';

const usersModel = mongoose.model('UsersModel', usersShcema)

export default usersModel