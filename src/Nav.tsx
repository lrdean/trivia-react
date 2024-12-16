import { Fragment, useState } from "react";
import App from "./App";
import { questions } from "./components/Questions";

function Nav() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState<number>(0);

  const handleButtonClick = (answer: string, index: number) => {
    setSelectedAnswer(answer);
    setSelectedIndex(index);
    setIsAnswered(true);

    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedIndex(-1);
      setSelectedAnswer("");
      setIsAnswered(false);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedIndex(-1);
      setSelectedAnswer("");
      setIsAnswered(false);
    }
  };

  return (
    <Fragment>
      <h1>Navigation Component</h1>
      {/* Example rendering */}
      <p>Current Question Index: {currentQuestionIndex}</p>
      <p>Selected Answer: {selectedAnswer}</p>
      <p>Score: {score}</p>
      <button
        onClick={handlePreviousQuestion}
        disabled={currentQuestionIndex === 0}
      >
        Previous
      </button>
      <button
        onClick={handleNextQuestion}
        disabled={currentQuestionIndex === questions.length - 1}
      >
        Next
      </button>
    </Fragment>
  );
}

export default Nav;
