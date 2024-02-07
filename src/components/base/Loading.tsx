import { useState, CSSProperties } from "react";
import HashLoader from "react-spinners/HashLoader";
import '../../assets/css/custom.css';

const override: CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
};

const Loading = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  return (
    <div className="sweet-loading">
      <HashLoader color="#36d7b7" cssOverride={override}/>
    </div>
  );
};

export default Loading;