
import './App.css';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';

import {Footer} from './MyComponents/Footer';
import React,{ useState, useEffect} from 'react';
import {AddTodo} from './MyComponents/AddTodo';
import {About} from './MyComponents/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null)
  {
    initTodo=[];
  }
  else
  {
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  const addtodo=(title,salary)=>{
    let sno;
    if(todos.length===0)
    {
      sno=1;
    }
    else
    {
      sno=todos[todos.length-1].sno+1;
    }
      const myTodo={
        sno:sno,
        title:title,
        salary:salary
      }
      setTodos([...todos,myTodo]);

     
      
  }

  const onDelete= (todo) =>{
    console.log("I am onDelete of todo",todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));

    localStorage.setItem("todos",JSON.stringify(todos));

  }
  const [todos,setTodos]=useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])
  return (
    <>
    <Router>
      <Header title="MyTodosList" searchBar={false}/>
      <Switch>
          <Route exact path="/" render={()=>{
            return (
              <>
              <AddTodo addtodo={addtodo}/>
              <Todos todos={todos} onDelete={onDelete}/>
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      
      <Footer/>
    </Router>
    </>
  );
}

export default App;
