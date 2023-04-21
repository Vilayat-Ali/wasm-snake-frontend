import { ReactNode, useId } from "react"

import Score from "@/components/drawar/Score";
import DrawarCard from "@/components/cards/DrawarCard";
import useToggle from "@/hooks/useToggle"

import { useDispatch, useSelector } from "react-redux";
import { updateFieldSizeRows, updateFieldSizeCols } from "@/redux/slices/game.slice";
import { IGame, getGameState } from "@/redux/slices/game.slice";


type Props = {}

type drawarMenuItemType = {
  title: string,
  component: ReactNode
}

const drawarMenu: drawarMenuItemType[] = [
  {
    title: "Menu Item 1",
    component: <Score />
  },
  {
    title: "Menu Item 1",
    component: <Score />
  },
  {
    title: "Menu Item 1",
    component: <Score />
  }
];

const Play = (props: Props) => {
  const id: string = useId();
  const dispatch = useDispatch();

  const gameState: IGame = useSelector(getGameState);

  const [isOpen, ToggleCard] = useToggle();


  return (
    <div className="drawer drawer-mobile w-90 h-90 overflow-hidden">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col justify-center items-center">
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        <div className="flex flex-row items-center my-5">
          <div className="mr-10">
            <label htmlFor="Row-Count">Number of Rows</label>
            <input id="Row-Count" type="range" min="5" max="100" className="range" step="5" />
              <div className="w-full flex justify-between text-xs px-2">
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
              </div>
          </div>
          <div className="mr-10">
          <label htmlFor="Col-Count">Number of Cols</label>
            <input id="Col-Count" type="range" min="5" max="100" className="range" step="5" />
              <div className="w-full flex justify-between text-xs px-2">
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
              </div>
          </div>
        </div>
        {
          [...Array(gameState.fieldSize.rows)].map((rowNumber: number) => (
            <div key={id} className="flex flex-row justify-start items-center">
              {
                [...Array(gameState.fieldSize.cols)].map((colNumber: number) => (
                  <div key={id} className="border bg-black p-5"></div>
                ))
              }
            </div>
          ))
        }
      </div> 
      <div className="drawer-side border">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-80 bg-base-300 text-base-content">
        {
          drawarMenu.map((menuItem: drawarMenuItemType) => (
            <li key={id} className="my-2">
              <a onClick={ToggleCard}>{menuItem.title}</a> 
              {isOpen && (
                <DrawarCard>
                  {menuItem.component}
                </DrawarCard>
                )
              }
            </li>
          ))
        }
        </ul>
      
      </div>
    </div>
  )
}

export default Play