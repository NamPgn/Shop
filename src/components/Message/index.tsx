import { message } from "antd";

export const MVSuccess = (props:any) => {
  return message.success(props);
};

export const MVWarning = (props:any) => {
  return message.warning(props);
};

export const MVError = (props:any) => {
  return message.error(props);
};
