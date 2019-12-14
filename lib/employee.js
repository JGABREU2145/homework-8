class Employee {
    constructor(name, id, email, title) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = title
    }
    getName() {
        return name
    }
    getId() {
        return id
    }
    getEmail() {
        return email
    }
}

module.exports = Employee;