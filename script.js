const arrAlSm = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ]
const arrAlCa = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
const arrNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const arrSi = ["!", "$", "^", "#", "&", "*", "@", "~"]


let inpText = document.querySelector(".inp-text")
let inpCheck = document.querySelector(".inp-check")
let buttonPass = document.getElementById("but")
let buttonCopy = document.getElementById("copy")


let num;

inpCheck.onchange = () => {
    if (inpCheck.checked) {
        inpText.type = "text"
    } else {
        inpText.type = "password"
    }
}

function App() {
    buttonPass.onclick = () => {
        num = Math.floor(Math.random() * arrNum.length) + 5
        if (inpText.value === "") {
            Create()
        } else {
            inpText.value = ""
            Create()
        }
    }
}
App()


function Create() {
    for (let i = 0; i < num; i++) {
        let randomOne = arrAlSm[Math.floor(Math.random() * arrAlSm.length)]
        let randomTow = arrAlCa[Math.floor(Math.random() * arrAlCa.length)]
        let randomThree = arrNum[Math.floor(Math.random() * arrNum.length)]
        let randomFour = arrSi[Math.floor(Math.random() * arrSi.length)]

        let a = [randomOne, randomTow, randomThree, randomFour]
        let eleRandom = a[Math.floor(Math.random() * a.length)]
        inpText.value += eleRandom
    }

}


buttonCopy.onclick = () => {
    if (inpText.value != "") {
        inpText.select()
        navigator.clipboard.writeText(inpText.value);
    }
}