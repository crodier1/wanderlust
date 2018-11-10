module.exports = function (sequelize, DataTypes) {
  var Example = sequelize.define("Example", {

    countryName: DataTypes.STRING,
    medianwage: DataTypes.TEXT,
    bigmac_index: DataTypes.STRING,
    gini: DataTypes.STRING,
    life_expectancy: DataTypes.STRING,
    murder_rate: DataTypes.STRING,
    death_rate: DataTypes.STRING,
    happiness_index: DataTypes.STRING,
    corruption_index: DataTypes.STRING,
    literacy_rate: DataTypes.STRING,
    tax_revenue_total: DataTypes.STRING,
    median_age: DataTypes.STRING

  });
  return Example;
};
