import React, { useState ,useEffect } from "react";
import { Container, Input ,Card,CardHeader,CardBody,CardTitle,CardText,Button,CardFooter } from "reactstrap";

import { useSelector, useDispatch } from "react-redux";
import { TodosType } from "./types/Types";
import { addToDo, clearCompleted, makeDone } from "./redux/TodosReducer";

function App() {


 const data = useSelector((state: any) => state.todos);
  const dispatch = useDispatch();

  const [dataToDisplay ,setDataToDisplay] =useState(data)

  const [todoToAdd, setTodoToAdd] = useState<TodosType>({
    id: 0,
    text: " ",
    isCompleted : false
    
  })

  const displayAll = () =>
  {
    
    setDataToDisplay(data);
  }

  
  const displayActive = () =>
  {
    const newDataToDisplay = data.filter((e:TodosType)=> e.isCompleted ===false) 
    
    setDataToDisplay(newDataToDisplay);
  }
  const displayInactive = () =>
  {
    const newDataToDisplay = data.filter((e:TodosType)=> e.isCompleted ===true) 
    
    setDataToDisplay(newDataToDisplay);
  }

  useEffect(() =>
  {
    displayAll()

  } , [data])
  const handleOnChange = (e:any) =>
  {
    const newtodoToAdd = { ...todoToAdd, text: e };
    setTodoToAdd(newtodoToAdd);
    }

  const handleClick=()=>
  {
    const randomnum = Math.floor(Math.random() * 100);
    const newData = {
      ...todoToAdd,
      id : randomnum 
    }
    dispatch(addToDo(newData));
    

  }

 
  return (
    <Container
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: 30,
      }}
    >
      <h1>TODOS</h1>

      <div
        style={{
          width: "80%",
          border: "1px solid black",
          borderRadius: 13,
          padding: 30,
        }}
      >
        <div className="inputs" style={{ display:'flex',gap : 10 ,marginBottom :30}}>
          <Input placeholder="Enter to do"  onChange={(e)=>handleOnChange(e.target.value)} ></Input>
          <Button color="primary" onClick={handleClick}>add</Button>

        </div>
        

        <div className="card-container">
          {dataToDisplay &&
            dataToDisplay.map((e:TodosType) => (
              <Card
                className="my-2"
                style={{
                  
                }}
              >
                {/* <CardHeader>Header</CardHeader> */}
                <CardBody>
                   <CardTitle tag="h5" style={e.isCompleted?{color:'green'}:{color:'red'} }>{e.isCompleted ? "Completed" : "In progres.."}</CardTitle> 
                  <CardText>
                    {
                    e.text}
                  </CardText>

                  {e.isCompleted?<Button color="success" onClick={()=>dispatch(makeDone(e.id))}>Undone</Button>:<Button onClick={()=>dispatch(makeDone(e.id))} color="warning">Done</Button>}
                </CardBody>
                {/* <CardFooter>Footer</CardFooter> */}
              </Card>
            ))}
        </div>
        <div className="options" style={{ display: 'flex' ,justifyContent:'space-around' ,marginTop :30}}>
          <Button onClick={displayAll}> All</Button>
          <Button onClick={displayActive}> Active</Button>
           <Button  onClick={displayInactive}> Completed</Button>
                  <Button color="danger" onClick={()=>dispatch(clearCompleted())}>Remove completed</Button>
        </div>
      </div>
    </Container>
  );
}

export default App;
