/*


CoRelation SubQuery:-

A subquery is a query that is enclosed within another query in SQL.
When a subquery returns data, this data is used by the outer query.

In other words, this data is a prerequisite for the outer query to work.
In this case, instead of writing two separate queries, we write one inside of the other. 
However, a correlated subquery needs the values of the main query to work. How? Let's find out!

Scope

The most commonly used keywords with correlated subqueries are EXISTS and NOT EXISTS.

What is A Correlated Subquery?
A correlated subquery uses the values of the outer or main query. 
This query is dependent onthe outer one and hence cannot be executed in an independent manner.
The main query can be in the form of the following:

SELECT
UPDATE
DELETE

A correlated subquery is used in row-by-row processing and gets evaluated once for each row processed by the outer query.
A correlated subquery is a way to read all the rows in a table. 
It is used when a subquery is expected to return different values for each row the main query looks at,
so it reads all of them.
Since it gets executed repeatedly, it is also known as repeating subquery.


Example
Let us consider a table vehicles from some database that lists the most preferred car models in a city. The table columns are:

Cars
car_model
car_name
brand
category
market_price

We will write a query to find all the cars whose market price equals the lowest price in the same category.

Following is the MySQL Code :

MySQL:

SELECT
    car_name,
    market_price,
    category
FROM
    vehicles.car c1
WHERE
    market_price = (
        SELECT
            MIN (c2.market_price)
        FROM
            vehicles.car c2
        WHERE
            c2.category = c1.category
        GROUP BY
            c2.category
    )
    
ORDER BY
    category,
    car_name;


Output:

car_name	    market_price	category
A	              $18000	   Hatchback
X	              $18000	   Hatchback
ABC	              $20000	     Sedan
XYZ	              $20000	     Sedan
Z	              $20000	     Sedan
I	              $24000	      SUV

Explanation:- 
In the example above, we have a SELECT statement within a SELECT statement. 
For every car evaluated by the outer or main query, the lowest price in its category is found with the help of the subquery.

In case the price of any car is equal to the least price of all cars in the same category, it is added to the result. 
Thus, the correlated subquery is executed for every row evaluated by the outer query.
*/