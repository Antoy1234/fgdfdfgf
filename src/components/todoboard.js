import Todomenu from './todomenu'
import Todolist from './todolist';
import React, { useState} from "react";
function Todoboard(props) {

  const [items, setItems] = useState(props.items);
  const Btnclick = () => {
    setItems([...items, { id: 3, todo: "do something" }]);
  };

    return (
      <div className="board">
        <Todomenu items={items} Btnclick={Btnclick}></Todomenu>
        <Todolist items={items}></Todolist>
      </div>
    );
}


export default Todoboard;