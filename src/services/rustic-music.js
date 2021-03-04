import trae from "trae";
import configService from "./config";
const rusticMusicService = trae.create({
  baseUrl: configService.apiUrl,
});

export default rusticMusicService;
