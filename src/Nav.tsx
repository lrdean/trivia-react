import React from "react";
import App from "./App";
import { questions } from "./components/Questions";

/*function Nav()*/ 

export function handleButtonClick = (answer: string, index: number) => {
    setSelectedAnswer(answer);
    setSelectedIndex(index);
    setIsAnswered(true);

    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

export function handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedIndex(-1);
      setSelectedAnswer("");
      setIsAnswered(false);
    }
  };

export function handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedIndex(-1);
      setSelectedAnswer("");
      setIsAnswered(false);
    }
  } */
export default Nav;