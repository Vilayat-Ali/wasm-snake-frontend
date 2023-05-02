// lib
import { useDispatch, useSelector } from "react-redux"
import type { IGame } from "@/redux/slices/game.slice"
import { getGameState, updateFieldSizeRows, updateFieldSizeCols } from "@/redux/slices/game.slice"
import {toast} from "react-toastify"

const FieldSize = () => {
    const gameState: IGame = useSelector(getGameState);
    const dispatch = useDispatch();

    // states

    enum Feature {
        row,
        col
    }

    const updateFieldSize = (feature: Feature, size: any) => {
        if(!Number.isNaN(Number(size))) {
            if(feature === Feature.row) {
                if(size <= 0){
                    toast.error("Row count should be greater than 1");
                } else {
                    dispatch(updateFieldSizeRows(Number(size) as any));
                }
            } 
            if(feature === Feature.col) {
                if(size <= 0){
                    toast.error("Column count should be greater than 1");
                } else {
                    dispatch(updateFieldSizeCols(Number(size) as any));
                }
            }
        } else {
            toast.error("Size should be a valid number");
        }
        
    }

  return (
    <div className="container">
        <div className="form-control">
        <label className="label">
            <span className="label-text">Enter Row Size</span>
        </label>
        <label className="input-group">
            <input type="text" placeholder="0.01" className="input input-bordered" style={{width: '50%'}} onChange={(e: any) => {
                e.preventDefault();
                updateFieldSize(Feature.row, e.target.value);
            }} />
            <span>Boxes</span>
        </label>
        </div>
        <br/>
        <div className="form-control">
        <label className="label">
            <span className="label-text">Enter Col Size</span>
        </label>
        <label className="input-group">
            <input type="text" placeholder="0.01" className="input input-bordered" style={{width: '50%'}} onChange={(e: any) => {
                e.preventDefault();
                updateFieldSize(Feature.col, e.target.value);
            }} />
            <span>Boxes</span>
        </label>
        </div>
    </div>
  )
}

export default FieldSize