import React from 'react'

type Props = {}

const Play = (props: Props) => {
  return (
    <div className="drawer drawer-mobile w-90 h-90 overflow-hidden">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col justify-center items-center">
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        {
          [...Array(10)].map((rowNumber: number) => (
            <div key={rowNumber} className="flex flex-row justify-start items-center">
              {
                [...Array(10)].map((colNumber: number) => (
                  <div key={colNumber} className="border">
                    Hello
                  </div>
                ))
              }
            </div>
          ))
        }
      </div> 
      <div className="drawer-side border">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>
        </ul>
      
      </div>
    </div>
  )
}

export default Play