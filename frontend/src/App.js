import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { QUESTIONS } from './questions';
import UserForm from './user';

export default function App() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showEndScreen, setEndScreen] = useState(false);
	const [showQuestions, setShowQuestions] = useState(false);
	const [ageData, setAgeData] = useState([]);
	const [user, setUser] = useState({});
	const risen_key = (new URLSearchParams(window.location.search)).get("risen_key");
	useEffect(() => {
		console.log(user);
	}, [user]);
	
	const updateAgeData = (question_response) => {
		setAgeData([...ageData,question_response]);
	}

	const sendUserData = (questions) => {								
		axios.post("https://backend-production-5b2e.up.railway.app/age-data", {
		  "verification_key": risen_key,
		  "question_responses": questions,
		  "first_name": user.username,
		  "age": user.age,
		}).then(e => {
			console.log(e);	
		});
	}

	const handleAnswerOptionClick = (questionResponse) => {
		const question = {
			question: QUESTIONS[currentQuestion].questionText,
			answer: questionResponse.answerText,
			ageDelta: questionResponse.ageDelta
		}
		updateAgeData(question);
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < QUESTIONS.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			sendUserData(ageData);
			setEndScreen(true);
		}
	};

	return (
		<div className='app' >
			{!showQuestions ? ( <UserForm setUser={setUser} setShowQuestions={setShowQuestions}/> ) : (	
			showEndScreen ? (
				<div className='score-section'>
					Your results have been shared with your health coach.
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
							<button onClick={() => handleAnswerOptionClick(answerOption)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)
			)}
		</div>
	);
}
