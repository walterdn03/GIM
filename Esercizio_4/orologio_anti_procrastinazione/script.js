// Funzione per ottenere l'ora attuale formattata come HH:MM:SS
function getCurrentTime() {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');
    return hours + ':' + minutes + ':' + seconds;
  }
  
  // Funzione per calcolare il tempo rimanente della giornata in base all'orario attuale
  function calculateRemainingTime() {
    var now = new Date();
    var currentHour = now.getHours();
    var currentMinute = now.getMinutes();
    var remainingHours = 24 - currentHour;
    var remainingMinutes = 60 - currentMinute;
  
    if (remainingMinutes === 60) {
      remainingHours += 1;
      remainingMinutes = 0;
    }
  
    return { hours: remainingHours, minutes: remainingMinutes };
  }
  
  // Funzione per calcolare il tempo sprecato
  function calculate() {
    var socialHours = parseFloat(document.getElementById('social-hours').value);
    var breakHours = parseFloat(document.getElementById('break-hours').value);
  
    var totalMinutes = (socialHours + breakHours) * 60;
    var hours = Math.floor(totalMinutes / 60);
    var minutes = Math.floor(totalMinutes % 60);
  
    var wastedTimeText = 'Hai sprecato: <br> ' + hours + ' ore';
    if (minutes > 0) {
      wastedTimeText += ' e ' + minutes + ' minuti';
    }
  
    var remainingTime = calculateRemainingTime();
  
    document.getElementById('wasted-time').innerHTML = wastedTimeText;
    document.getElementById('remaining-time').innerHTML = 'Tempo rimanente:<br>' + remainingTime.hours + ' ore e ' + remainingTime.minutes + ' minuti';
  
    // Rimuovi le domande e gli input
    document.getElementById('input-group-social').style.display = 'none';
    document.getElementById('input-group-break').style.display = 'none';
    document.getElementById('calculate-btn').style.display = 'none';
  }
  
  
  
  // Funzione per aggiornare l'orologio e il tempo rimanente ogni secondo
  function updateClock() {
    var currentTime = getCurrentTime();
    var remainingTime = calculateRemainingTime();
  
    document.getElementById('clock').textContent = currentTime;
  // Funzione per calcolare il tempo sprecato
  function calculate() {
    var socialHours = parseFloat(document.getElementById('social-hours').value);
    var breakHours = parseFloat(document.getElementById('break-hours').value);
  
    var totalMinutes = (socialHours + breakHours) * 60;
    var hours = Math.floor(totalMinutes / 60);
    var minutes = Math.floor(totalMinutes % 60);
  
    var wastedTimeText = 'Hai sprecato ' + hours + ' ore';
    if (minutes > 0) {
      wastedTimeText += ' e ' + minutes + ' minuti';
    }
  
    var remainingTime = calculateRemainingTime();
  
    document.getElementById('wasted-time').innerHTML = wastedTimeText;
    document.getElementById('remaining-time').innerHTML = 'Tempo rimanente:<br>' + remainingTime.hours + ' ore e ' + remainingTime.minutes + ' minuti';
  
    // Rimuovi le domande e gli input
    document.getElementById('input-group-social').style.display = 'none';
    document.getElementById('input-group-break').style.display = 'none';
    document.getElementById('calculate-btn').style.display = 'none';
  }
  
    setTimeout(updateClock, 1000);
  }
  
  // Aggiorna l'orologio all'avvio
  updateClock();
  