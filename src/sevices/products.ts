import intances from "./instances";

export const getAllProduct = () => {
  return intances.get("products");
};

export const editProduct = (id: any, data: any) => {
  return intances.put(`product/update/${id}`, data);
};

export const addProduct = (data: any) => {
  return intances.post(`product/add`, data);
};

export const getOne = (id: any) => {
  return intances.get(`product/${id}`);
};

export const deleteProduct = (id: any) => {
  return intances.delete(`product/delete/${id}`);
};

export const addProductDetail = (data: any) => {
  return intances.post(`productdetail/add`, data);
};
