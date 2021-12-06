import axios from 'axios';

const requestQuestions = async (number) => {
  try {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=${number}`
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export { requestQuestions };
