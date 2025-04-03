import React, { useEffect, useState } from "react";
import usericon from "../assets/usericon.jpg";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

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


  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when a component unmounts
    return () => unsubsribe();
  }, []);

  const handleGPtSearchClick = () => {
    //toggle Gpt search button
    dispatch(toggleGptSearchView());
  };

  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);

  const handleLanguageChange = (e) =>{
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className="absolute h-20 px-8 bg-gradient-to-b from-black py-2 z-10 w-full flex flex-col md:flex-row md:justify-between ">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-3">
          {showGptSearch && (<select className="text-white rounded-lg bg-gray-900" onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>)}
          <button
            className="py-2 px-4 bg-amber-100 rounded-3xl mx-4 cursor-pointer"
            onClick={handleGPtSearchClick}
          >
            {!showGptSearch?"GPT search" : "Home"}
          </button>
          <img
            className="w-12 h-12 rounded-full mx-2"
            alt="usericon"
            src={usericon}
          />
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
