import {Fragment, useState} from "react";
import App from "./App";
import { questions } from "./components/Questions";

/*function Nav()*/ 
const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
const [selectedIndex, setSelectedIndex] = useState(-1);
const [selectedAnswer, setSelectedAnswer] = useState("");

export function handleButtonClick(answer: string, index: number)  {
    setSelectedAnswer(answer);
    setSelectedIndex(index);
    setIsAnswered(true);

    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

export function handleNextQuestion(answer: string, index: number)  {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedIndex(-1);
      setSelectedAnswer("");
      setIsAnswered(false);
    }
  };

export function handlePreviousQuestion(answer: string, index: number)  {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedIndex(-1);
      setSelectedAnswer("");
      setIsAnswered(false);
    }
  } */
  export default <Nav></Nav>;