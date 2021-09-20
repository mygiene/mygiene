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
export function formattedAddress(add) {
  const line1 = [add.line1, add.line2].join(", ");
  const line2 = [add.city, add.state].join(", ");
  return [line1, line2, add.postal_code].join("\r\n");
}
