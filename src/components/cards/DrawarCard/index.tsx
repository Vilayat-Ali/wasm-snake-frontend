import type {ReactNode} from 'react'

type Props = {
    children: ReactNode
}

const DrawarCard = (props: Props) => {
  return (
    <div className="card w-auto bg-base-100 shadow-xl my-4">
      <div className="card-body">
          {props.children}
      </div>
    </div>
  )
}

export default DrawarCard