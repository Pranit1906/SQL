/*

On Clause: 
The ON clause is used to join tables where the column names don’t match in both tables.
The join conditions are removed from the filter conditions in the WHERE clause. 
In other words, the ON clause is similar to the WHERE clause as you can put multiple conditions in the ON clause.
 

select (e.firstName || e.lastname) as "EmployeeName",
c.customerName FROM employees e JOIN customers c
on (e.employeeNumber = c.SalesRepEmployeeNumber);
*/

/*

.Using Clause: 
The columns listed in the USING clause must be present in both of the two tables being joined. 
The USING clause will be transformed into an ON clause that checks for equality 
between the named columns in the two tables.

select (e.firstname || e.lastname), o.city
FROM employees e JOIN offices o USING (officeCode);
*/