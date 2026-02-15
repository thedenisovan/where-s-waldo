import { useContext } from 'react';
import { GameContext } from '../App';

export default function EliminationIndicators() {
  const game = useContext(GameContext);

  return (
    <>
      {/* Elimination indicator for pirates level */}
      <div style={{ display: game.currentImage !== 'Pirates' ? 'none' : '' }}>
        <div className={`${!game.aliveCharacters[0] ? '' : 'hidden'}`}>
          <EliminatedPlayerCross right='13%' />
        </div>
        <div className={`${!game.aliveCharacters[1] ? '' : 'hidden'}`}>
          <EliminatedPlayerCross right='3%' />
        </div>
        <div className={`${!game.aliveCharacters[2] ? '' : 'hidden'}`}>
          <EliminatedPlayerCross right='22%' />
        </div>
      </div>

      {/* Elimination indicator for Airport level */}
      <div style={{ display: game.currentImage !== 'Airport' ? 'none' : '' }}>
        <div className={`${!game.aliveCharacters[1] ? '' : 'hidden'}`}>
          <EliminatedPlayerCross right='12%' />
        </div>
        <div className={`${!game.aliveCharacters[0] ? '' : 'hidden'}`}>
          <EliminatedPlayerCross right='7%' />
        </div>
        <div className={`${!game.aliveCharacters[2] ? '' : 'hidden'}`}>
          <EliminatedPlayerCross right='16.5%' />
        </div>
      </div>

      {/* Elimination indicator for Library level */}
      <div style={{ display: game.currentImage !== 'Library' ? 'none' : '' }}>
        <div className={`${!game.aliveCharacters[1] ? '' : 'hidden'}`}>
          <EliminatedPlayerCross right='12.5%' />
        </div>
        <div className={`${!game.aliveCharacters[2] ? '' : 'hidden'}`}>
          <EliminatedPlayerCross right='3.5%' />
        </div>
        <div className={`${!game.aliveCharacters[0] ? '' : 'hidden'}`}>
          <EliminatedPlayerCross right='21.5%' />
        </div>
      </div>
    </>
  );
}

function EliminatedPlayerCross({
  right,
  top = '-2%',
}: {
  right: string;
  top?: string;
}) {
  const game = useContext(GameContext);

  return (
    <div
      style={{ right: right, top: top }}
      className={`absolute z-2 ${!game.isGameOn ? 'blur-2xl' : ''}`}
    >
      <div className='rotate-45 absolute  w-1 h-24 bg-red-500'></div>
      <div className='rotate-135 absolute w-1 h-24 bg-red-500'></div>
    </div>
  );
}
