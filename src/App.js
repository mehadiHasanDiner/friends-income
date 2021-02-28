import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [friends, setFriends] = useState([]);
  useEffect(() =>{
    fetch('https://api.generated.photos/api/v1/faces?api_key=02qW3jqELimk1XpGWPjpsg')
    .then(res => res.json())
    .then(data => {setFriends(data)
    console.log(data)
    });
  }, [])

  return (
    <div className="App">
      <header>
        {
          friends.map(image=> <Name name ={image.faces}></Name>)
        }
        
      </header>
    </div>
  );
}

function Name(props){
   
  return(
    <div>

    </div>
  )
}

export default App;
