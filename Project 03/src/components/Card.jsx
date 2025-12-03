import React from 'react'

const card = (props) => {
    console.log(props);
  return (
    <div className='parent'>
       <div className="card">
        <img src="https://images.shiksha.com/mediadata/images/1582200686phpXUdfnJ.jpeg" alt="" />
     
        <h1>{props.user} {props.age} {props.img}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button>View Profile</button>
       </div>
    </div>
  )
}

export default card
