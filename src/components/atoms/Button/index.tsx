import { ReactNode } from "react";
import "./styles.css";

const Button = ({ children }: { children?: ReactNode }) => {
  return <div className="btn">{children}</div>;
};

export default Button;
