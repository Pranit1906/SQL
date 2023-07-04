/*

Entity Relationship Diagram 


ER (Entity Relationship) diagram is used to describe the design of the database.
It helps technical [Developer]and non-technical[Client] to understand the structure of the database before implementing.


What is an ER Diagram?
Graphical Representation of database which include Entity,Attributes and relationships is called as ER Diagram


Components of ER Diagram:-
Following are component of ER diagram
1.Entity 2.Attribute 3.Relationship

What is Entity?
An object or component of data that can be uniquely identified from its group.
Entity is represented by Rectangular box.
Types of Entity 
Strong Entity
Weak Entity

Example:-

Person can be uniquely identified by his pan card,aadhar card etc. [Trainer can give different example to explain unique identification to understand entity]
Student in college contains a student id number which helps to identify that student from a group of students.
Similarly college had a college ID which helps to identify college from group of college [university].
In above example student and college are entity.



What is Attribute?
Properties of Entity are called as Attributes.
Represented by Oval shape.

Types of Attribute
i. Key attribute
ii. Composite attribute
iii. Multivalued attribute
iv. Derived Attribute


What is a Key attribute?
Attribute that is used to uniquely identify an entity from its group is called a Key Attribute.
Represented by Oval with underline to attribute name.


Example:-

Student id is a key attribute that uniquely identifies a student from a group of students.
College id is the key attribute that uniquely identifies college from a group of colleges.


Diagram

       StudentId                             CollegeId
                \                           /
                 \                         /
                  \                       /
                    Student         college



What is composite attribute
An attribute that is a combination of other attributes is called a Composite attribute.
Represented by oval.

Example:-

Address attribute of a student can be a combination of  city, Pincode etc of the student


Diagram
                                             City
                                            /
.                                          /
                                          /
                  Student -------> Address
                                          \
                                           \
                                            \ 
                                             Pincode

In the above diagram address is a composite attribute made from city and pincode.



What is a Multivalued Attribute?

An attribute that can have more than one value is called a Multivalued Attribute.
Represented by Double Oval shaped


Example:-

A student can have more than one mobile number. So mobile is an attribute which has more than one value.


Diagram
                   Mobile No ===> Consider Oval Shape Cricle
                 / 
                /  
               /
        Student 





What is Derived Attribute

An attribute whose value changes and is derived from another attribute is called a Derived attribute.
Represented by Dotted Oval

Example

A student attribute age which always changes and is derived from another attribute date of Birth.





*/

/*



Summary:- 
1.) ER Model in DBMS stands for an Entity-Relationship model.
2.) The ER model is a high-level data model diagram
3.) ER diagrams are a visual tool which is helpful to represent the ER model
4.) ER diagrams in DBMS are blueprint of a database
5.) Entity relationship diagram DBMS displays the relationships of entity set stored in a database
6.) ER diagrams help you to define terms related to entity relationship modeling
7.) ER Model in DBMS is based on three basic concepts: Entities, Attributes & Relationships
8.) An entity can be place, person, object, event or a concept, which stores data in the database (DBMS)
9.) Relationship is nothing but an association among two or more entities
10.)A weak entity is a type of entity which doesn’t have its key attribute
11.)It is a single-valued property of either an entity-type or a relationship-type
12.)It helps you to defines the numerical attributes of the relationship between two entities or entity sets
13.)ER- Diagram DBMS is a visual representation of data that describe how data is related to each other
14.)While Drawing ER diagrams in DBMS, you need to make sure all your entities and relationships are properly labeled.


*/