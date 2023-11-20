import React, { useEffect, useState } from "react";

function App() {

  // variables
  const [mat, setMat] = useState(['', '', '', '', '', '', '', '', '']);
  const [ableToClick, setAbleToClick] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1]);
  const [winnerBlocks, setWinnerBlock] = useState([null, null, null]);
  const [mark, setMark] = useState('X');
  const [winSymbol, setWinSymbol] = useState('');
  const [sumable, setSumAble] = useState(100);
  const [X, setX] = useState(0)
  const [Y, setY] = useState(0)

  const setAbilityToClick = (index) => {
    if (mark === 'X') {
      setMat(prevState => {
        const temp = [...prevState];
        temp[index] = 'X';
        return temp;
      })
      setMark('O')
    }
    if (mark === 'O') {
      setMat(prevState => {
        const temp = [...prevState];
        temp[index] = 'O';
        return temp;
      })
      setMark('X')
    }
    setAbleToClick(prevState => {
      const temp = [...prevState];
      temp[index] = 0;
      return temp;
    });
  };

  useEffect(() => {
    if (mat[0].length === 1 && mat[0] === mat[1] && mat[1] === mat[2]) {
      mat[0] === 'X' ? setX(prev => prev + 1) : setY(prev => prev + 1)
      setWinSymbol(mat[0])
      setWinnerBlock([0, 1, 2])
      setAbleToClick([0, 0, 0, 0, 0, 0, 0, 0, 0])
    } else if (mat[3].length === 1 && mat[3] === mat[4] && mat[4] === mat[5]) {
      mat[3] === 'X' ? setX(prev => prev + 1) : setY(prev => prev + 1)
      setWinSymbol(mat[3])
      setWinnerBlock([3, 4, 5])
      setAbleToClick([0, 0, 0, 0, 0, 0, 0, 0, 0])
    } else if (mat[6].length === 1 && mat[6] === mat[7] && mat[7] === mat[8]) {
      mat[6] === 'X' ? setX(prev => prev + 1) : setY(prev => prev + 1)
      setWinSymbol(mat[6])
      setWinnerBlock([6, 7, 8])
      setAbleToClick([0, 0, 0, 0, 0, 0, 0, 0, 0])
    } else if (mat[0].length === 1 && mat[0] === mat[3] && mat[3] === mat[6]) {
      mat[0] === 'X' ? setX(prev => prev + 1) : setY(prev => prev + 1)
      setWinSymbol(mat[0])
      setWinnerBlock([0, 3, 6])
      setAbleToClick([0, 0, 0, 0, 0, 0, 0, 0, 0])
    } else if (mat[1].length === 1 && mat[1] === mat[4] && mat[4] === mat[7]) {
      mat[1] === 'X' ? setX(prev => prev + 1) : setY(prev => prev + 1)
      setWinSymbol(mat[1])
      setWinnerBlock([1, 4, 7])
      setAbleToClick([0, 0, 0, 0, 0, 0, 0, 0, 0])
    } else if (mat[2].length === 1 && mat[2] === mat[5] && mat[5] === mat[8]) {
      mat[2] === 'X' ? setX(prev => prev + 1) : setY(prev => prev + 1)
      setWinSymbol(mat[2])
      setWinnerBlock([2, 5, 8])
      setAbleToClick([0, 0, 0, 0, 0, 0, 0, 0, 0])
    } else if (mat[1].length === 1 && mat[1] === mat[4] && mat[4] === mat[7]) {
      mat[1] === 'X' ? setX(prev => prev + 1) : setY(prev => prev + 1)
      setWinSymbol(mat[1])
      setWinnerBlock([1, 4, 7])
      setAbleToClick([0, 0, 0, 0, 0, 0, 0, 0, 0])
    } else if (mat[0].length === 1 && mat[0] === mat[4] && mat[4] === mat[8]) {
      mat[0] === 'X' ? setX(prev => prev + 1) : setY(prev => prev + 1)
      setWinSymbol(mat[0])
      setWinnerBlock([0, 4, 8])
      setAbleToClick([0, 0, 0, 0, 0, 0, 0, 0, 0])
    } else if (mat[2].length === 1 && mat[2] === mat[4] && mat[4] === mat[6]) {
      mat[2] === 'X' ? setX(prev => prev + 1) : setY(prev => prev + 1)
      setWinSymbol(mat[2])
      setWinnerBlock([2, 4, 6])
      setAbleToClick([0, 0, 0, 0, 0, 0, 0, 0, 0])
    }
  }, [mat]);

  useEffect(() => {
    if (sumable === 1 || winSymbol.length === 1) {
      setTimeout(() => {
        setMat(['', '', '', '', '', '', '', '', '']);
        setAbleToClick([1, 1, 1, 1, 1, 1, 1, 1, 1]);
        setWinnerBlock([null, null, null]);
        setMark('X');
        setWinSymbol('');
        setSumAble(100);
      }, 3000);
    }
  }, [sumable, winSymbol]);

  const sum = () => {
    const sumarray = ableToClick.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    setSumAble(sumarray)
  }

  const reset = () => {
    setTimeout(() => {
      setMat(['', '', '', '', '', '', '', '', '']);
      setAbleToClick([1, 1, 1, 1, 1, 1, 1, 1, 1]);
      setWinnerBlock([null, null, null]);
      setMark('X');
      setWinSymbol('');
      setSumAble(100);
      setX(0)
      setY(0)
    }, 1000);
  }

  const restart =()=>{
    setTimeout(() => {
      setMat(['', '', '', '', '', '', '', '', '']);
      setAbleToClick([1, 1, 1, 1, 1, 1, 1, 1, 1]);
      setWinnerBlock([null, null, null]);
      setMark('X');
      setWinSymbol('');
      setSumAble(100);
    }, 1000);
  }

  return (
    <div className="flex justify-center flex-col gap-3 items-center h-screen w-screen">
      <p className=" mb-4 text-[30px] font-bold text-white">TIC-TAC_TOE</p>
      <div className="flex text-[30px] text-white w-60 justify-between">
        <p className="px-2">X : {X}</p>
        <p className="px-2">O : {Y}</p>
      </div>
      <div className="w-60 h-60 flex flex-wrap gap-5">
        {mat.map((block, index) => {
          if (ableToClick[index] === 1) {
            return <div
              key={index}
              onClick={() => [setAbilityToClick(index), sum()]}
              className='h-16 w-16 flex justify-center items-center text-[50px] bg-white rounded-2xl hover:cursor-pointer'
            >
              {block}
            </div>
          }
          else {
            if (sumable === 1) {
              return <div
                key={index}
                className='h-16 w-16 flex justify-center items-center text-[50px] bg-red-600 rounded-2xl'
              >
                {block}
              </div>
            }
            if (!winnerBlocks.includes(index)) {
              return <div
                key={index}
                className='h-16 w-16 flex justify-center items-center text-[50px] bg-white rounded-2xl'
              >
                {block}
              </div>
            } else {
              return <div
                key={index}
                className='h-16 w-16 flex justify-center items-center text-[50px] bg-green-500 rounded-2xl'
              >
                {block}
              </div>
            }
          }
        })}
      </div>
      <div className="flex gap-3">
        <button onClick={() => [restart()]} className="text-[30px] p-3 bg-white text-purple-600 rounded-2xl">
          RESTART
        </button>
        <button onClick={() => [reset()]} className="text-[30px] p-3 bg-white text-purple-600 rounded-2xl">
          RESET
        </button>
      </div>
      {
        winSymbol.length === 1 && <p className="text-[50px] text-white">Winner is {winSymbol}</p>
      }
      {
        sumable === 1 && <p className="text-[50px] text-white">Match is Draw</p>
      }
    </div>
  );
}

export default App;
