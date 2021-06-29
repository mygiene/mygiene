export const size = {
  mobileS: "320px",
  mobileM: "360px",
  mobileL: "425px",
  mobileXL: "640px",
  tablet: "768px",
  desktopS: "1024px",
  desktopM: "1280px",
  desktopL: "1366px",
  desktopXL: "1440px",
  desktopXXL: "2560px",
};

export const device = Object.keys(size).reduce(
  (acc, cur) => {
    acc.min[cur] = `min-width: ${size[cur]}`;
    acc.max[cur] = `max-width: ${size[cur]}`;
    return acc;
  },
  { min: {}, max: {}, between: () => "" }
);

const media = Object.keys(device.min).reduce(
  (acc, cur) => {
    acc.min[cur] = `@media (${device.min[cur]})`;
    acc.max[cur] = `@media (${device.max[cur]})`;
    return acc;
  },
  { min: {}, max: {}, between: () => "" }
);

media.between = (min, max) =>
  `@media (max-width: ${max}) and (min-width: ${min})`;

export default media;
