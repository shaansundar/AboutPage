import db from "../firebaseData/setup"

const collectionID = "EmailCollection"; // Firebase collection  
export const saveEmail = async event => {
    var email = document.getElementById("hero-field").value; // GET input data
    document.getElementById("hero-field").value = ""; // Clear input form
    try {
        const doc = db.collection(collectionID).doc(email);
        pro = await doc.get();

        if(!pro.exists) { // Check if said email already exists on firebase
            await doc.set({email: email,}); //POST request to firebase
        }
        
    } catch (err) {
        console.log(err);
    }
}

