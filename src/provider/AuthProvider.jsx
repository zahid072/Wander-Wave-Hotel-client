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
        .delete(`https://assignment-11-server-mocha-nine.vercel.app/bookings/user/${user_email}`)
        .then((res) => {
          if (res.data.deletedCount) {
            axios
              .patch(`https://assignment-11-server-mocha-nine.vercel.app/hotelRooms/user/AB`, {
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
      setUser(currentUser);
      setNavLoader(false);
      setLoader(false);
      const email = currentUser?.email
        ? currentUser?.email
        : currentUser?.reloadUserInfo?.providerUserInfo[0].email;
      
       
      if (currentUser) {
        axios
          .post(
            "https://assignment-11-server-mocha-nine.vercel.app/jwt",
            { email },
            { withCredentials: true }
          )
          .then((res) => {
            if (res.data.success) {
            }
          });
      } else {
        axios
          .post(
            "https://assignment-11-server-mocha-nine.vercel.app/logout",
            { email },
            { withCredentials: true }
          )
          .then((res) => {
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
