// ip.ts

async function ip(): Promise<any> {
  try {
    const response = await fetch('https://ipinfo.io/json');
    const data = await response.json();
    return data;
    
  } catch (error) {
    console.error('Fehler beim Abrufen der IP-Adresse:', error);
    throw error; // Optional: Fehler weiterwerfen, um sie in anderen Teilen des Codes zu behandeln
  }
}

export default ip;


