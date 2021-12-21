// firstName: string;
// email: string;
// pwd: string;


const regBtn = document.querySelector('.register')


async function register() {

    const firstNameInput = await document.querySelector('.firstName')
    const emailInput = await document.querySelector('.email')
    const pwdInput = await document.querySelector('.pwd')

    const firstName = await firstNameInput.value
    const email = await emailInput.value
    const pwd = await pwdInput.value

    const data = {
        "firstName": firstName,
        "email": email,
        "pwd": pwd
    }

    URL = 'http://localhost:3000/api/user/register'


    fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(res => res.json())

}

regBtn.addEventListener('click', register)