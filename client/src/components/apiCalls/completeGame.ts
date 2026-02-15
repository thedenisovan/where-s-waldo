import type { Attempt } from '../context/GameContext';

async function completeGame(
  attemptId: number | null,
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  name: string,
) {
  e.preventDefault();

  const response = await fetch(`http://localhost:8080/complete`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: name, attemptId }),
  });

  if (!response.ok) throw new Error(`Response status: ${response.status}`);

  const result = await response.json();

  console.log(result);
}

export async function getRecords(
  setLeaderBoards: (attempts: Attempt[]) => void,
) {
  try {
    const response = await fetch('http://localhost:8080/complete');

    if (!response.ok) {
      throw new Error(`Status: ${response.status}`);
    }

    const data = await response.json();

    console.log(data.safeRecords);
    setLeaderBoards(data.safeRecords);
  } catch (err) {
    console.error(err);
  }
}

export default completeGame;
