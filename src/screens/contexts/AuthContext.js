
import firebase from 'firebase/app';
import "firebase/auth"
import { auth } from "../../firebase";

export const register = async ({ email, password , name, phone}) => {
  console.log("nameeeeee", name)
  console.log("nameeeeee", phone)
  const resp = await firebase.auth()
    .createUserWithEmailAndPassword(email, password);
    console.log("11111111111111111111111",resp)
    console.log("22222222222222222", resp.uid)

    var user = {
      name: name,
      phone: phone,
      uid: resp.user.uid,
      email: resp.user.email
  }
  await writeUserData(user)
  return resp.user;
}
function writeUserData(user) {
  firebase.database().ref('users/' + user.uid).set(user).catch(error => {
      console.log("errorr",error.message)
  });
}

export const login = async ({ email, password }) => {
  const res = await firebase.auth()
    .signInWithEmailAndPassword(email, password);
    console.log("response",res);
  localStorage.setItem("uid",res.user.uid);
  localStorage.setItem("token", res.user.refreshToken);

  
  
  return res.user;

}