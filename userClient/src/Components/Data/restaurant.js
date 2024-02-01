const Restaurant = {
    method: 'POST',
    url: 'https://restaurants-deliver-to-me.p.rapidapi.com/',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'a16e4d63d4msh45f461077a0fdbbp10beebjsn96b9cd7a9392',
      'X-RapidAPI-Host': 'restaurants-deliver-to-me.p.rapidapi.com'
    },
    data: {
      input: {
        latitude: '51.509865',
        longitude: '-0.118092'
      }
    }
  };
export default Restaurant;