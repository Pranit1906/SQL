use itvedant;
show tables;
select * from fullstack;

-- alter Table Name --
alter table fullstack rename Full_Stack;
alter table Full_Stack rename fullstack;

-- alter Column Name --
alter table fullstack rename column subject to topics;
alter table fullstack rename column id to Course_id;
desc fullstack;

-- alter database Name --
-- https://www.youtube.com/watch?v=krXBR0_u5s0&t=120s --

-- Create tables with Similar Schema using Like Operator ---
desc client;
create table custom like client;
desc custom;
