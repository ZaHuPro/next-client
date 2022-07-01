export const device = {
  // Extra small devices (portrait phones, less than 576px)
  xs: "(min-width: 640px)",
  // Small devices (landscape phones, 576px and up)
  sm: "(max-width: 640px)",
  // Medium devices (tablets, 768px and up)
  md: "(max-width: 768px)",
  // Large devices (desktops, 992px and up)
  lg: "(max-width: 1024px)",
  // Extra large devices (large desktops, 1200px and up)
  xl: "(min-width: 1280px)",
  // Double Extra large devices (High res, 1200px and up)
  xxl: "(min-width: 1440px)",
  // behavior for touch browsers
  mobile: "(hover: none)",
  // behavior for non touch browsers
  web: "not all and (hover: none)",
};

const theme = {
  white: "#fff",
  primary: "#75ABFB",
  text: "#262626",
  lightText: "#777777",
  error: "#F24B6A",
  success: "#12805c",
  info: "#3498DB",
  device,
};

export default theme;