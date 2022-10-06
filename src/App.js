import React, { useState, useEffect } from 'react';
import { QUESTIONS } from './questions';
import UserForm from './user';

export default function App() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showEndScreen, setEndScreen] = useState(false);
	const [showQuestions, setShowQuestions] = useState(false);
	const [ageDelta, setAgeDelta] = useState(0);
	const [user, setUser] = useState({});

	useEffect(() => {
		console.log(user);
	}, [user]);

	const handleAnswerOptionClick = (questionAgeDelta) => {
		setAgeDelta(ageDelta + questionAgeDelta);

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < QUESTIONS.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setEndScreen(true);
		}
	};

	return (
		<div className='app'>
			{!showQuestions ? ( <UserForm setUser={setUser} setShowQuestions={setShowQuestions}/> ) : (
			
			showEndScreen ? (
				<div className='score-section'>
					Your biological age is {Number.parseInt(user.age) + ageDelta}
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
							<button onClick={() => handleAnswerOptionClick(answerOption.ageDelta)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)
			)}
		</div>
	);
}
