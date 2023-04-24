// lib
import { useDispatch, useSelector } from "react-redux"
import type { IGame } from "@/redux/slices/game.slice"
import { getGameState, setSnakeColor, setFieldColor } from "@/redux/slices/game.slice"
import {toast} from "react-toastify"

const Snake = () => {
    const gameState: IGame = useSelector(getGameState);
    const dispatch = useDispatch();

    // states

    enum Feature {
        row,
        col
    }

    const updateSnakeColor = (e: any) => {
        e.preventDefault();
        if(gameState.colors.field === e.target.value) {
            toast.error("Snake and field cannot have same colours");
        }else {
            dispatch(setSnakeColor(e.target.value));
        }
    }

    const updateFieldColor = (e: any) => {
        e.preventDefault();
        if(gameState.colors.snake === e.target.value) {
            toast.error("Snake and field cannot have same colours");
        } else {
            dispatch(setFieldColor(e.target.value));
        }
    }

  return (
    <div className="w-auto">
        <div className="form-control w-auto">
            <label className="label">
                <span className="label-text">Enter Snake Color</span>
            </label>
            <label className="input-group">
                <input type="color" placeholder="#FFFFFF" className="input input-bordered" onChange={(e: any) => {
                    e.preventDefault();
                    updateSnakeColor(e);
                }} />
                <span>Boxes</span>
            </label>
        </div>

        <div className="form-control w-auto">
        <label className="label">
            <span className="label-text">Enter Field Size</span>
        </label>
        <label className="input-group">
            <input type="color" placeholder="#000000" className="input input-bordered" onChange={(e: any) => {
                e.preventDefault();
                updateFieldColor(e);
            }} />
            <span>Boxes</span>
        </label>
        </div>
    </div>
  )
}

export default Snake