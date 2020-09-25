// console.log(document.getElementById("submit-btn"))

// let hasil = document.getElementsByTagName("h1")[0]
// // console.log(hasil)
// hasil.innerHTML = "kamu kurang"
// hasil.className = "botak"
// hasil.style.color = "black"

// let coba = document.getElementsByTagName("h2")
// for (let i = 0; i<coba.length; i++){
//     coba[i].style.color = "white"
// }

// let button = document.getElementById("submit-btn")

// button.addEventListener("click", function () {
//     console.log("keteken cuk")
// })
// console.log(button)

function generalQuestion () { 
let questions = [
    {
        question :'Apa yang diputar malah berdiri?',
        answer : 'Lipstik'
    },
    {
        question :'Apa bahasa Jepangnya, tidak ada uang?',
        answer : 'Sakurata takupusing'
    },
    {
        question :'Vitamin apa yang baru jadian?',
        answer : 'Vitamin Cie cie cie'
    },
    {
        question :'Kuli apa yang bikin hati seneng?',
        answer : 'Kulihat gebetan tersenyum padaku'
    },
    {
        question :'Artis yang ditunggu-tunggu di bulan Ramadan?',
        answer : 'Afgan Magrib'
    },

]

let randomIndex = Math.floor(Math.random() * 5)
let selectedQuestion = questions[randomIndex]
console.log(selectedQuestion)

let questionValue = document.getElementById("question")
questionValue.innerText = selectedQuestion.question

return selectedQuestion
}

let selectedQuestion = generalQuestion()



let tekanJawab = document.getElementById("check")

tekanJawab.addEventListener("click", function (){
    event.preventDefault()
    console.log("tekan")

    let answerBox = document.getElementById("answer")
    console.log(answerBox.value)
 
    if (answerBox.value.toLowerCase() === selectedQuestion.answer.toLowerCase()){
        alert('Jawaban anda BETUL!!!!')
    }else{
        alert('Anda salah mikir')
    }
})

let gantiSoal = document.getElementById("newQuestion")

gantiSoal.addEventListener("click", function (){
        selectedQuestion = generalQuestion()
})