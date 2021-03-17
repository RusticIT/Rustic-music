const timeFilter = function(value) {
  const min = Math.floor(value / (1000 * 60));
  const sec = Math.floor(((value / (1000 * 60)) % min) * 60);
  return `${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
};

export default timeFilter;
