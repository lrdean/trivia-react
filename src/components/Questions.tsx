import React from "react";

export const questions = [
  {
    question: "Where would you most likely eat a pig's head cheese?",
    id: 1,
    answers: ["Italy", "Japan", "Belgium", "France"],
    correctAnswer: "France",
  },
  {
    question: "In which country do they call a baked potato a 'jacket potato'?",
    id: 2,
    answers: ["United Kingdom", "Brazil", "Australia", "Ireland"],
    correctAnswer: "United Kingdom",
  },
  {
    question: "Which country does Fajitas originate from?",
    id: 3,
    answers: ["Japan", "Mexico", "Spain", "Argentina"],
    correctAnswer: "Mexico",
  },
  {
    question: "Which country has Kartoffelknoedel?",
    id: 4,
    answers: ["Japan", "Germany", "Switzerland", "Austria"],
    correctAnswer: "Germany",
  },
  {
    question: "Which country is Fogaza the cousin of Focaccia?",
    id: 5,
    answers: ["Empanada", "Fogaza", "Sushi", "Choripan"],
    correctAnswer: "Fogaza",
  },
  {
    question: "Where would you bite into a Bocadillo?",
    id: 6,
    answers: ["Portugal", "Mexico", "Spain", "Antarctica"],
    correctAnswer: "Spain",
  },
  {
    question: "Which state throws the best pizza parties with deep-dish?",
    id: 7,
    answers: ["Illinois", "Michigan", "New York", "Alaska"],
    correctAnswer: "Illinois",
  },
  {
    question: "What is the official state dessert of Kentucky?",
    id: 8,
    answers: ["Pepperoni Pizza", "Derby Pie", "Pecan Pie", "Chess Pie"],
    correctAnswer: "Derby Pie",
  },
  {
    question:
      "Which former U.S. president had a fascination with macaroni during his gourmet escapades in France?",
    id: 9,
    answers: [
      "Thomas Jefferson",
      "John Adams",
      "Abraham Lincoln",
      "James Madison",
    ],
    correctAnswer: "Thomas Jefferson",
  },
  {
    question:
      "Founded way back in 1905, what seafood delights does Young's company specialize in serving up?",
    id: 10,
    answers: ["Seafood", "Dairy products", "Poultry", "Electronics"],
    correctAnswer: "Seafood",
  },
  {
    question:
      "Where does the notorious food-poisoning bacteria 'salmonella' get its name?",
    id: 11,
    answers: [
      "Vet named David Salmon",
      "From the fish salmon",
      "From the Latin word for salt",
      "From a type of tree Salmo",
    ],
    correctAnswer: "Vet named David Salmon",
  },
  {
    question:
      "Elephant ears, beaver tails, and frying saucers all sound like wild nicknames--what tasty treat do they actually refer to?",
    id: 12,
    answers: ["Fried dough", "Elephant Tusks", "Pancakes", "Churros"],
    correctAnswer: "Fried dough",
  },
  {
    question:
      "When you crunch on a celery stick, which part of the plant is giving you the fresh bite?",
    id: 13,
    answers: ["Root", "Petiole", "Stem", "Leaf"],
    correctAnswer: "Stem",
  },
  {
    question: "At which hotel was the Waldorf Salad invented?",
    id: 14,
    answers: [
      "Waldorf Astoria Hotel in New York City",
      "Paris",
      "The Ritz-Carlton in Chicago",
      "McDonald's",
    ],
    correctAnswer: "Waldorf Astoria Hotel in New York City",
  },
  {
    question:
      "Which iconic cookie was born in the 1930s at Ruth Wakefield's Toll House Inn, sweetening our lives forever?",
    id: 15,
    answers: [
      "Peanut Butter Cookie",
      "Fortune Cookie",
      "Chocolate Chip Cookie",
      "Oatmeal Raisin Cookie",
    ],
    correctAnswer: "Chocolate Chip Cookie",
  },
  {
    question:
      "What zesty citrus fruit packs a punch of Vitamin C and helped sailors fend off scurvy?",
    id: 16,
    answers: ["Grapefruit", "Oranges", "Lemon", "Banana"],
    correctAnswer: "Oranges",
  },
  {
    question:
      "What fiery compound in chili peppers gives them that signature spicy kick?",
    id: 17,
    answers: ["Chlorophyll", "Capsaicin", "Capsicum", "Piperine"],
    correctAnswer: "Capsaicin",
  },
  {
    question:
      "Which sunny nation takes the top spot as the world's largest orange juice producer?",
    id: 18,
    answers: ["United States", "Brazil", "Spain", "Iceland"],
    correctAnswer: "Brazil",
  },
  {
    question:
      "What classic cocktail mixes lime juice, tequila, and triple sec into a party favorite?",
    id: 19,
    answers: [
      "Tequila Sunrise",
      "Daiquiri",
      "Margarita",
      "Chocolate Milkshake",
    ],
    correctAnswer: "Margarita",
  },
  {
    question:
      "What was the target of the largest food heist in history, involving over 3 million pounds stolen in Canada?",
    id: 20,
    answers: ["Bananas", "Cheese", "Maple Syrup", "Honey"],
    correctAnswer: "Maple Syrup",
  },
];
const Questions = () => {
  return (
    <div>
      <div className="main-nav">
        <h1>Food Trivia</h1>
        <p>Test your food knowledge!</p>
      </div>
      <div className="question-container">
        {questions.map((q) => (
          <div key={q.id} className="card">
            <h3>{q.question}</h3>
            <ul>
              {q.answers.map((answer, index) => (
                <li key={index}>{answer}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
