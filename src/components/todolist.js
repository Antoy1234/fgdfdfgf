import Todoitems from './todoitems'

function Todolist(props) {

  const { items } = props;
  
  return (
    <div>
      {/* {items.map((item) => {
        return <Todoitems todo={item.todo}></Todoitems>;
      })} */}

      {items.map((item) => (<Todoitems todo={item.todo}></Todoitems>))}
        
    </div>
  );
}
export default Todolist;