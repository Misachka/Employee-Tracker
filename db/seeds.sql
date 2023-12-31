INSERT INTO department(name)
VALUES ('Management'),
('Finances'),
('Customer Service');

-- Inserts values to role table
INSERT INTO role(title, salary, department_id)
VALUES ('General manager', 70000, 1),
('Finance manager', 65000, 1),
('Supervisors', 58000, 1),
('Filing clerk', 52000, 2),
('Accountant', 46000, 2),
('Analyst', 40000, 2),
('Customer rep', 45000, 3),
('Sales rep', 46000, 3),
('Front desk', 42000, 3),
('Cleaning', 42500, 3);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('Meadow', 'Kelleher', 1, 1),
('Melina', 'Ulrich', 2, 1),
('Derick', 'Sibley', 3, 1),
('Sierra', 'Prescott', 3, 1),
('Jackelyn', 'Holman', 4, 2),
('Anjelica', 'Knox', 4, 2),
('Moses', 'Broadt', 4, 2),
('Carlos', 'Francisco', 5, 2),
('Roderick', 'Gonzalez', 5, 2),
('Cristian', 'Khalid', 5, 2),
('Crystak', 'Cramer', 5, 2),
('Daniel', 'Talbot', 6, 2),
('Triston', 'Amlen', 6, 2),
('Roy', 'Ly', 7, 3),
('Jovanny', 'Registre', 7, 3),
('Emmett', 'Lance', 7, 3 ),
('Armand', 'LoCascio', 7, 3),
('Jerrod', 'Freitas', 7, 4 ),
('Domenic', 'Post', 7, 4),
('Rhonda', 'Kearney', 7, 4 ),
('Hakeem', 'McGuire', 7, 4),
('Lina', 'Errico', 8, 3),
('Devontae', 'Patel', 8, 3),
('Milena ', 'Griggs', 8, 4),
('Bernard', 'Resende', 8, 4),
('Jaiden', 'Singh', 9, 3),
('Cesar', 'Tyree', 9, 4),
('Maximus', 'Helms', 10, 3);
