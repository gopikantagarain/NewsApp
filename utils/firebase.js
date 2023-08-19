import firebase from 'firebase/app';
import 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD5tlFyTtS03UfOXCc2HgkJo_S_39_CKdM",
    authDomain: "mynewsapp-3a5f7.firebaseapp.com",
    projectId: "mynewsapp-3a5f7",
    storageBucket: "mynewsapp-3a5f7.appspot.com",
    messagingSenderId: "986875211919",
    appId: "1:986875211919:web:b415822d36da8c5f8f40fa",
    measurementId: "G-6V0X5Z2RG3"
    };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();

export const fetchArticles = async () => {
  const snapshot = await firestore.collection('articles').get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};