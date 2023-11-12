import intances from "./instances";

export const getOptions = () => {
  return intances.get("option?page=");
};

export const addOption = (data: any) => {
  return intances.post("option/add", data);
};

export const getOptionsValue = () => {
  return intances.get("optionvalue?page=1");
};

export const deleteOptionValue = (id: number) => {
  return intances.delete(`optionvalue/delete/${id}`);
};

export const deleteOption = (id: number) =>{
  return intances.delete(`option/delete/${id}`);
}