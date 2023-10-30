import { Breadcrumbs } from "@mui/material";
import MVLink from "../../components/Location/Link";
const Breadcrumb = ({ href, to }: any) => {
  return (
    <Breadcrumbs style={{
      margin:"30px 0"
    }} aria-label="breadcrumb">
      <MVLink to="/">
        Home
      </MVLink>
      <MVLink
        to={href}
      >
        {to}
      </MVLink>
    </Breadcrumbs>
  )
}

export default Breadcrumb;