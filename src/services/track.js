import rusticMusicService from "./rustic-music";

const trackService = {};

trackService.search = function(query) {
  const type = "track";
  return rusticMusicService
    .get("/search", {
      params: { query, type },
    })
    .then((res) => res.data);
};

export default trackService;
