const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        
        super (name, id, email);

        this.gitHub = gitHubUserName;
        
    }

    getGetHub() {
        return gitHubUserName;
    }
    
    getRole () {
        return Engineer;
    }

}

module.exports = Engineer;
