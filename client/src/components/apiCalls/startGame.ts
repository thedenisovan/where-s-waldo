async function startGame(
  setAttemptId: (id: number) => void,
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  gameLevel: string,
) {
  e.preventDefault();

  try {
    const response = await fetch(`https://find-a-char.up.railway.app/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ levelName: gameLevel }),
    });

    if (!response.ok) throw new Error(`Response status: ${response.status}`);

    const result = await response.json();

    setAttemptId(result.attemptId);
  } catch (err) {
    console.error(err);
  }
}

export default startGame;
