const persons = [
    new Person('Juan,', 'Perez'),
    new Person('Karla', 'Lara'),

];

function showPerson() {
    console.log("Showing person....");
    let texto = '';
    for (let person of persons) {
        console.log(person);
        texto = `<li>${person.name} ${person.lastName}</li>`;
    }

    document.getElementById('persons').innerHTML = texto;

}

function addPerson() {
    const form = document.forms['form'];
    const name = form['name'];
    const lastName = form['lastName'];
    const person = new Person(name.value, lastName.value);
    persons.push(person);
    showPerson();
}