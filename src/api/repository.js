import axios from "axios";

const apiId = "61feed137084474c4cb32d56";

function repository(method, url, data = null, params = null) {
  let axiosRequestHeader = { "app-id": apiId };
  return axios({
    method: method,
    url: url,
    data: data,
    headers: axiosRequestHeader,
    params: params,
  });
}

export default repository;
