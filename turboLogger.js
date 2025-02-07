export const turboLogger = (messege, textColor = "blue") => {
  const textStyle = `color: ${textColor}`;
  console.log(`%c${messege}`, textStyle);
};
