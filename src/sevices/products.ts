import intances from "./instances";

export const getAllProduct = () => {
  return intances.get("products?page=1");
};

export const editProduct = (id: any, data: any) => {
  return intances.put(`products/update/${id}`, data);
};

export const addProduct = (data: any) => {
  return intances.post(`products/add`, data);
};

export const getOne = (id: any) => {
  return intances.get(`products/${id}`);
};

export const deleteProduct = (id: any) => {
  return intances.delete(`products/delete/${id}`);
};
