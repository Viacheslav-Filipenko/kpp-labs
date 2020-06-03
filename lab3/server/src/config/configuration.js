module.exports = {
  port: process.env.PORT || 5000,
  database: {
    url: process.env.MONGO_URL || "mongodb://localhost:27017/minutemedia",
  },
};
