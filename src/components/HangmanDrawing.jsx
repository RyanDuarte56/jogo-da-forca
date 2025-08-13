export default function HangmanDrawing({ wrongGuesses }) {
  const bodyParts = [
    <circle key="0" cx="128" cy="70" r="20" fill="none" />,
    <line key="1" x1="128" y1="90" x2="128" y2="170" />,
    <line key="2" x1="128" y1="108" x2="95" y2="145" />,
    <line key="3" x1="128" y1="108" x2="161" y2="145" />,
    <line key="4" x1="128" y1="170" x2="95" y2="207" />,
    <line key="5" x1="128" y1="170" x2="161" y2="207" />,
  ];

  return (
    <div>
      <svg width="200" height="250" className="mx-auto my-10">
        <g stroke="black" strokeWidth="4">
          <line x1="20" y1="230" x2="80" y2="230" />
          <line x1="50" y1="230" x2="50" y2="20" />
          <line x1="48" y1="20" x2="130" y2="20" />
          <line x1="128" y1="20" x2="128" y2="50" />
          {bodyParts.slice(0, wrongGuesses)}
        </g>
      </svg>
    </div>
  );
}
