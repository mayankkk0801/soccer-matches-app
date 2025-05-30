const axios = require('axios');

const getFootballLeagues = async (req, res) => {
  try {
    const config = {
      method: 'get',
      url: 'https://v3.football.api-sports.io/leagues',
      headers: {
        'x-rapidapi-key': process.env.FOOTBALL_API_KEY,
        'x-rapidapi-host': 'v3.football.api-sports.io',
      },
    };

    const response = await axios(config);

    const trimmed = response.data.response.slice(0, 20).map(entry => ({
      leagueName: entry.league.name,
      type: entry.league.type,
      logo: entry.league.logo,
      country: entry.country.name,
      seasons: entry.seasons.map(season => season.year),
    }));

    res.json(trimmed);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch football data' });
  }
};

module.exports = { getFootballLeagues };
