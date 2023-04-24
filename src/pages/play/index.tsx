import { ReactNode, useEffect, useId } from "react"
import dynamic from "next/dynamic";
import Script from "next/script";

import Score from "@/components/drawar/Score";
import Level from "@/components/drawar/Level";
import DrawarCard from "@/components/cards/DrawarCard";
import SnakeLength from "@/components/drawar/SnakeLength";
import {useSeriesToggle} from "@/hooks/useToggle"
import Loader from "@/components/Loader";

import { useDispatch, useSelector } from "react-redux";
import { updateFieldSizeRows, updateFieldSizeCols } from "@/redux/slices/game.slice";
import { IGame, getGameState } from "@/redux/slices/game.slice";

import wasm_snake from "@/pkg/wasm_snake";
import FieldSize from "@/components/drawar/FieldSize";

// icons
import type { IconType } from "react-icons";
import {BsFillGearFill} from "react-icons/bs";
import {MdScore} from "react-icons/md";
import {VscInspect} from "react-icons/vsc";


type Props = {}

type drawarMenuItemType = {
  icons: IconType,
  title: string,
  component: ReactNode
}

const drawarMenu: drawarMenuItemType[] = [
  {
    icons: MdScore,
    title: "Level & Score",
    component: (
      <>
      <DrawarCard>
        <Level />
      </DrawarCard>

      <DrawarCard>
        <Score />
      </DrawarCard>

      <DrawarCard>
        <SnakeLength />
      </DrawarCard>
      </>
    )
  },
  {
    icons: BsFillGearFill,
    title: "Game Settings",
    component: (
      <>
        <DrawarCard>
          <FieldSize />
        </DrawarCard>

        <DrawarCard>
          <Score />
        </DrawarCard>

        <DrawarCard>
          <SnakeLength />
        </DrawarCard>
      </>
      )
  },
  {
    icons: VscInspect,
    title: "Inspect",
    component: (
      <>
        <DrawarCard>
          <Level />
        </DrawarCard>

        <DrawarCard>
          <Score />
        </DrawarCard>

        <DrawarCard>
          <SnakeLength />
        </DrawarCard>
      </>
      )
  }
];

const Play = (props: Props) => {
  const id_row: string = useId();
  const id_col: string = useId();
  const id_item: string = useId();
  const dispatch = useDispatch();
  const gameState: IGame = useSelector(getGameState);
  const seriesToggler = useSeriesToggle(drawarMenu.length);

  return (
    <Loader>
    <div className="drawer drawer-mobile w-90 overflow-hidden" style={{height: "88vh"}}>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col justify-center items-center">
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        {
          [...Array(gameState.fieldSize.rows)].map((rowNumber: number) => (
            <div key={id_row} className="flex flex-row justify-start items-center">
              {
                [...Array(gameState.fieldSize.cols)].map((colNumber: number) => (
                  <div key={id_col} className="border bg-black p-5" style={{backgroundColor: gameState.colors.field}}></div>
                ))
              }
            </div>
          ))
        }
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-80 bg-base-300 text-base-content">
        {
          drawarMenu.map((menuItem: drawarMenuItemType, index: number) => (
            <li key={id_item} className="my-2">
              <a onClick={seriesToggler[index][1]}><menuItem.icons className="text-3xl" />{menuItem.title}</a> 
              {seriesToggler[index][0] && (
                <>
                  {menuItem.component}
                </>
                )
              }
            </li>
          ))
        }
        </ul>
      
      </div>
    </div>
    </Loader>
  )
}

export default Play