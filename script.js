
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
    {
        question: "Which is a Java framework?",
        a: "React",
        b: "Spring Boot",
        c: "Angular",
        d: "Django",
        correct: "b",
    },
    {
        question: "Which SQL keyword is used to fetch data?",
        a: "SELECT",
        b: "FETCH",
        c: "GRAB",
        d: "PULL",
        correct: "a",
    },
    {
        question: "Which company developed Java?",
        a: "Microsoft",
        b: "Sun Microsystems",
        c: "Google",
        d: "Apple",
        correct: "b",
    },
    {
        question: "What does JDBC stand for?",
        a: "Java Database Connection",
        b: "Java Database Connectivity",
        c: "Java Data Connection",
        d: "Java Data Connectivity",
        correct: "b",
    },
    {
        question: "Which operator is used for string concatenation in Java?",
        a: "+",
        b: "-",
        c: "*",
        d: "/",
        correct: "a",
    },
    {
        question: "Which HTTP method is used to update data?",
        a: "GET",
        b: "POST",
        c: "PUT",
        d: "DELETE",
        correct: "c",
    },
    {
        question: "What does DOM stand for?",
        a: "Document Object Model",
        b: "Data Object Model",
        c: "Document Open Method",
        d: "Data Open Model",
        correct: "a",
    },
    {
        question: "Which symbol is used for comments in SQL?",
        a: "//",
        b: "#",
        c: "--",
        d: "/* */",
        correct: "c",
    },
    {
        question: "Which method is used to add an element to an ArrayList in Java?",
        a: "add()",
        b: "insert()",
        c: "push()",
        d: "append()",
        correct: "a",
    },
    {
        question: "Which tag is used for inserting a line break in HTML?",
        a: "<br>",
        b: "<lb>",
        c: "<break>",
        d: "<hr>",
        correct: "a",
    },
    // Additional 6 questions
    {
        question: "What is the default value of a boolean in Java?",
        a: "true",
        b: "false",
        c: "null",
        d: "0",
        correct: "b",
    },
    {
        question: "Which of the following is not a primitive data type in Java?",
        a: "int",
        b: "boolean",
        c: "String",
        d: "char",
        correct: "c",
    },
    {
        question: "What is the correct way to declare an array in Java?",
        a: "int[] arr;",
        b: "int arr[];",
        c: "Both a and b",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which of the following is a valid method signature in Java?",
        a: "public void method()",
        b: "void public method()",
        c: "public void method(int x, int y)",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "What does SQL stand for?",
        a: "Structured Query Language",
        b: "Simple Query Language",
        c: "Structured Question Language",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "Which of the following is used to make a class abstract in Java?",
        a: "abstract class",
        b: "class abstract",
        c: "class",
        d: "None of the above",
        correct: "a",
    },
    
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
    let answer;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
