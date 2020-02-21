const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Trainee");
const Manager = require("./lib/Manager");

let team = { engineers: [], Trainee: [], managers: [] }
promptUser();

function promptUser(){
    inquirer.prompt([
        { 
            type: "list",
            message: "Company Position: ",
            choices: [
                "Engineer",
                "Trainee",
                "Manager"
            ],
            name: "role" 
        }
    ]).then(answer => {
        switch(answer.role){
            case "Engineer":
                return caseEngineer();
            case "Trainee":
                return handleTrainee();
            case "Manager":
                return handleManager();
        }
    });
}
function caseEngineer(){
    inquirer.prompt([
        {
            type: "input",
            message: "Name: ",
            name: "name"
        },
        {
            type: "number",
            message: "ID number: ",
            name: "id"
        },
        {
            type: "input",
            message: "Email address: ",
            name: "email"
        },
        {
            type: "input",
            message: "GitHub username: ",
            name: "github"
        }
    ]).then(answer => {
        team.engineers.push(new Engineer(answer.name, answer.id, answer.email, answer.github));
        askIfMoreEmployees();
    })
};
function caseTrainee(){
    inquirer.prompt([
        {
            type: "input",
            message: "Name: ",
            name: "name"
        },
        {
            type: "number",
            message: "ID number: ",
            name: "id"
        },
        {
            type: "input",
            message: "Email address: ",
            name: "email"
        },
        {
            type: "input",
            message: "School: ",
            name: "school"
        }
    ]).then(answer => {
        team.Trainee.push(new Trainee(answer.name, answer.id, answer.email, answer.school));
        askIfMoreEmployees();
    })
};
function caseManager(){
    inquirer.prompt([
        {
            type: "input",
            message: "Name: ",
            name: "name"
        },
        {
            type: "number",
            message: "ID number: ",
            name: "id"
        },
        {
            type: "input",
            message: "Email address: ",
            name: "email"
        },
        {
            type: "number",
            message: "Office Number: ",
            name: "officenumber"
        }
    ]).then(answer => {
        team.managers.push(new Manager(answer.name, answer.id, answer.email, answer.officenumber));
        askIfMoreEmployees();
    })
};

