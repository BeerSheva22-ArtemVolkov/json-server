const URL = 'http://localhost:3500/employees';
const employee = {
    "name": "Artem",
    "gender": "male",
    "department": "Development",
    "salary": 50000,
    "birthYear": 1996,
    "userId": "admin"
}
fetch(URL, {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAeWFuZGV4LnJ1IiwiaWF0IjoxNjg4MDIyNjk1LCJleHAiOjE2ODgwMjYyOTUsInN1YiI6InVzZXIifQ.0L4z9YX63e6fTQ3XQR-mHTneKHwrEA_7q_o_Ys2FBKQ"
    },
    body: JSON.stringify(employee)
}).then(response => response.json()).then(data => console.log(data))