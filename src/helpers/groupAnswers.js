import { shuffleArray } from './shuffleArray';

const groupAnswers = (correct, incorrect) => {
  const answers = [correct, ...incorrect];
  const shuffledAnswers = shuffleArray(answers);

  return shuffledAnswers;
};

export { groupAnswers };
