class Person {
    setPerson(id, name) {
        this.id = id;
        this.name = name;
    }
}
getPerson() {
    console.log("ID: " + id)
    console.log("Name: " + name)
}



let obj = new Person()
obj.setPerson(101, "Ashil")
obj.getPerson()