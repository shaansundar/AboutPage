import {db} from '../config/setup'
import { emailCollection } from './constants';

async function saveEmail(email) {
    try {
        const doc = db.collection(emailCollection).doc(email);
        let pro = await doc.get();

        if(!pro.exists) { // Check if said email already exists on firebase
            await doc.set({email: email,}); //POST request to firebase
            console.log('Email ', email)
        }
        return true
    } catch (err) {
        return err
    }
}

export default saveEmail