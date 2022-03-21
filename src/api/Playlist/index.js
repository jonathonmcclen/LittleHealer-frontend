import { allPlaylists, playlistsByGenre } from "./endpoints";

// get playlistList
export const fetchPlaylists = () => {
  return fetch(allPlaylists).then(function (response) {
    return response.json();
  });
};

// get playlists list search by genre
export const fetchPlaylistByGenre = (genre) => {
  let searchContent = document.getElementById("search_bar").value;
  let genreEndPoint = playlistsByGenre[0] + searchContent + playlistsByGenre[1];

  fetch(genreEndPoint)
    .then(function (response) {
      return response.json();
    })
    .then((requests) => {
      requests.forEach((request) => {});
    });
};

// post playlist
export const postNewPlaylist = (playlistObj) => {};
