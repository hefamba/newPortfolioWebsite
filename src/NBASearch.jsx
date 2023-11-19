import React, { useState } from 'react';
import axios from 'axios';

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
    <div>
      <input
        type="text"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        placeholder="Enter NBA player name"
      />
      <button onClick={handleSearch}>Search</button>

      {playerStats && (
        <div>
          <h2>{playerStats.player.full_name} Stats</h2>
          <p>Points per game: {playerStats.pts}</p>
          <p>Assists per game: {playerStats.ast}</p>
          {/* Add more stats as needed */}
        </div>
      )}

      {error && <p>{error}</p>}
    </div>
  );
}
