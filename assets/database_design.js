const userModel = {
  userId: String, // 50 Current date + timeStamp
  firstName: String, // 15
  lastName: String, // 15
  phoneNumber: Number, // 15
  reservePhoneNumber: Number, // 15
  email: String, // 15
  password: String, // 50
  isAdmin: Boolean, // Default is 0
  onlineTime: Number, // increasing every refresh
  lastLoginAt: Date, // current login date
  totalOrder: Number, // count order time
  isBanned: Boolean, // ban user if user is invalid
  village: String, // 50,
  district: String, // 50,
  province: String, // 50,
  address: String // 200
};


