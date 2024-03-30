const password = document.getElementById("password"),
      copy = document.getElementById("copyPass"),
      generatePassword = document.getElementById("generatePass"),
      length = 14;

      const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lowerCase = "abcdefghijklmnopqrstuvwxyz",
      number = "0123456789",
      symbol = "@#$%^&*()_+~|}{[]></-=",
      allchars = upperCase + lowerCase + number + symbol;


const genPassword = () => {

    let result = ''

    result += upperCase[Math.floor(Math.random() * upperCase.length)]
    result += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    result += number[Math.floor(Math.random() * number.length)]
    result += symbol[Math.floor(Math.random() * symbol.length)]

    for (let i = 0; i < length; i++) {
        result += allchars[Math.floor(Math.random() * allchars.length)]
    }

    password.value = result;
}

generatePassword.addEventListener("click", genPassword);


const copyPassword = () => {
    password.select()
    document.execCommand("copy")
    password.value = "Copiado ✅"
}

copy.addEventListener("click", copyPassword)