async function getTracks(searchQuery, typeSearch) {
  const response = await fetch(
    `https://platzi-music-api.herokuapp.com/search?q=${searchQuery}&type=${typeSearch}&limit=50`,
    { method: "GET" }
  );
  if (!response.ok) {
    console.log(response.status);
    return false;
  } else {
    const data = await response.json();
    return data.tracks.items;
  }
}

async function getChartsTracks() {
  const response = await fetch(
    `https://platzi-music-api.herokuapp.com/playlists/37i9dQZF1DXbbu94YBG7Ye/tracks?limit=10`,
    { method: "GET" }
  );
  if (!response.ok) {
    console.log(response.status);
    return false;
  } else {
    const data = await response.json();
    return data.items;
  }
}

export { getTracks, getChartsTracks };
