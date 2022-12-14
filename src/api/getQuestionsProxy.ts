import get from 'axios';
import { FormState } from 'features/formSlice';

const API_URL = 'https://opentdb.com/api.php';
const getQuestionsProxy = async (params: FormState) => {
  const { results } = (await get(API_URL, { params, timeout: 5000 })).data;
  return results;
};

export default getQuestionsProxy;
