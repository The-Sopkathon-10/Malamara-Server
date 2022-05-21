const drawRandom = () => {
  const choices = ["yes", "no"];
  const randomIndex = Math.round(Math.random());
  const result = choices[randomIndex];

  return result;
};

export default drawRandom;
