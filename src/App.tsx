import React, { useState } from "react";
import logo from "./logo.svg";
import { v4 as uuidv4 } from "uuid";
import { findAllByAltText } from "@testing-library/react";

class Todo {
  id: string = uuidv4();
  done: boolean = false;

  constructor(public title: String) {}

  toggleDone() {
    this.done = !this.done;
  }
}

function App() {
  // aqui useState();
  //< html prop {value}
  // cost [var, setVar] =  useState(valorDefault);
  // var = "teste"
  // setVar("pedro")
  // var = "pedro"
  // { dentro do {} é js}
  //event target value, capta o valor escrito na box
  // nomeDafunco(asdfad)
  // []
  // atual no settodos é o estado atual da array
  /* declarando uma classe para testar const todoTeste = new Todo("Pedro");
  console.log(todoTeste); */

  // ["teste1", "teste2", "teste"]
  // aqui
  // [<h1>teste1</h1>, <h1>teste2</h1>]

  const [todo, setTodo] = useState("teste" + Math.pow(4, 5));
  const [todos, setTodos] = useState([new Todo("Obj1"), new Todo("Obj2")]);

  ////////////////////////////////////////////

  function add() {
    const todoTest = new Todo(todo);
    console.log(todoTest);
    setTodos((atual) => [...atual, todoTest]);

    // () => setTodos((atual) => [...atual, todo])
  }
  ////////////////////////////////////////////

  function remove(elemento: Todo) {
    setTodos((atual) => {
      const arr = [...atual]; // copiou array
      const index = arr.findIndex((value) => value.id === elemento.id);
      arr.splice(index, 1);

      return arr;
    });
  }
  ////////////////////////////////////////////

  function toogleDone(elemento: Todo) {
    setTodos((atual) => {
      const arr = [...atual]; // copiou array
      const el = arr.find((value) => value.id === elemento.id) as Todo;
      el.toggleDone();

      return arr;
    });
  }

  /////////////////////////////////////////
  return (
    <div className="App">
      <h1>{todo}</h1>
      <input
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
      ></input>
      <button onClick={add}>Criar</button>
      {todos.map((elemento) => {
        return (
          <div key={elemento.id}>
            <tr>
              <td style={{ padding: "10px" }}>{elemento.title}</td>
              <td>{elemento.done ? "Feito" : "Não Feito"}</td>
              <td>
                <input
                  type="checkbox"
                  name="FeitoNFeito"
                  value="TEste"
                  checked={elemento.done}
                  onChange={() => toogleDone(elemento)}
                />
              </td>
            </tr>
            <button onClick={() => remove(elemento)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
}

/*
function naoFunciona() {
  return (
      <div>teste1</div>
      <div>teste2</div>
  );
}

function funciona() {
  return (
    <div>
      <div>teste1</div>
      <div>teste2</div>
    </div>
  );
  */

export default App;
