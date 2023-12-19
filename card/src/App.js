import React, {useReducer, createContext} from 'react'
import Card from './Components/Card';
import Button from './Components/Btn'
import CardDetails from './Components/Users';

export const UserContext = createContext();
const Details = {
  cardDetails : CardDetails,
  CurrentCard : {}
}

const Reducer = (state, action) => {
  switch(action.type){
    case "UpdateCard":
      return {...state, CurrentCard:state.cardDetails[action.payload.id]}
    default:
      return state
  }
}

function App() {
 const [list, dispatch] = useReducer(Reducer, Details)
 
  return (
    <UserContext.Provider value={list}>
    <div className='Home-Page'>
      <h1 style={{textAlign:'center'}}>Card Details</h1>
        <Card />
        <Button dispatch={dispatch}/>
    </div>
    </UserContext.Provider>
  );
}

export default App;
