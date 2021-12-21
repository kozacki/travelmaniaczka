const logBtn = document.querySelector('.zaloguj')
const logStatusInfo = document.querySelector('.status')
const errorParagraf = document.querySelector('.errorParagraf')
const emailInput = document.querySelector('.email')
const pwdInput = document.querySelector('.pwd')


async function login() {
    const URL = 'http://localhost:3000/api/auth/login'
    const email = await emailInput.value
    const pwd = await pwdInput.value
    const data = {
        email,
        pwd
    }

    if (!emailInput === '' && !pwdInput === '') {
        fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(res => res.json())
            .then(() => {
                logStatusInfo.value = 'Wyloguj'
            })
            .catch(err => console.error(err))

    } else {
        errorParagraf.textContent = 'Błędne dane logowania'
    }


}
// login()
// logStatusInfo.addEventListener('click', logout)
logBtn.addEventListener('click', login)
// logStatus.addEventListener('click' ,logout)