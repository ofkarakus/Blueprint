import "./styles.css";
import { toolbarArr } from "./utils";

import Button from "../../atoms/Button";

const Toolbar = () => {
  return (
    <div className="toolbar">
      {toolbarArr.map((icon) => (
        <Button>{icon}</Button>
      ))}
    </div>
  );
};

export default Toolbar;
