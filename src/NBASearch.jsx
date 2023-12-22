import React, { useState } from 'react';
import axios from 'axios';
import { Box } from '@chakra-ui/react';

export default function NBASearch() {
  const [playerName, setPlayerName] = useState('');
  const [playerStats, setPlayerStats] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://www.balldontlie.io/api/v1/players`,
        {
          params: {
            search: playerName,
          },
        }
      );

      if (response.data.data.length > 0) {
        const playerId = response.data.data[0].id;
        const statsResponse = await axios.get(
          `https://www.balldontlie.io/api/v1/season_averages`,
          {
            params: {
              player_ids: [playerId],
            },
          }
        );
        setPlayerStats(statsResponse.data.data[0]);
        setError(null);
      } else {
        setPlayerStats(null);
        setError('Player not found');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setPlayerStats(null);
      setError('Error fetching data');
    }
  };

  return (
    <Box
      color={'whitesmoke'}
      backgroundColor={'rgb(36, 126, 72)'}
      p={10}
      borderRadius={20}>
      <Box>
        <h1>Search Current NBA Player Stats! 📈</h1>
        <p>Example: Kevin Durant</p>
        <input
          type="text"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          placeholder="Enter NBA player name"
          style={{ padding: '10px', borderRadius: '10px' }}
        />
        <button onClick={handleSearch}>Search</button>
      </Box>

      {playerStats && (
        <Box>
          <h2>
            {playerStats.full_name} Current stats for: {playerName}🏀
          </h2>
          <Box
            display={'flex'}
            justifyContent={'space-evenly'}
            flexWrap={'wrap'}>
            <h3>Points per game: {playerStats.pts}</h3>
            <h3>Assists per game: {playerStats.ast}</h3>
            <h3>Rebounds per game: {playerStats.reb}</h3>
            <h3>Steals per game: {playerStats.stl}</h3>
          </Box>
        </Box>
      )}

      {error && <p>{error}</p>}
    </Box>
  );
}
