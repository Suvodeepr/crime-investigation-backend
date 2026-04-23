// This file is used to call backend APIs
// It automatically sends JWT token in every request

export const fetchWithAuth = async (url, options = {}) => {

  // get token from browser storage
  const token = localStorage.getItem("token");

  // create headers
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`   // send token to backend
  };

  // combine headers with options
  const config = {
    ...options,
    headers
  };

  // call API
  const res = await fetch(url, config);

  // convert response into JSON
  const data = await res.json();

  return data;
};