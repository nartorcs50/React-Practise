import "./App.css";
// import Todo from "./components/Todo.jsx";
// import Title from "./components/Title.jsx";
// import Modal from "./components/Modal.jsx";
import Counter from "./components/Counter.jsx";
// import React, { useState } from 'react';

function App() {
  
  return  <Counter />

  // const [showModal, setModal] = useState(false)
  // return (
  //   <div>
  //     <Title />
  //     <div>
  //       <input
  //         type="text"
  //         onChange={(event) => {
  //           console.log(event.target.value);
  //         }}
  //       />
  //       <button onClick={() => setModal(true)}>Add todo</button>
  //     </div>
  //     <div className="todo__wrapper">
  //       <Todo title="Finish Frontend Simplified" />
  //       <Todo title="Finish Interview Section" />
  //       <Todo title="Land a 100k$ job" />
  //     </div>
  //     {showModal && <Modal question="Are you sure" />}
  //   </div>
  // );
}

export default App;
