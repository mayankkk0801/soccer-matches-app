fetch('http://localhost:3000/football_match')
  .then(response => response.json())
  .then(data => {
    const leaguesContainer = document.getElementById('leagues');
    leaguesContainer.innerHTML = '';

    data.forEach(entry => {
      const div = document.createElement('div');
      div.innerHTML = `
        <h3>${entry.leagueName} (${entry.type})</h3>
        <p><strong>Country:</strong> ${entry.country}</p>
        <p><strong>Seasons:</strong> ${entry.seasons.join(', ')}</p>
        <img src="${entry.logo}" alt="${entry.leagueName} logo" width="50">
        <hr/>
      `;
      leaguesContainer.appendChild(div);
    });
  })
  .catch(err => {
    console.error('Error loading leagues:', err);
    alert('Failed: ' + err);  // <-- This will pop up the error
    document.getElementById('leagues').innerText = 'Failed to load data.';
  });
