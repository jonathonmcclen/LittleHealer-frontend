import { Missions } from "./endpoints";

// get playlistList
export const fetchMissions = () => {
  return fetch(Missions).then((response) => response.json());
};
