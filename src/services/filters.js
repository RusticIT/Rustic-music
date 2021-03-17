const timeFilter = function(value) {
  if (value < 60) {
    return `00:${value}`;
  }
  const min = Math.floor(value / 60);
  const sec = Math.floor(((value / 60) % min) * 60);
  return `${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
};

export default timeFilter;
