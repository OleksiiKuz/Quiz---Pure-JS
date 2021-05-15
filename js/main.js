const quizData = [
	{
		question: 'question 1',
		a: '1',
		b: '2',
		c: '3',
		d: '4',
		correct: 'a'
	},
	{
		question: 'question 2',
		a: '2.1',
		b: '2.2',
		c: '2.3',
		d: '2.4',
		correct: 'b'
	},
	{
		question: 'question 3',
		a: '3.1',
		b: '3.2',
		c: '3.3',
		d: '3.4',
		correct: 'c'
	},
	{
		question: 'question 4',
		a: '4.1',
		b: '4.2',
		c: '4.3',
		d: '4.4',
		correct: 'd'
	}
];

const quiz = document.getElementById('quiz');
const question = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submintBtn = document.getElementById('submit');
const asnwersEl = document.querySelectorAll('.answer');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
	deselectAnswers();

	const currentQuizData = quizData[currentQuiz];
	question.innerText = currentQuizData.question;
	a_text.innerText = currentQuizData.a;
	b_text.innerText = currentQuizData.b;
	c_text.innerText = currentQuizData.c;
	d_text.innerText = currentQuizData.d;
}

function getSelected() {
	let answer = undefined;

	asnwersEl.forEach((answerEl) => {
		if (answerEl.checked) {
			answer = answerEl.id;
		}
	})
	return answer;
}

function deselectAnswers() {
	asnwersEl.forEach((answerEl) => {
		answerEl.checked = false;
	})
}



submintBtn.addEventListener('click', () => {

	const answer = getSelected();
	if (answer) {

		if (answer === quizData[currentQuiz].correct) {
			score++;
		}
		currentQuiz++;

		if (currentQuiz < quizData.length) {
			loadQuiz();
		} else {
			quiz.innerHTML = `<h2>Finish your result ${score}/${quizData.length}</h2> <button onclick="location.reload()">Reload</button>`
		}
	}
})