var grafico = null;

function calcolaVitaSprecata() {
  var tiktokValue = parseFloat(document.getElementById('tiktok').value);
  var instagramValue = parseFloat(document.getElementById('instagram').value);
  var netflixValue = parseFloat(document.getElementById('netflix').value);
  var age = parseInt(document.getElementById('age').value);
  var averageLifeExpectancy = 80; // Aspettativa di vita media in anni

  var tiktokTotal = tiktokValue * 365;
  var instagramTotal = instagramValue * 365;
  var netflixTotal = netflixValue * 365;

  var totalHours = tiktokTotal + instagramTotal + netflixTotal;

  var percentage = (totalHours / (365 * averageLifeExpectancy)) * 100;

  var message = "Hai sprecato il " + percentage.toFixed(2) + "% della tua vita.";
  document.getElementById('message').textContent = message;

  var labels = ['TikTok', 'Instagram', 'Netflix'];
  var data = [tiktokTotal, instagramTotal, netflixTotal];

  if (grafico !== null) {
    grafico.destroy();
  }

  var ctx = document.getElementById('grafico').getContext('2d');

  grafico = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Ore nell\'anno',
        data: data,
        backgroundColor: 'rgba(0, 123, 255, 0.5)',
        borderColor: 'rgba(0, 123, 255, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function reset() {
  document.getElementById('tiktok').value = '';
  document.getElementById('instagram').value = '';
  document.getElementById('netflix').value = '';
  document.getElementById('age').value = '';
  document.getElementById('message').textContent = '';

  if (grafico !== null) {
    grafico.destroy();
    grafico = null;
  }
}
