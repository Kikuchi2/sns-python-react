// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from "/vite.svg";
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
        <div>bbsssss</div>
        <button type="button" className="p-8 border border-gray-200 rounded bg-white w-64 hover:bg-gray-50 hover:border-b-4 hover:border-b-blue-500 active:bg-gray-100">    
          <div className="flex justify-center items-center text-gray-500">
            <svg 
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24"
                fill="none"
                viewBox="0 0 24 24" 
                stroke="currentColor">
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2" 
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
          </div>
          <div className="text-center mt-4">
            <h1 className="font-bold text-gray-700 text">Content page</h1>
            <p className="text-500 text-sm mt-4">Build a page using page fragments and edit content inline</p>
          </div>
        </button>
      </div>
  )
}

export default App
