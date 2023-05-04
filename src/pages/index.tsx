// lib
import type { NextPage } from "next"

const index: NextPage = () => {
  return (
    <>
    <div className="hero min-h-screen" style={{ backgroundImage: `url("/home.png")` }}>
      <div className="hero-overlay bg-opacity-30"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold">WASM Snake Game</h1>
          <p className="mb-5">Control snake [a singly-linked list] from browser using WASM!!</p>
          <button className="btn btn-primary">Play Now</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default index