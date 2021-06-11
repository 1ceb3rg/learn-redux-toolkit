import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {useAppDispatch,useAppSelector} from  './app/hooks'
import {incremented, amountAdded} from './features/counter/counter-slice'
import {useFetchBreedsQuery} from './features/dogs/dogs-api-slice'
function App() {
const count=useAppSelector(state=>state.counter.value)
const dispatch=useAppDispatch();
const [numDogs,setNumDogs]=useState(10);
const {data,isFetching}= useFetchBreedsQuery(numDogs);
const handleClick=()=>{
  dispatch(amountAdded(2))
console.log(data);

}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={handleClick} >
            count is: {count}
          </button>
        </p>
        <div>
          <p>Dogs to fetch</p>
          <select value={numDogs} onChange={(e)=>setNumDogs(+e.target.value)}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
        <div>
          Number of dogs fetched: {data?.length}
          <table>
            <thead>
<tr><th>Name</th><th>Picture</th></tr>
            </thead>
            <tbody>
{data?.map(breed=>(
<tr key={breed.id}><td>{breed.name}</td><td><img  height={250} src={breed.image.url}/></td></tr>


))}

            </tbody>
          </table>

        </div>
      </header>
    </div>
  )
}

export default App
