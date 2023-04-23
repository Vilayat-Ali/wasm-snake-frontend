/* eslint-disable react-hooks/rules-of-hooks */
import type {Dispatch, SetStateAction} from 'react'
import { useState, useCallback } from 'react'

export const useToggle = ( initialState = false): readonly [boolean, () => void] => {
  const [componentState, setComponentState]: [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(initialState);

  const Toggle = useCallback(() => setComponentState(!componentState), [componentState]);

  return [componentState, Toggle] as const;
}

export const useSeriesToggle = ( components: number, initialState: boolean[] = [...Array(components)].fill(false)): (readonly [boolean, () => void])[] => {
  let toggler = [];
  for(let i=0; i<components; i++){
    // component state
    const [componentState, setComponentState]: [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(initialState[i]);

    const Toggle = useCallback(() => setComponentState(!componentState), [componentState]);

    toggler.push([componentState, Toggle] as const);
  }
  return [...toggler];
}