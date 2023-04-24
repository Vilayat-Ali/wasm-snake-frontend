import type {Dispatch, SetStateAction, ReactNode} from "react";
import { useEffect, useState } from "react";
import {ClockLoader} from "react-spinners";
import DrawarCard from "../cards/DrawarCard";

type Props = {
    children: ReactNode
}

const Loader = (props: Props) => {
    const [isLoading, setLoading]: [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
        
    }, []);

  return (
    isLoading ? (
        <div className="flex flex-row justify-center items-center">
            <div className="card w-auto bg-base-800 shadow-xl my-4 max-w-sm">
                <div className="card-body flex flex-col items-center justify-center bg-base-800 p-20">
                    <ClockLoader color="#5f36d6" size={200} loading={isLoading}/>
                    <h4 className="text-3xl mt-5">Loading...</h4>
                </div>
            </div>
        </div>
    ) : (
        <>
        {props.children}
        </>
    )
  )
}

export default Loader