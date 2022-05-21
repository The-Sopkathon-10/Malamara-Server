const drawRandom = (choices: string[]) => {
  const randomIndex = Math.round(Math.random());
  const result = choices[randomIndex];

  return result;
};

export default drawRandom;
