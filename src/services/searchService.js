async function getTracks(searchQuery, typeSearch) {
  const response = await fetch(
    `https://deezerdevs-deezer.p.rapidapi.com/search?q=${typeSearch}:${searchQuery}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "2aacef991cmsh8b65c70ca31e1fep10fb0cjsne2ce4da3b708",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      },
    }
  );
  if (!response.ok) {
    console.log(response.status);
    return false;
  } else {
    const data = await response.json();
    return data.data;
  }
}

export default getTracks;
