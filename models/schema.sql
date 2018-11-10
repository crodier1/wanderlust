DROP DATABASE IF EXISTS exampledb;
CREATE DATABASE exampledb;

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;

create table examples(
id INTEGER NOT NULL auto_increment,
countryName VARCHAR(255),
medianwage VARCHAR(255),
bigmac_index VARCHAR(255),
gini VARCHAR(255),
life_expectancy VARCHAR(255),
murder_rate VARCHAR(255),
death_rate VARCHAR(255),
happiness_index VARCHAR(255),
corruption_index VARCHAR(255),
literacy_rate VARCHAR(255),
tax_revenue_total VARCHAR(255),
median_age VARCHAR(255),
createdAt DATETIME NOT NULL,
updatedAt DATETIME NOT NULL, 
PRIMARY KEY (id) 
)