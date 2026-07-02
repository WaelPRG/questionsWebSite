const question_box = document.querySelector(".question-box");
const submit_btn = document.querySelector(".submit-btn")
const input_place = document.querySelector(".input-place")

const MIN = -200;
const MAX = 200;

let firstNum = null;
let secondNum = null;

const random = () => {
    return Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;   
};

const quest = () => {
    firstNum = random();
    secondNum = random();
    return firstNum + " +  " + secondNum + " ="
}

const newQuestion = () => question_box.querySelector("h2").textContent = quest();

submit_btn.addEventListener("click", function () {
    if (firstNum + secondNum == input_place.value) {
        alert("إجابة صحيحة")
        newQuestion()
    }else {
        alert("إجابة خاطئة")
    }
    input_place.value = null
})
newQuestion()