var grafico = null;

function calcolaVitaSprecata() {
  // Recupera i valori inseriti dall'utente
  var tiktokValue = parseFloat(document.getElementById('tiktok').value);
  var instagramValue = parseFloat(document.getElementById('instagram').value);
  var netflixValue = parseFloat(document.getElementById('netflix').value);

  // Calcola i totali annuali per ogni attività
  var tiktokTotal = tiktokValue * 365;
  var instagramTotal = instagramValue * 365;
  var netflixTotal = netflixValue * 365;

  // Calcola il totale complessivo delle ore in un anno
  var totalHours = tiktokTotal + instagramTotal + netflixTotal;

  // Calcola le ore e i minuti sprecati
  var hours = Math.floor(totalHours);
  var minutes = Math.floor((totalHours - hours) * 60);

  // Mostra il totale delle ore sprecate in un anno nel formato ore e minuti
  var wastedTimeMessage = "In un'anno hai sprecato " + hours + " ore";
  if (minutes > 0) {
    wastedTimeMessage += " e " + minutes + " minuti";
  }
  document.getElementById('hoursMessage').textContent = wastedTimeMessage;

  // Calcola il totale delle ore in base agli anni di utilizzo dei social
  var yearsOfUsage = parseFloat(document.getElementById('yearsOfUsage').value);
  var totalHoursWithUsage = totalHours * yearsOfUsage;

  // Calcola la percentuale di vita sprecata
  var wastedPercentage = (totalHoursWithUsage / (80 * 365 * 24)) * 100;

  // Mostra il messaggio con la percentuale di vita sprecata
  var wastedMessage = "Hai utilizzato il " + wastedPercentage.toFixed(2) + "% della tua vita per usare TikTok, Instagram e Netflix";
  document.getElementById('wastedMessage').textContent = wastedMessage;

  // Resto del codice...

  // Crea un array di etichette per il grafico
  var labels = ['TikTok', 'Instagram', 'Netflix'];

  // Crea un array di dati per il grafico
  var data = [tiktokTotal, instagramTotal, netflixTotal];

  // Se il grafico esiste già, distruggilo prima di generare uno nuovo
  if (grafico !== null) {
    grafico.destroy();
  }

  // Crea il contesto del grafico utilizzando il canvas
  var ctx = document.getElementById('grafico').getContext('2d');

  // Crea un nuovo grafico a linee utilizzando Chart.js
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

function resetta() {
  document.getElementById('tiktok').value = '';
  document.getElementById('instagram').value = '';
  document.getElementById('netflix').value = '';
  document.getElementById('age').value = '';
  document.getElementById('yearsOfUsage').value = '';
  document.getElementById('message').textContent = '';

  if (grafico !== null) {
    grafico.destroy();
    grafico = null;
  }
}
