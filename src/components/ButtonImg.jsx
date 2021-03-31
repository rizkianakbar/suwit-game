import comp from "../assets/img/comp.png";
import { useHistory } from "react-router-dom";

const Button = (props) => {
  const history = useHistory();
  const {page} = props;
  const routeChange = () => {
    console.log("hahahah");
    let path = `${page}`;
    history.push(path);
  };

  let { color, mt } = props;
  let classColor = "";
  let classMarginTop = "";

  color === "white"
    ? (classColor = "btn-white")
    : color === "blue"
    ? (classColor = "btn-blue")
    : (classColor = "btn-white");

  mt === "10" ? (classMarginTop = "mt-10") : (classMarginTop = "mt-1");

  return (
      <button
        className={`btn btn-center ${classColor} ${classMarginTop}`}
        onClick={routeChange}
      >
        <img className="btn-img" src={comp} alt="" />
        <div>
          <h1>{props.txt}</h1>
          <p>{props.subTxt}</p>
        </div>
      </button>
  );
};

export default Button;
