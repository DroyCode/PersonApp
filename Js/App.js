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