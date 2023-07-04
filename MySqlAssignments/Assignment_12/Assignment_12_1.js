/*

A university registrar’s office maintains data about the following entities: 
(a) courses, including number, title, credits, syllabus, and prerequisites; 
(b) course offerings, including course number, year, semester, section number, instructor(s),
timings, and classroom; 
(c) students, including student-id, name, and program; and 
(d) instructors, including identification number, name, department, and title.

Further, the enrollment of students in courses and grades awarded to students
in each course they are enrolled for must be appropriately modeled.

Construct an E-R diagram for the registrar’s office. Document all assumptions
that you make about the mapping constraints.

table1 :- Coursers (C_Number, Title, Credits, Syllabus, Prerequisites);
table2 :- Course_Offering (C_Number, year, semester, section_Number, instructors(identification_Number), timings, classroom);
table3 :- Students (Student_Id, Name, Program);
table4 :- Instructors (identification_Number, Name, Department, title)

*/

/*


Construct an E-R diagram for a car-insurance company whose customers own

one or more cars each. Each car has associated with it zero to any number of

recorded accidents.

table_1:- Customers(Cust_Id,Name,Contact,Car_Owned);
table_2:- Cars(Car_Id,Car_Name,model,company);
table_3:- Accident(Accident_Id,Car_Id,Cust_Id,location,Cost,DateOfAccident)
*/