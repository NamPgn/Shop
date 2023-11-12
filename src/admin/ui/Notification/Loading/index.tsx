import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Spin } from "antd";
interface Spiner {
  children?: any;
}
export default function CircularIndeterminate() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: "20px",
        width: "100%",
      }}
    >
      <CircularProgress />
    </Box>
  );
}

export const Spiner = ({ children, ...rest }: Spiner) => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Spin {...rest}>{children}</Spin>
    </div>
  );
};
