import intances from "./instances";

export const getAllProductChild = () => {
  return intances.get("productChild");
};

export const addProductChild = (id: any, data: any) => {
  return intances.post(`productChild/add/${id}`, data);
};
