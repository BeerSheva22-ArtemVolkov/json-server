async function login(loginData) {
    const response = await fetch('http://localhost:3500/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
    console.log('response status: ', response.status);
    const data = await response.json();
    console.log('received data: ', data);
    const payloadJson = atob(data.accessToken.split('.')[1])
    userData = JSON.parse(payloadJson);
    const email = userData.email;
    const role = userData.sub;
    console.log('user Data', `email: ${email}, role: ${role}`);
}

login({email: 'user@yandex.ru', password: 'artem1234'})
// login({email: 'admin@yandex.ru', password: 'admin1234'})
// login({email: 'odmin@yandex.ru', password: 'admin1234'})

