import React from "react"

let card=(props)=>{
  return(
    <>
        <div className="cardTemp">
            <div className="image">
                <img src={props.img} alt="" />
            </div>
            <h2>Hii , i am {props.user}</h2>
            <h3>I am {props.age} years old</h3>
            <p>{props.about}</p>
        </div>
    </>
  )
}

export default card;