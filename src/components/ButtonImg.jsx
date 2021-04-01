import comp from "../assets/img/comp.png";
import { useHistory } from "react-router-dom";

const Button = ({ page, color, mt, txt, subTxt }) => {
  const history = useHistory();
  const routeChange = () => {
    console.log("hahahah");
    let path = `${page}`;
    history.push(path);
  };

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
        <h1>{txt}</h1>
        <p>{subTxt}</p>
      </div>
    </button>
  );
};

export default Button;
