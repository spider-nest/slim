import axios from "$utils/axios";

const Api = {
  GetActivityInfo: "/drawCard/getActivityInfo",
};

export function getActivityInfo() {
  return axios.get(Api.GetActivityInfo);
}
