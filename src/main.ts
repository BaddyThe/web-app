import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { checkToken } from "./user/token";
import System from "./user/system";
import ip from "./user/ip";

const firebaseConfig = {
  apiKey: "AIzaSyBzHS0ps6hoZuxi1LDNV9cLH9Cpc7AwBlE",
  authDomain: "info-ha.firebaseapp.com",
  databaseURL: "https://info-ha-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "info-ha",
  storageBucket: "info-ha.appspot.com",
  messagingSenderId: "995944206089",
  appId: "1:995944206089:web:413add6dc9b015a0ff4dd8",
  measurementId: "G-DKSDSZ4RRJ"
};


// Firebase initialisieren
initializeApp(firebaseConfig);

// Firestore-Referenz
const db = getFirestore();

const createDataObject = async () => {
  try {
    const ipData = await ip();
    const token1 = localStorage.getItem(`userToken`)

    const daten = {
      info: System, // Note: replace 'System' with the actual information you want to include
      ip: ipData,
      token: token1,
    };

    console.log('Data:', daten);

    // Now you can use 'daten' or its properties outside the function
    // ... do something with 'daten'

    // Log 'daten' here or perform further actions
    //console.log('Outside function:', daten);

    // Save user info in the database
    saveUserInfoInDb(daten);
  } catch (error) {
    console.error('Error fetching IP data:', error);
  }
};

function saveUserInfoInDb(data: object) {
  // Sammlungsreferenz
  const datenbankSammlung = collection(db, "userData");

  // Daten hinzufügen
  addDoc(datenbankSammlung, data)
    .then((dokumentReferenz) => {
      console.log("Daten erfolgreich hinzugefügt mit der ID:", dokumentReferenz.id);
    })
    .catch((fehler) => {
      console.error("Fehler beim Hinzufügen der Daten:", fehler);
    });
}


function main() {
  checkToken();
  createDataObject();
}

main();

