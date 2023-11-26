import intances from "./instances";

export const getAllSize = () => {
  return intances.get("sizes");
};

export const editSize = (id: any, data: any) => {
  return intances.put(`size/update/${id}`, data);
};

export const addSize = (data: any) => {
  return intances.post(`size/add`, data);
};

export const getOne = (id: any) => {
  return intances.get(`size/${id}`);
};

export const deleteSize = (id: any) => {
  return intances.delete(`size/delete/${id}`);
};
