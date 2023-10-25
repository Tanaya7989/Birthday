import Data from './Data'
import './App.css';
import {useState} from 'react'

function App() {
  const[data,setData]=useState(Data)
  return (
    <div className="App">
       <section>
        <main>
        <p>Today's Birthday {Data.length}🎂💐</p>
          {data.map((x)=>{
            return(
              <div className="Cards" key={x.age}>
                <img src={x.image} alt='' height={'70px'} width={'70px'}></img>
                <ruby><p>{x.age}</p><rt>{x.name}</rt></ruby>
              </div>
            )
          })}
          <button onClick={()=>setData([])}>Clear</button>
        </main>
      </section>
     
    </div>
  );
}

export default App;
