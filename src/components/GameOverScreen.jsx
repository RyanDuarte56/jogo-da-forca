export default function GameOverScreen({ gameStatus, onResetClicked }) {
  return (
    <div className="mt-10 space-y-3">
      <p className="text-3xl font-bold">Fim de Jogo</p>
      {gameStatus === "won" && (
        <p className="text-2xl font-bold">Você venceu!</p>
      )}
      {gameStatus === "lost" && (
        <p className="text-2xl font-bold">Você perdeu!</p>
      )}
      <button
        className="border rounded-md px-4 py-2 cursor-pointer text-lg bg-white hover:opacity-85 active:opacity-70"
        onClick={onResetClicked}
      >
        Reiniciar
      </button>
    </div>
  );
}
