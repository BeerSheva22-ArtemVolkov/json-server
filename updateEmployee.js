const URL = 'http://localhost:3500/employees/124';
const employee = {
    "name": "Julia",
    "gender": "female",
    "department": "Management",
    "salary": 5000000,
    "birthYear": 1995
}
fetch(URL, {
    method: 'PUT',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(employee)
}).then(response => response.json()).then(data => console.log(data))
// в проекте дб 2 класса - реальный json сервер и фейковый