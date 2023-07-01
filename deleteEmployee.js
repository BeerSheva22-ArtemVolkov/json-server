const URL = 'http://localhost:3500/employees/125';

fetch(URL, {
    method: 'DELETE',
    headers: {"Content-Type": "application/json"},
}).then(response => response.json()).then(data => console.log(data))
// в проекте дб 2 класса - реальный json сервер и фейковый