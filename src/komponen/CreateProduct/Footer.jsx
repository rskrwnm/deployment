import React from "react";

export default function Footer({ languageProps }) {
  const contentLanguage = {
    copyright: {
      en: "© 2023 Created By Reski Dwi Ramadhani Irawan",
      id: "© 2023 Dibuat oleh Reski Dwi Ramadhani Irawan",
    },
  };
  return (
    <footer className="py-4 text-center">
      <p>{languageProps == "inggris" ? contentLanguage.copyright.en : contentLanguage.copyright.id}</p>
    </footer>
  );
}
