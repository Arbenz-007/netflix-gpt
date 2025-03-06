import React, { useEffect } from "react";
import usericon from "../assets/usericon.jpg";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from "../utils/constants";


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  
  useEffect(() =>{
    const unsubsribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName}));
        navigate("/browse");

      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when a component unmounts
    return () => unsubsribe();
  }, []);

  return (
    <div className="absolute h-20 px-8 bg-gradient-to-b from-black py-2 z-10 w-full flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />
      {user && (
         <div className="flex p-3">
          <img className="w-12 h-12" alt="usericon" src={usericon} />
          <button
            onClick={handleSignOut}
            className="font-bold text-white cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
