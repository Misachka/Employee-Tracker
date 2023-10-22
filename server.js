const inquirer = require('inquirer');
require('dotenv').config();
const mysql = require('mysql2');

//connect to mysql
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: process.env.DB_PASSWORD,
        database: 'employees_db'
    },
    console.log(`Connected to employees_db`)
);
db.connect((err) => {
    if (err) throw err;
    userPrompts();
});

//user prompts
const userPrompts = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'options',
                message: 'What would you like to do?',
                choices: [
                    'View all departments',
                    'View all roles',
                    'View all employees',
                    'Add a department',
                    'Add a role',
                    'Add an employee',
                    'Update an employee role',
                    'View employees by department',
                    'View employees by manager',
                    'Delete a department',
                    'Delete a role',
                    'Delete an employee',
                    'View department budgets',
                    'No action',
                ],

            },
        ])

        //different functions for database
        .then((res) => {
            const choice = res.options;
            switch (choice) {
                case 'View all departments':
                    viewAllDepartments();
                    break;
                case 'View all roles':
                    viewAllRoles();
                    break;
                case 'View all employees':
                    viewAllEmployees();
                    break;
                case 'Add a department':
                    addDepartment();
                    break;
                case 'Add a role':
                    addRole();
                    break;
                case 'Add an employee':
                    addEmployee();
                    break;
                case 'Update an employee role':
                    UpdateEmployeeRole();
                    break;
                case 'View employees by department':
                    viewEmployeesByDepartment();
                    break;
                case 'View employees by manager':
                    viewEmployeesByManager();
                    break;
                case 'Delete a department':
                    deleteDepartment();
                    break;
                case 'Delete a role':
                    deleteRole();
                    break;
                case 'Delete an employee':
                    deleteEmployee();
                    break;
                case 'View department budgets':
                    viewDepartmentBudgets();
                    break;
                case 'No action':
                    noAction();
                    break;

            }
        });
};

//Select all the department 
const viewAllDepartments = () => {
    let query = `SELECT * FROM department`;
    db.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        userPrompts();
    });
};

//Select all roles
const viewAllRoles = () => {
    let query =
        `SELECT role.id, role.title, department.name AS department
    FROM role
    INNER JOIN department ON role.department_id = department.id`;

    db.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        userPrompts();
    });
};

//picks employees info and adds their manager
const viewAllEmployees = () => {
    const query =
        `SELECT employee.id, 
    employee.first_name, 
    employee.last_name, 
    role.title, 
    department.name AS department,
    role.salary, 
    CONCAT (manager.first_name, " ", manager.last_name) AS manager
    FROM employee
    LEFT JOIN role ON employee.role_id = role.id
    LEFT JOIN department ON role.department_id = department.id
    LEFT JOIN employee manager ON employee.manager_id = manager.id`;

    db.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        userPrompts();
    });

};

// view employees by manager
const viewEmployeesByManager = () => {
    const query = 'SELECT * FROM employee ORDER BY manager_id DESC';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
    })

    printMenuPrompts();
}
