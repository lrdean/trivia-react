import { Fragment, useState } from "react";
import { questions } from "./components/Questions"; // Import questions correctly
import Nav from "./Nav";

function App() {
  const [quizStarted, setQuizStarted] = useState(false); // Track whether the quiz has started
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Current question index
  const [selectedIndex, setSelectedIndex] = useState(-1); // Track selected answer index
  const [selectedAnswer, setSelectedAnswer] = useState(""); // Track selected answer
  const [isAnswered, setIsAnswered] = useState(false); // Whether the question has been answered
  const [score, setScore] = useState<number>(0); // Track score

  const handleButtonClick = (buttonName: string, index: number) => {
    setSelectedAnswer(buttonName);
    setSelectedIndex(index);
    setIsAnswered(true);
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

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <Fragment>
      {!quizStarted ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            backgroundColor: "palegreen",
          }}
        >
          <h1>Welcome to my Food Trivia App!</h1>
          <h2
            style={{
              textAlign: "center",
              maxWidth: "600px",
              margin: "20px",
              backgroundColor: "lightorange",
            }}
          >
            There are {questions.length} questions. Test your knowledge of food
            trivia and have fun!
          </h2>
          <button
            className="btn btn-primary"
            style={{
              padding: "10px 20px",
              fontSize: "18px",
              borderRadius: "8px",
              backgroundColor: "#FFE4B5",
            }}
            onClick={startQuiz}
          >
            Start Quiz
          </button>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          {/* Question Card */}
          <div
            style={{
              width: "80%",
              maxWidth: "800px",
              border: "2px solid #007bff",
              borderRadius: "12px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              marginBottom: "20px",
              backgroundColor: "#FFE4B5",
            }}
          >
            <h2
              style={{
                textAlign: "center",
                color: "#007bff",
                marginBottom: "20px",
              }}
            >
              <h3 style={{ alignItems: "right" }}>
                Question: {currentQuestion.id} of {questions.length}
              </h3>
              {currentQuestion.question}
            </h2>
          </div>

          {/* Answers as Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              width: "80%",
              maxWidth: "800px",
            }}
          >
            {currentQuestion.answers.map((item, index) => {
              const isCorrect =
                isAnswered && item === currentQuestion.correctAnswer;
              const isIncorrect =
                isAnswered && selectedIndex === index && !isCorrect;

              return (
                <div
                  key={index}
                  style={{
                    border: "2px solid",
                    borderRadius: "12px",
                    padding: "15px",
                    textAlign: "center",
                    cursor: "pointer",
                    backgroundColor: isCorrect
                      ? "#28a745" // Green for correct
                      : isIncorrect
                      ? "#dc3545" // Red for incorrect
                      : "#ffffff", // Default white
                    borderColor: isCorrect
                      ? "#28a745"
                      : isIncorrect
                      ? "#dc3545"
                      : "#007bff",
                    color: isAnswered ? "#ffffff" : "#000000",
                    boxShadow: isAnswered
                      ? "0 4px 8px rgba(0, 0, 0, 0.2)"
                      : "0 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                  onClick={() => handleButtonClick(item, index)}
                >
                  {item}
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "80%",
              maxWidth: "800px",
              marginTop: "20px",
            }}
          >
            <button
              className="btn btn-outline-primary"
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                borderRadius: "8px",
              }}
            >
              Previous
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={handleNextQuestion}
              disabled={currentQuestionIndex === questions.length - 1}
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                borderRadius: "8px",
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default App;
