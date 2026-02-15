import type { Attempt } from '../context/GameContext';

async function completeGame(
  attemptId: number | null,
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  name: string,
  setLeaderBoards: (attempts: Attempt[]) => void,
) {
  e.preventDefault();

  try {
    const response = await fetch(`http://localhost:8080/complete`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name, attemptId }),
    });

    if (!response.ok) throw new Error(`Response status: ${response.status}`);

    getRecords(setLeaderBoards);
  } catch (err) {
    console.log(err);
  }
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

    setLeaderBoards(data.safeRecords);
  } catch (err) {
    console.error(err);
  }
}

export default completeGame;
