 /*
 
 Constraints are placed on columns or tables. They limit the data that can be inserted into tables. They are majorly used during creation of tables. We have the following constraints:
NOT NULL Constraint: A column with a NOT NULL constraint, cannot have NULL values.


UNIQUE: The UNIQUE constraint ensures that all data are unique in a column.



PRIMARY KEY: The PRIMARY KEY constraint uniquely identifies each record in a database table. It is a special case of unique keys. Primary keys cannot be NULL, unique keys can be. There can be more UNIQUE columns, but only one primary key in a table. Primary keys are important when designing the database tables. Primary keys are unique ids. We use them to refer to table rows. Primary keys become foreign keys in other tables, when creating relations among tables.



FOREIGN KEY: A FOREIGN KEY in one table points to a PRIMARY KEY in another table. It is a referential constraint between two tables. The foreign key identifies a column or a set of columns in one (referencing) table that refers to a column or set of columns in another (referenced) table.



ENUM: An ENUM is a string object with a value chosen from a list of permitted values. They are enumerated explicitly in the column specification at table creation time.



SET: A SET can have zero or more values. Each of the values must be chosen from a list of permitted values.



Checking all the existing tables in the database




 
 
 */