import './details.css'



function Todomenu(props) {
  const {Btnclick} = props

    return (
      <div className="editmenu">
        <form>
          <input className="bar"></input>
        </form>
        <button className="button"id="btn" onClick={Btnclick}>
          Create
            </button>

      </div>
    );
}

export default Todomenu;