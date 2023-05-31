import React from 'react';
import { Container } from 'reactstrap';

import { useSelector, useDispatch } from 'react-redux'
import { TodosType } from './types/Types';


function App() {
 
    const count = useSelector((state: TodosType[]) => state)
    console.log(count);
    return (

      <Container style={{ display:'flex',alignItems:'center' ,flexDirection:'column' ,paddingTop:30}}>
        <h1 >TODOS</h1>
        
      </Container>
  );
}

export default App;
