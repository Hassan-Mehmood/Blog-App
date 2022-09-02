import axios from "axios";
axios.defaults.withCredentials = true;

export const axiosClient = axios.create({
  baseURL: "http://localhost:3001",
  withCredentials: true,
});

export const fetchBlogs = async (endPoint) => {
  const { data } = await axiosClient.get(endPoint);
  return data;
};

export const signUpUser = async (endPoint, payLoad) => {
  return axiosClient.post(endPoint, payLoad);
};

export const loginUser = async (endPoint, payLoad) => {
  return axiosClient.post(endPoint, payLoad);
};

export const uploadBlog = async (endPoint, payLoad) => {
  return axiosClient.post(endPoint, payLoad);
};
