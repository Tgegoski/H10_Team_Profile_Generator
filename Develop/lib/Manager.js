const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, office) {

        super (name, id, email);

        this.office = officeNumber;
        
    }

    getOffice() {
        return officeNumber;
    }

    getRole () {
        return Manager;
    }
}

module.exports = Manager;
