import intances from "./instances";

export const getAllProduct = () => {
  return intances.get("/products");
};
