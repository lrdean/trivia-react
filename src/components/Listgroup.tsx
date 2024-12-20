import { Fragment, useState } from "react";

function ListGroup() {
  const questions = [
    {
      question: "What is the capital of France?",
      answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
      correctAnswer: "Answer 2",
    },
    {
      question: "What is 2 + 2?",
      answers: ["1", "2", "3", "4"],
      correctAnswer: "4",
    },
    {
      question: "What color is the sky?",
      answers: ["Red", "Blue", "Green", "Yellow"],
      correctAnswer: "Blue",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleButtonClick = (buttonName: string, index: number) => {
    setSelectedAnswer(buttonName);
    setSelectedIndex(index);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedIndex(-1);
      setSelectedAnswer("");
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedIndex(-1);
      setSelectedAnswer("");
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <Fragment>
      <h1 style={{ textAlign: "center" }}>Welcome to my Trivia App!</h1>
      <h2 style={{ padding: "10px" }}>
        There are {questions.length} questions. Select your answer and then
        click the "Next" button.
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "10px",
        }}
      >
        <button
          className="btn btn-primary"
          onClick={() => console.log("Start Quiz clicked")}
        >
          Start Quiz
        </button>
      </div>

      <div>
        <h2
          style={{
            textAlign: "center",
            border: "2px solid #007bff",
            borderRadius: "8px",
            padding: "20px",
            marginTop: "20px",
            backgroundColor: "#f9f7f9",
          }}
        >
          {currentQuestion.question}
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          {currentQuestion.answers.map((item, index) => {
            let buttonClass = "btn-outline-primary";
            let buttonColor = "#f9f9f9";

            if (selectedIndex === index) {
              buttonClass = "btn-secondary";
              buttonColor =
                selectedAnswer === currentQuestion.correctAnswer
                  ? "#28a745"
                  : "#dc3545";
            }

            return (
              <button
                key={index}
                className={`btn ${buttonClass}`}
                style={{
                  padding: "10px 20px",
                  backgroundColor: buttonColor,
                  fontSize: "16px",
                  borderRadius: "5px",
                  color: selectedAnswer ? "white" : "black",
                }}
                onClick={() => handleButtonClick(item, index)}
              >
                {item}
              </button>
            );
          })}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <button
            className="btn btn-outline-primary"
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </button>
          <button
            className="btn btn-primary"
            onClick={handleNextQuestion}
            disabled={currentQuestionIndex === questions.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default ListGroup;
