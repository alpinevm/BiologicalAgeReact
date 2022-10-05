import React, { useState, useEffect } from 'react';
import { QUESTIONS } from './questions';
import MyForm from './user';

export default function App() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [showQuestions, setShowQuestions] = useState(false);
	const [score, setScore] = useState(0);
	const [user, setUser] = useState({});

	useEffect(() => {
		console.log(user);
	}, [user]);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < QUESTIONS.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	return (
		<div className='app'>
			{!showQuestions ? ( <MyForm setUser={setUser} setShowQuestions={setShowQuestions}/> ) : (
			
			showScore ? (
				<div className='score-section'>
					You scored {score} out of {QUESTIONS.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}/{QUESTIONS.length}</span>
						</div>
						<div className='question-text'>{QUESTIONS[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{QUESTIONS[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)
			)}
		</div>
	);
}
