class Employee {
    constructor(name, id, email, title, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = title;
        this.role = role
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getTitle() {
        return this.title
    }
    getRole() {
        return "Employee"
    }
}

module.exports = Employee;