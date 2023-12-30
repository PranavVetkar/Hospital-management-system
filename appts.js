import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getFirestore, doc, addDoc, getDoc, collection } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js'

const APPT_COLL = 'appointments';

const firebaseConfig = {
    apiKey: "AIzaSyBC9w5PVk1ciQGKmB999fA3Q2SDNzA6TfA",
    authDomain: "pblm-2289c.firebaseapp.com",
    projectId: "pblm-2289c",
    storageBucket: "pblm-2289c.appspot.com",
    messagingSenderId: "1077296810494",
    appId: "1:1077296810494:web:f9c144c36b20742e5158af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// reference your database
const db = getFirestore(app);

async function addAppointment(apptInfo) {
    const result = await addDoc(collection(db, APPT_COLL), apptInfo);
    alert('Appointment booked successfully!');
}

// handle form submit
function handleFormSubmit() {
    const apptForm = document.getElementById("appointmentForm");
    apptForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const appt = Object.fromEntries(formData)
        addAppointment(appt)
      });
}

handleFormSubmit();

// get reference to your doc using ID
/* const docRef = doc(db, APPT_COLL, 'BKnNaNdx5r492wuYZZ97');
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
} else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
} */