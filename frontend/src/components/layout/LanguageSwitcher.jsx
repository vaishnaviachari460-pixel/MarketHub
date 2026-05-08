import React, { useState } from "react";

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("EN");

  const languages = [
    { code: "EN", label: "English" },
    { code: "HI", label: "हिन्दी" },
    { code: "KN", label: "ಕನ್ನಡ" },
    { code: "ML", label: "മലയാളം" },
    { code: "TA", label: "தமிழ்" },
    { code: "TE", label: "తెలుగు" },
  ];

  const handleSelect = (code) => {
    setLang(code);
    setOpen(false);
  };

  return (
    <div className="relative">
      {/* Button */}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 cursor-pointer text-white hover:text-yellow-400"
      >
        <span className="text-lg">🌐</span>
        <span className="text-sm font-medium">{lang}</span>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg z-50">
          {languages.map((l) => (
            <div
              key={l.code}
              onClick={() => handleSelect(l.code)}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
            >
              {l.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}