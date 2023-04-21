import { useSelector } from "react-redux"
import { getGameState } from "@/redux/slices/game.slice"

const Score = () => {
  const gameState = useSelector(getGameState);

  return (
    <div className="flex flex-col items-center justify-center">
      <h2>Level {gameState.level.current_level}</h2>
      <div className="radial-progress text-green-700 mt-5" style={{"--value": gameState.level.percent_passed}}>{gameState.level.percent_passed}%</div>
    </div>
  )
}

export default Score