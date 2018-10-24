module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define("book", {
    nameOfBook: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    genre: {
      type: DataTypes.ENUM(
        "fiction",
        "non-fiction",
        "sci-fi",
        "mystery",
        "fantasy",
        "suspense",
        "horror",
        "memoir",
        "biography",
        "autobiography"
      ),
      allowNull: false
    },
    pubYear: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      validate: { min: 1, max: 5 }
    }
  });
  return Book;
};
