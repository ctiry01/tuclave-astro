export const generatePassword = (length: number, chars: string) => {
    let newPass = '';

    let charsType = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.;|"#{}[]¿?!¡'

    if (chars === 'lettersAndNumbers') {
        charsType = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    }

    if (chars === 'letters') {
        charsType = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    }

    if (chars === 'numbers') {
        charsType = '0123456789'
    }

    for (let i = 0; i < length; i++) {
        newPass += charsType.charAt(Math.floor(Math.random() * charsType.length));
    }

    return newPass;
}

export const calculatePasswordSecureLevel = (password: string) => {

    let res = (password.length * 100) / 24;

    //REGEX for  only numbers
    if (/^[0-9]+$/.test(password)) {
        res -= res * 0.40
    }

    //REGEX for only letters
    if (/^[a-zA-Z]+$/.test(password)) {
        res -= res * 0.30
    }

    //REGEX for only letters and numbers
    if (/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/.test(password)) {
        res -= res * 0.10
    }

    return res.toFixed(0)
}