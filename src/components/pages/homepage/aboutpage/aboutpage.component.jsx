import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const AboutPage = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <h4>About</h4>
      <h1>{params.aboutId}</h1>
      <button onClick={() => navigate("/")}>Home</button>
      <h1>{location.pathname}</h1>
      <h1>{props.params}</h1>
    </div>
  );
};
export default AboutPage;
