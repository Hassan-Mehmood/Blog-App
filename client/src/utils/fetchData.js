import axios from "axios";

async function fetchData(endPoint) {
  let server_URL = process.env.REACT_APP_SERVER_URL + endPoint;
  const { data } = await axios.get(server_URL);
  return data;
}

export default fetchData;
