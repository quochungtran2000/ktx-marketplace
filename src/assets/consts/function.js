export const removeAccents = (name, id) => {
  return (
    name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      // eslint-disable-next-line
      .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "")
      .split(" ")
      .join("-") +
    "-pid" +
    id
  );
};

export const getId = (param, type) => {
  return param.split("-").pop().replace("pid", "");
};

export const createMarkup = (data) => {
  return {
    __html: data,
  };
};
