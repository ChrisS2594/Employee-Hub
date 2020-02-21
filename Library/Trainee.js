const Employee = require("./Employee");
class Trainee extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email),
            this.school = school;

    }

    getSchool() {
        return this.school;
    }

    getPosition() {
        return "Trainee";
    }
}
module.exports = Trainee;
