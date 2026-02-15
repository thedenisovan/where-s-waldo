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
          <EliminatedPlayerCross right='52%' top='25%' />
        </div>
        <div className={`${!game.aliveCharacters[1] ? '' : 'hidden'}`}>
          <EliminatedPlayerCross right='3%' />
          <EliminatedPlayerCross right='19%' top='32%' />
        </div>
        <div className={`${!game.aliveCharacters[2] ? '' : 'hidden'}`}>
          <EliminatedPlayerCross right='22%' />
          <EliminatedPlayerCross right='80%' top='35%' />
        </div>
      </div>

      {/* Elimination indicator for Airport level */}
      <div style={{ display: game.currentImage !== 'Airport' ? 'none' : '' }}>
        <div className={`${!game.aliveCharacters[1] ? '' : 'hidden'}`}>
          <EliminatedPlayerCross right='12%' />
          <EliminatedPlayerCross right='83%' top='58%' />
        </div>
        <div className={`${!game.aliveCharacters[0] ? '' : 'hidden'}`}>
          <EliminatedPlayerCross right='7%' />
          <EliminatedPlayerCross right='29%' top='27%' />
        </div>
        <div className={`${!game.aliveCharacters[2] ? '' : 'hidden'}`}>
          <EliminatedPlayerCross right='16.5%' />
          <EliminatedPlayerCross right='95.5%' top='5%' />
        </div>
      </div>

      {/* Elimination indicator for Library level */}
      <div style={{ display: game.currentImage !== 'Library' ? 'none' : '' }}>
        <div className={`${!game.aliveCharacters[1] ? '' : 'hidden'}`}>
          <EliminatedPlayerCross right='12.5%' />
          <EliminatedPlayerCross right='74%' top='51%' />
        </div>
        <div className={`${!game.aliveCharacters[2] ? '' : 'hidden'}`}>
          <EliminatedPlayerCross right='3.5%' />
          <EliminatedPlayerCross right='4%' top='18%' />
        </div>
        <div className={`${!game.aliveCharacters[0] ? '' : 'hidden'}`}>
          <EliminatedPlayerCross right='21.5%' />
          <EliminatedPlayerCross right='60.5%' top='-3%' />
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
