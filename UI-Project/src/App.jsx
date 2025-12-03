import React from 'react'
import Section1 from './components/Section1/section1'
import Section2 from './components/Section2/section2'
import Nav from './components/Section1/Navbar'
import Page from './components/Section1/Page1Content'


const App = () => {
  const users=[
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'blue',
      tag:'Satisfied'
    },
    {
      img:'https://images.unsplash.com/photo-1564857729547-b4627101378b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY0fHx8ZW58MHx8fHx8',
      intro:'',
      color:'lightseagreen',
      tag:'Underserved'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1664474515281-7fc50ac83da4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90JTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
      color:'black',
      tag:'Underbanked'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1672691612351-7473de67b85c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'gray',
      tag:'Wow'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661740911130-74b3a0f71950?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'indigo',
      tag:'Hot'
    }
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2/>

      
      

    </div>
  )
}

export default App
