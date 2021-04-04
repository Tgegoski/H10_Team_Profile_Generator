const inquirer = require ("inquirer");
const jest = require ("jest");
const fs = require ("fs");
const path = require ("path");
const Engineer = require ("./lib/Engineer");
const Intern = require ("./lib/Intern");
const Manager = require ("./lib/Manager");
const generateTeam = require("./src/page-template");
const OUTPUT_DIR = path.resolve(__dirname, "./output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const myTeam = ["manager","engineer","intern"];


inquirer
    .prompt(Employee)
    ([
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
            message: 'What is your employees email address?',
        
        },
        {
            type: 'input',
            role: 'employeeRole',
            message: 'What is your employees role?',
            choices: ['Engineer, Intern, Manager'],
        
        },
    ])

        inquirer 
        .prompt(Engineer)
    ([
        {
            type: 'input',
            gitHub: 'gitHubUserName',
            message: 'What is your Engineers Git Hub User Name?',
        
        },
    ])

        inquirer 
        .prompt(Intern)
        ([

        {
            type: 'input',
            school: 'schoolName',
            message: 'What is the name of your Interns School?',
        
        },
    ])

        inquirer 
        .prompt ()
        getManager([
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

function createManager () {
    inquirer.prompt([
        {
        type:"input",
        name: "office",
        message: "What is your Office Number?",

        }
    ]).then(data => {
        
        const newManager = new Manager(data.name,data.id,data.email,data.managerOfficeNumber)
        team.push(newManager);
        switchEmployee()
    })
} 

function createEngineer() {
    inquirer.prompt([
        {
        type:"input",
        name: "github",
        message: "What is your Engineers's Git Hub User Name?",

        }
    ]).then(data => {
        
        const newE = new Engineer(data.name,data.id,data.email,data.gitHubUserName)
        team.push(newE);
        switchEmployee()
    })
} 

function createIntern () {
    inquirer.prompt([
        {
            type:"input",
            name: "school",
            message: "What is your Intern's School Name?",

        }
    ]).then(data => {
        
        const newI = new Intern(data.name,data.id,data.email,data.schoolName)
        team.push(newI);
        switchEmployee()
    })
} 

function createTeam() {
    fs.writeFileSync(outputPath, generateTeam(team), "utf-8")
}

function switchEmployee() {
    inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "What type of team member would you like to add?",
            choices: [
                "Engineer",
                "Intern",
                "I'm done"
            ]
        }
    ]).then(data => {

        switch (data.choice) {
            case "Engineer":
                return createEngineer();
            
            case "Intern": 
                return createIntern();
            
            default: 
                return createTeam();
        }

    })

}

createManager()

const Employee = Employee();

const team = generateTeam;

return fs.readFile(`${__dirname}/team.html`, (err, data) => {
    if (err) throw err;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });