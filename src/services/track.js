async function getTracks(searchQuery, typeSearch) {
  const apiUrl = "https://platzi-music-api.herokuapp.com";
  const response = await fetch(
    `${apiUrl}/search?q=${searchQuery}&type=${typeSearch}`
  );
  if (!response.ok) {
    console.log(response.status);
    return false;
  } else {
    const data = await response.json();
    return data.tracks.items;
  }
}

export default getTracks;
