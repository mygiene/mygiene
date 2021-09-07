export function RandomID() {
  return Math.random().toString(36).substr(2, 9);
}

export const StandardDelivery = {
  price: 10,
  id: "shr_1JHrYuEDTtTQNBA8fPmzIEHt",
};

export const ExpressDelivery = {
  price: 15,
  id: "shr_1JHrfFEDTtTQNBA85aKOjYpe",
};
