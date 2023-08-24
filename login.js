console.log('object')
let nameInput = document.getElementById('name')
let emailInput = document.getElementById('email')
let passInput = document.getElementById('password')
let errordiv = document.getElementById('error')
let form = document.getElementById('action')
let contactUsButton = document.getElementById('button')
console.log(nameInput)
console.log(emailInput)
console.log(passInput)

let regName = /^[A-Za-z\s'-]+$/
let regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
let regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?!\s).{8,}$/
let a = 'fdfdfdsAA'
console.log(regEmail.test('anasahmed555g@gmail.com'))
// console.log(a.match(rePassword))
contactUsButton.addEventListener('click', (e) => {
  errordiv.innerHTML = ''
  if (
    !regName.test(nameInput.value) ||
    !regEmail.test(emailInput.value) ||
    !regPassword.test(passInput.value)
  ) {
    e.preventDefault()
  }
  if (!regName.test(nameInput.value)) {
    errordiv.innerHTML += 'Enter valid name '
  } else if (!regEmail.test(emailInput.value)) {
    errordiv.innerHTML += 'Enter valid email '
  } else if (!regPassword.test(passInput.value)) {
    errordiv.innerHTML += 'Enter valid password '
  }
})
