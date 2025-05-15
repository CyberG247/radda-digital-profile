
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function LanguageToggle() {
  const [language, setLanguage] = useState<"en" | "ha">("en");

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ha" : "en";
    setLanguage(newLanguage);
    // In a real implementation, this would trigger a language change throughout the app
  };

  return (
    <Button variant="outline" className="text-sm" onClick={toggleLanguage}>
      {language === "en" ? "Hausa" : "English"}
    </Button>
  );
}
