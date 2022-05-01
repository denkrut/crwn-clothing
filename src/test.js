import firebase from "firebase/app";

import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("mnjAQzzDVLvF3ea8Racr")
  .collection("cartItems")
  .doc("8qCxcg92KVCSps9tFlBi");

firestore.doc("/users/mnjAQzzDVLvF3ea8Racr/cartItems/8qCxcg92KVCSps9tFlBi");
firebase.collection("/users/mnjAQzzDVLvF3ea8Racr/cartItems");
