import type {ReactNode} from 'react'

type Props = {
    children: ReactNode
}

const ScoreCard = (props: Props) => {
  return (
    <div className="card w-90 bg-base-100 shadow-xl">
      <div className="card-body">
          {props.children}
      </div>
    </div>
  )
}

export default ScoreCard