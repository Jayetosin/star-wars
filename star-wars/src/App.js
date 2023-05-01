import Card from './star wars/Card'
import { useState } from 'react'
import { useEffect } from 'react'


const App = () => {

    const[Movie, setMovie]=useState([])

    useEffect(() =>(
        fetch('https://swapi.dev/api/films')
        .then(response => response.swapi())
        .then(data => setMovie({data}))
        .catch(err => console.log(err))
        
    ) ,[]
    )

  return (
    <div>
      
    <div>
  {Movie.map ((list, index)=>
   <p key ={index}>{list.title} | {list.date} </p>
  )}

<div>
  <Card/>
     
    </div>

</div>
    </div>
  )
}

export default App
  
