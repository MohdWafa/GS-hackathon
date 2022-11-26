module.exports = mongoose => {
  const User = mongoose.model(
    "user",
    mongoose.Schema(
      {
        email: String,
        score: Number
      },
      { timestamps: true }
    )
  );

  return User;
};
