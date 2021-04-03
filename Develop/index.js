const inquirer = require ("inquirer");
const jest = require ("jest");
const fs = require ("fs");
const employee = require ("./lib/Employee");
const employee = require ("./lib/Engineer");
const employee = require ("./lib/Intern");
const employee = require ("./lib/Manager");
const employee = newEmployee();

inquirer
    .promptEmployee([
        {
            type: 'input',
            name: 'name',
            message: 'What is your employees name?',
        },
        {
            type: 'input',
            id: 'employeeID?',
            message: 'What is your employees id?',
        },
        {
            type: 'input',
            email: 'employees email',
            message: 'What is your employees email?',
        
        },
        {
            type: 'input',
            role: 'employeeRole',
            message: 'What is your employees role?',
            choices: ['Engineer, Intern, Manager'],
        
        },
    ])

        inquirer 
        .promptEngineer([
        {
            type: 'input',
            gitHub: 'gitHubUserName',
            message: 'What is your Engineers Git Hub User Name?',
        
        },
    ])

        inquirer 
        .promptIntern([

        {
            type: 'input',
            school: 'schoolName',
            message: 'What is the name of your Interns School?',
        
        },
    ])

        inquirer 
        .promptManager([
        {
            type: 'input',
            office: 'officeNumber',
            message: 'What is your Managers office number?',
        },
             
    ]          
    
).then ((
    answers
) =>{

} )

