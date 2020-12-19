const inputuser = document.querySelector("input[name=user]")
const inputpassword = document.querySelector("input[name=password]")

const diverror = document.querySelector('#diverroruser')
const diverrorpassword = document.querySelector('#diverrorpassword')

//  Para simular uma suposta requesição do nome e senha do usuário vindo banco de dados do
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

    // if (inputuser.value === name & inputpassword.value === password) console.log('sdsdsd')

}
validatelogin()
    // console.log('dsds')