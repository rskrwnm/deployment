import React from "react";
import '../styles/style1.css';
import { useEffect, useState } from "react";
import Header from "../komponen/CreateProduct/Header";
import Main from "../komponen/CreateProduct/Main";
import Footer from "../komponen/CreateProduct/Footer";
import LanguageChangeButton from "../komponen/CreateProduct/buttons/LanguageChangeButton";

export default function CreateProduct() {
  const [welcome, setWelcome] = useState(
    <section className="fixed right-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-gray-200/50 opacity-100 backdrop-blur-md transition-all duration-500">
      <p className="text-5xl sm:text-7xl md:text-9xl">HI, SELAMAT DATANG DI CREATE PRODUCT!</p>
    </section>
  );

  useEffect(() => {
    setTimeout(() => {
      setWelcome(
        <section className="fixed right-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-gray-200/50 opacity-0 backdrop-blur-md transition-all duration-500">
          <p className="text-5xl sm:text-7xl md:text-9xl">HI, WELCOME TO CREATE PRODUCT!</p>
        </section>
      );
      setTimeout(() => {
        setWelcome("");
      }, 550);
    }, 1000);
  }, []);

  const [language, setLanguage] = useState("inggris");
  return (
    <>
      {welcome}
      <Header
        languageProps={language}
        languageChangeButtonProps={
          <LanguageChangeButton
            languageProps={language}
            onClickENProps={() => {
              setLanguage("inggris");
            }}
            onClickIDProps={() => {
              setLanguage("Indonesia");
            }}
          />
        }
      />
      <Main languageProps={language} />
      <Footer languageProps={language} />
    </>
  );
}
