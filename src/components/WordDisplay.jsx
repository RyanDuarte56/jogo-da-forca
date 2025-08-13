export default function WordDisplay({
  hiddenWord,
  guessedLetters,
  gameStatus,
}) {
  return (
    <div>
      <p className="text-7xl flex justify-center gap-4">
        {hiddenWord.split("").map((letter, index) => (
          <span
            key={index}
            className={
              gameStatus === "lost" && !guessedLetters.includes(letter)
                ? "text-blue-500"
                : ""
            }
          >
            {guessedLetters.includes(letter) || gameStatus === "lost"
              ? letter
              : "_"}
          </span>
        ))}
      </p>
    </div>
  );
}
