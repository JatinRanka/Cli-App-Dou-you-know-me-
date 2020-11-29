var readlineSync = require('readline-sync');
var score = 0;

function play(question, answer) {
	var userAnswer = readlineSync.question(question);

	if (userAnswer.toLowerCase() == answer.toLowerCase()) {
		console.log('Correct answer');
		score++;
	} else {
		console.log('Wrong answer. Correct answer is '+ answer);
	}
}

var userName = readlineSync.question('What is your name? ');
console.log('Hello ' + userName);

var questions = [
	{
		question: 'What is my age? ',
		answer: '20',
	},
	{
		question: 'Where do I live? ',
		answer: 'Chennai' ,
	},
	{
		question: 'Who is my favourite Criket player? ',
		answer: 'Suresh raina',
	},
	{
		question: 'What is my favourite food? ',
		answer: 'Pizza',
	}
];

for (let i=0; i<questions.length; i++){
	play(questions[i].question, questions[i].answer)
};

console.log("Your final score is: " + score)
