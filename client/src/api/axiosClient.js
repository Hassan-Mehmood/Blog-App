import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://localhost:3001",
  withCredentials: true,
});

export const fetchBlogs = async (endPoint) => {
  const { data } = await axiosClient.get(endPoint);
  return data;
};

export const fetchSingleBlog = async (endPoint) => {
  const { data } = await axiosClient.get(endPoint);
  return data;
};

export const fetchUserBlogs = async (endPoint) => {
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
  return axiosClient.post(endPoint, payLoad, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
export const updateBlog = async (endPoint, payLoad) => {
  return axiosClient.put(endPoint, payLoad, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const deleteBlog = async (endPoint) => {
  return axiosClient.delete(endPoint);
};
