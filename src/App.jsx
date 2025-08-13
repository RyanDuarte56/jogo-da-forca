import GameOverScreen from "./components/GameOverScreen";
import HangmanDrawing from "./components/HangmanDrawing";
import Keyboard from "./components/Keyboard";
import WordDisplay from "./components/WordDisplay";
import { words } from "./logic/words";
import { useEffect, useState } from "react";

const ERROR_LIMIT = 6;

export default function App() {
  const [hiddenWord, setHiddenWord] = useState(() => {
    const index = Math.floor(Math.random() * words.length);
    return words[index];
  });
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [gameStatus, setGameStatus] = useState("playing");

  const uniqueLetterCount = new Set(hiddenWord).size;

  function getButtonClass(letter) {
    if (!guessedLetters.includes(letter))
      return "bg-gray-300 hover:opacity-80 active:opacity-60";

    return hiddenWord.includes(letter) ? "bg-green-400" : "bg-red-400";
  }

  function onLetterClicked(letter) {
    if (gameStatus !== "playing") return;
    setGuessedLetters((prev) => [...prev, letter]);

    if (!hiddenWord.includes(letter)) setWrongGuesses((prev) => prev + 1);
  }

  function onResetClicked() {
    const index = Math.floor(Math.random() * words.length);
    setHiddenWord(words[index]);
    setGuessedLetters([]);
    setWrongGuesses(0);
    setGameStatus("playing");
  }

  useEffect(() => {
    if (wrongGuesses >= ERROR_LIMIT) setGameStatus("lost");
    else if (guessedLetters.length - wrongGuesses === uniqueLetterCount)
      setGameStatus("won");
  }, [guessedLetters, wrongGuesses, uniqueLetterCount]);

  return (
    <div className="m-0 p-0 box-border w-screen h-screen bg-gray-400 font-[Inter]">
      <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-10">Jogo da Forca</h1>
        <WordDisplay hiddenWord={hiddenWord} guessedLetters={guessedLetters} gameStatus={gameStatus} />
        <HangmanDrawing wrongGuesses={wrongGuesses} />
        <Keyboard
          onLetterClicked={onLetterClicked}
          getButtonClass={getButtonClass}
          guessedLetters={guessedLetters}
        />
        {gameStatus !== "playing" && (
          <GameOverScreen
            gameStatus={gameStatus}
            onResetClicked={onResetClicked}
          />
        )}
      </div>
    </div>
  );
}
