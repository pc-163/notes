import { Link } from "react-router-dom";

const Header = ({setValid}) => {

  const setClick =()=>{
    setValid(false);
  }

  return (
    <div className="display-flex pt-5 pb-5">
    <div className="col-md-6"><h2>Notes</h2></div>
    <div className="col-md-6">
    <div className="display-flex justify-content">
      <i className="fa-solid fa-magnifying-glass"></i>
      <Link to="/edit" onClick={setClick}><i className="fa-solid fa-circle-info"></i></Link>
      </div>
    </div>
      
    </div>
  )
}

export default Header