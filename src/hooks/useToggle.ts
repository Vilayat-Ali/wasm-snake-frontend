import type {Dispatch, SetStateAction} from 'react'
import { useState, useCallback } from 'react'

type Props = {
    initialState?: boolean
}

const useToggle = ({ initialState = false }: Props) => {
  const [componentState, setComponentState]: [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(initialState);

  const Toggle = useCallback(() => setComponentState(!componentState), [componentState]);

  return [componentState, Toggle] as const;
}

export default useToggle