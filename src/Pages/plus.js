import PlusIcon from '../Assets/Images/plus.svg';
import { Link } from "react-router-dom";

const Plus = ({setValid, setBtn}) => {

  const setClick =()=>{
    setValid(true);
    setBtn(true);
  }

  return (
    <>
   
    <div className="icon-bg">
      <Link to="/edit" onClick={setClick}> <img src={PlusIcon} alt="Plus Icon" /></Link>
    </div>
    </>
  )
}

export default Plus