module.exports = mongoose => {
  const Task = mongoose.model(
    "task",
    mongoose.Schema(
      {
        Questions: [{
          question:
          {
            text: String,
            options: [{
              answer: String,
              state: Boolean
          }]
          },
          info : String
        }
        ]
      }
    )
  );

  return Task;
};
