import React, { createContext, useEffect, useState } from "react";

import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/Firebase.config";
import axios from "axios";
import { removeId } from "../Utilities/LocalStorage";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const [signInSuccess, setSignInSuccess] = useState(false);
  const [reFetch, setReFetch] = useState(false);
  const [user, setUser] = useState(null);
  const [navLoader, setNavLoader] = useState(false);
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const [loader, setLoader] = useState(true);
  const [count, setCount] = useState(1);

  const signUpUsers = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUsers = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const signInWithGitHub = () => {
    return signInWithPopup(auth, gitHubProvider);
  };

  // update profile
  const updateUserProfile = (name, photo) => {
    if (name && photo) {
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      }).then(() => {
        setUser({ displayName: name, photoURL: photo });
      });
    }
  };
  // logout
  const user_email = user?.email
    ? user?.email
    : user?.reloadUserInfo?.providerUserInfo[0].email;
  const logOut = () => {
    return signOut(auth).then((res) => {
      axios
        .delete(`http://localhost:5000/bookings/user/${user_email}`)
        .then((res) => {
          if (res.data.deletedCount) {
            axios
              .patch(`http://localhost:5000/hotelRooms/user/AB`, {
                availability: true,
              })
              .then((res) => {});
          }
        });
      removeId(10, "offer-key");
    });
  };
  useEffect(() => {
    setNavLoader(true);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const email = currentUser?.email
        ? currentUser?.email
        : currentUser?.reloadUserInfo?.providerUserInfo[0].email || user?.email
        ? user?.email
        : user?.reloadUserInfo?.providerUserInfo[0].email;

      setUser(currentUser);
      setNavLoader(false);
      setLoader(false);

      if (currentUser) {
        setReFetch(true);
        axios
          .post(
            "http://localhost:5000/jwt",
            { email },
            { withCredentials: true }
          )
          .then((res) => {
            console.log(res.data);
            if (res.data.success) {
              console.log("token created");
            }
          });
      } else {
        axios
          .post(
            "http://localhost:5000/logout",
            { email },
            { withCredentials: true }
          )
          .then((res) => {
            console.log(res.data);
          });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    signUpUsers,
    navLoader,
    loader,
    updateUserProfile,
    logOut,
    signInUsers,
    signInWithGoogle,
    signInWithGitHub,
    setCount,
    count,
    setReFetch,
    reFetch,
    signUpSuccess,
    setSignUpSuccess,
    signInSuccess,
    setSignInSuccess,
  };
  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
