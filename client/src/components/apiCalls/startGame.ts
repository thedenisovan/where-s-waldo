async function startGame(
  setAttemptId: (id: number) => void,
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  gameLevel: string,
) {
  e.preventDefault();

  const response = await fetch('http://localhost:8080/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ levelName: gameLevel }),
  });

  if (!response.ok) throw new Error(`Response status: ${response.status}`);

  const result = await response.json();

  setAttemptId(result.attemptId);
}

export default startGame;
