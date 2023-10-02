const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];
const a_text = document.getElementById('a-text')
const b_text = document.getElementById('b-text')
const c_text = document.getElementById('c-text')
const d_text = document.getElementById('d-text')
const answers = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz')
const questionEL = document.querySelector('.question-title')
const submitBtn = document.getElementById('submit')

  let currentQuiz = 0
  let score = 0

  showQuiz()
function showQuiz(){
    deSelectAnswers()
    questionEL.innerText=quizData[currentQuiz].question
    a_text.innerText = quizData[currentQuiz].a
    b_text.innerText = quizData[currentQuiz].b
    c_text.innerText = quizData[currentQuiz].c
    d_text.innerText = quizData[currentQuiz].d
   
    
}
function deSelectAnswers(){
    answers.forEach(answer => {
        answer.checked = false
    });
}
function getSelected(){
    let selectedAnswer

    answers.forEach(answer => {
        if(answer.checked){
            selectedAnswer = answer.id
        }
        
    });
    return selectedAnswer
}

           submitBtn.addEventListener('click', ()=>{
            const answerC = getSelected()
           
            console.log("getAnswer coming")
            if(answerC){
                if(answerC===quizData[currentQuiz].correct){
                        
                    score++
                    console.log(score)
                }
                currentQuiz++
                if(currentQuiz < answers.length){
                    showQuiz()
                }
                else{
                    quiz.innerHTML = `<h2>
                    your score is of ${score}/${answers.length}
                    </h2>`
                }
                
        }
           })
                
            
  


 