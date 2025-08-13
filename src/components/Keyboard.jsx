export default function Keyboard({
  onLetterClicked,
  getButtonClass,
  guessedLetters,
}) {
  const keyboard = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

  return (
    <div className="space-y-2">
      {keyboard.map((row, index) => (
        <p key={index} className="space-x-3">
          {row.split("").map((letter) => (
            <button
              key={letter}
              className={`border rounded-md p-3 cursor-pointer text-2xl ${getButtonClass(
                letter
              )} disabled:opacity-50 disabled:cursor-not-allowed`}
              onClick={() => onLetterClicked(letter)}
              disabled={guessedLetters.includes(letter)}
            >
              {letter}
            </button>
          ))}
        </p>
      ))}
    </div>
  );
}
