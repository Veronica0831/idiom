let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft;

const startBtn = document.getElementById('startBtn');
const quizContainer = document.getElementById('quizContainer');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const feedbackElement = document.getElementById('feedback');
const timeElement = document.getElementById('time');
const scoreElement = document.getElementById('score');

startBtn.addEventListener('click', startQuiz);

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startQuiz() {
    // 隨機打亂題目順序
    currentQuestions = shuffleArray([...idioms]);
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.textContent = score;
    startBtn.style.display = 'none';
    quizContainer.style.display = 'block';
    feedbackElement.style.display = 'block';
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        endQuiz();
        return;
    }

    const question = currentQuestions[currentQuestionIndex];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';
    feedbackElement.textContent = '';

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option';
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(index));
        optionsElement.appendChild(button);
    });

    startTimer();
}

function startTimer() {
    timeLeft = 15;
    timeElement.textContent = timeLeft;
    
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        timeElement.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleTimeout();
        }
    }, 1000);
}

function checkAnswer(selectedIndex) {
    clearInterval(timer);
    const question = currentQuestions[currentQuestionIndex];
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.add('disabled'));

    if (selectedIndex === question.correctAnswer) {
        score++;
        scoreElement.textContent = score;
        feedbackElement.textContent = '答對了！' + question.explanation;
        feedbackElement.style.color = '#2ecc71';
    } else {
        feedbackElement.textContent = '答錯了。正確答案是：' + 
            question.options[question.correctAnswer] + '\n' + question.explanation;
        feedbackElement.style.color = '#e74c3c';
    }

    setTimeout(() => {
        currentQuestionIndex++;
        showQuestion();
    }, 3000);
}

function handleTimeout() {
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.add('disabled'));
    
    const question = currentQuestions[currentQuestionIndex];
    feedbackElement.textContent = '時間到！正確答案是：' + 
        question.options[question.correctAnswer] + '\n' + question.explanation;
    feedbackElement.style.color = '#e74c3c';

    setTimeout(() => {
        currentQuestionIndex++;
        showQuestion();
    }, 3000);
}

function endQuiz() {
    quizContainer.style.display = 'none';
    startBtn.style.display = 'block';
    startBtn.textContent = '重新開始';
    feedbackElement.textContent = `測驗結束！你的得分是：${score}/${currentQuestions.length}`;
    feedbackElement.style.display = 'block';
}
