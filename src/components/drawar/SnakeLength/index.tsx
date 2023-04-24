import { useSelector } from "react-redux"
import { getGameState } from "@/redux/slices/game.slice"

const SnakeLength = () => {
  const gameState = useSelector(getGameState);

  return (
    <div className="flex flex-col items-center justify-center my-1">
      <h2 className="text-2xl text-bold">Snake Length</h2>
      <h4 className="text-xl text-base-700">{gameState.score}</h4>
    </div>
  )
}

export default SnakeLength