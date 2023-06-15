var grafico = null;

function calcolaVitaSprecata() {
  // Recupera i valori inseriti dall'utente
  var tiktokValue = parseFloat(document.getElementById('tiktok').value);
  var instagramValue = parseFloat(document.getElementById('instagram').value);
  var netflixValue = parseFloat(document.getElementById('netflix').value);
  var age = parseFloat(document.getElementById('age').value);
  var yearsOfUsage = parseFloat(document.getElementById('yearsOfUsage').value);

  // Calcola i totali annuali per ogni attività
  var tiktokTotal = tiktokValue * 365;
  var instagramTotal = instagramValue * 365;
  var netflixTotal = netflixValue * 365;

  // Calcola il totale complessivo delle ore in un anno
  var totalHours = tiktokTotal + instagramTotal + netflixTotal;

  // Calcola il totale delle ore in base agli anni di utilizzo dei social
  var totalHoursWithUsage = totalHours * yearsOfUsage;

  // Calcola la percentuale di vita sprecata
  var wastedPercentage = (totalHoursWithUsage / (80 * 365 * 24)) * 100;

  // Mostra il messaggio con la percentuale di vita sprecata
  var message = "Hai passato il " + wastedPercentage.toFixed(2) + "% della tua vita su TikTok, Instagram e Netflix.";
  document.getElementById('message').textContent = message;

  // Calcola il tempo sprecato in base ai dati inseriti
  var seconds = Math.floor(totalHoursWithUsage * 60 * 60);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);
  var years = Math.floor(days / 365);

  // Calcola il tempo sprecato rimanente dopo gli anni completi
  days = days % 365;
  hours = hours % 24;
  minutes = minutes % 60;
  seconds = seconds % 60;

  // Formatta il tempo sprecato come stringa
  var formattedTime = years + " anni, " + days + " giorni, " + hours + " ore, " + minutes + " minuti, " + seconds + " secondi";

  // Mostra il tempo sprecato nell'orologio
  document.getElementById('clock').textContent = "Hai sprecato " + formattedTime;
}

function resetta() {
  document.getElementById('tiktok').value = '';
  document.getElementById('instagram').value = '';
  document.getElementById('netflix').value = '';
  document.getElementById('age').value = '';
  document.getElementById('yearsOfUsage').value = '';
  document.getElementById('message').textContent = '';
  document.getElementById('clock').textContent = '';
}