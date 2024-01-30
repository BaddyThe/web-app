function generateToken(length: number) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
    // Funktion zum Speichern des Tokens im LocalStorage
  function saveTokenToLocalStorage(token: string) {
    localStorage.setItem('userToken', token);
  }

export function checkToken() {
    var storedToken = localStorage.getItem('userToken');
    if (storedToken) {
        //console.log(storedToken + 'ist im LocalStorage vorhanden');
    } else {
        var newToken = generateToken(64);
        saveTokenToLocalStorage(newToken);
        //console.log('Neues Token generiert und im LocalStorage gespeichert: ' + newToken);
    }
}

