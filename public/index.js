const inputuser = document.querySelector("input[name=user]")
const inputpassword = document.querySelector("input[name=password]")

const buttonsubmit = document.querySelector("input[type=submit]")

const divinvalid = document.querySelector(".invalid")
const diverror = document.querySelector('#diverroruser')
const diverrorpassword = document.querySelector('#diverrorpassword')

//  Para simular uma suposta requesição do nome e senha do usuário vindo banco de dados 
const nameu = 'Fulano'
const password = '12345'



function validatelogin() {
    inputuser.addEventListener('input', e => {
        const value = e.target.value
        if (value.length < 5) diverror.style.display = 'block'
        else diverror.style.display = 'none'

    })

    inputpassword.addEventListener('input', e => {
        const value = e.target.value
        if (value.length < 5) diverrorpassword.style.display = 'block'
        else diverrorpassword.style.display = 'none'
    })


}
validatelogin()
buttonsubmit.addEventListener('click', (e) => {
    const validate = inputuser.value != name & inputpassword.value != password

    if (validate) {
        e.preventDefault()
        divinvalid.style.display = 'block'
    }
})