import { Link } from "react-router-dom";

const MVLink = ({ to, children, ...rest }:any) => {
  return (
    <Link to={to} {...rest}>
      {children}
    </Link>
  );
};

export default MVLink;
