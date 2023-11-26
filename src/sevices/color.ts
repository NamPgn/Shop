import intances from "./instances";

export const getAllColor = () => {
  return intances.get("colors");
};

export const editColor = (id: any, data: any) => {
  return intances.put(`product/update/${id}`, data);
};

export const addColor = (data: any) => {
  return intances.post(`color/add`, data);
};

export const getOne = (id: any) => {
  return intances.get(`color/${id}`);
};

export const deleteColor = (id: any) => {
  return intances.delete(`color/delete/${id}`);
};
