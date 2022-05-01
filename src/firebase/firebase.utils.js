import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxvU8oRWVP_kyJykd8km6vBBdDQSoHOoc",
  authDomain: "crwndb-53011.firebaseapp.com",
  projectId: "crwndb-53011",
  storageBucket: "crwndb-53011.appspot.com",
  messagingSenderId: "426894745226",
  appId: "1:426894745226:web:2733b11a8f79b3d376d773",
  measurementId: "G-40Y0GWWRRF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);

// const firestore = getFirestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(db, "users", userAuth.uid);
  const userSnap = await getDoc(userRef);

  //   IF snapshot doesnt exist create a piece of data
  if (!userSnap.exists()) {
    const createdAt = new Date();
    try {
      await setDoc(doc(db, "users", userAuth.uid), {
        displayName: userAuth.displayName,
        email: userAuth.email,
        date: createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  console.log(userRef);
  return userRef;
};

// const provider = new GoogleAuthProvider();

// export const signInWithGoogle = () => {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       console.log(result);
//       const name = result.user.displayName;
//       const email = result.user.email;
//       const profilePic = result.user.photoURL;

//       localStorage.setItem("name", name);
//       localStorage.setItem("email", email);
//       localStorage.setItem("profilePic", profilePic);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
