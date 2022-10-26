import './details.css'


function Todoitems(props) {
    return (
      <div className="list-item">
        <h2>{props.todo}</h2>
        <div className="editbtnsdiv"> </div>
      </div>
    );

} 

export default Todoitems;