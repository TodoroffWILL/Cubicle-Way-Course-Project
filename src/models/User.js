const mongoose = require('mongoose');
//bcrypting/hashing the password
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
  username: String,
  password: {
    type: String,
  },
});

userSchema.virtual('repeatPassword').set(function (value) {
  if (value !== this.password) {
    throw new mongoose.MongooseError('Password missmatch!');
  }
});

// Направи хеша преди да сейвнеш в базата данни
userSchema.pre('save', async function () {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
});

const User = mongoose.model('User', userSchema);

module.exports = User;
