import React from 'react'
// import './App.css'
import Card from './assets/Card'

function App() {
  return (
    <>
     <div className='card'>
        <Card 
          img='https://tse2.mm.bing.net/th/id/OIP.KfJqjn9jazboxjxZp-4nNAHaJQ?pid=Api&P=0&h=180'
          user='Sonu'
          age='22'
          about='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolores non tenetur qui quasi reiciendis molestiae quisquam quaerat sint labore?'
        ></Card>

        <Card 
          img='https://tse4.mm.bing.net/th/id/OIP.R7USmaexesybhCsdtXcyJwHaLH?pid=Api&P=0&h=180'
          user='Jyoti'
          age='21'
          about='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolores non tenetur qui quasi reiciendis molestiae quisquam quaerat sint labore?'
        ></Card>

        <Card 
          img='https://tse2.mm.bing.net/th/id/OIP.8QA_RtoOziWFP0t29zOsbAHaJ3?pid=Api&P=0&h=180'
          user='Tommy'
          age='5'
          about='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolores non tenetur qui quasi reiciendis molestiae quisquam quaerat sint labore?'
        ></Card>

     </div>
    </>
  )
}

export default App
