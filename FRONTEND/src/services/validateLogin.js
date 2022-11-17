import axios from "axios";

const temporalHost = 'http://localhost:3001';
//---------------------------------------------
export const validateLogin = async ({ username, password }) => {
  const result = await axios.get(temporalHost+'/user',{
    params: { username, password }
  })
  return result.data
}