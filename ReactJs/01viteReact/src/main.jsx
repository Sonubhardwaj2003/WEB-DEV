import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import React from 'react'

// //dont use thid function here , react has its own library function
// const reactElement={
//     type : 'a',
//     props :{
//         href : 'https://google.com',
//         target : '_blank'
//     },
//     children : "click me for go to google"
// }


const anotherReactElement1 = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  "click to visit google"
);

// const anotherReactElement2=(
//   <a href="https://google.com" target="_blank">click to visit google</a>
// )

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,

  // reactElement

  anotherReactElement1
  // anotherReactElement2
)
