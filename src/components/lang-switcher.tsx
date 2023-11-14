'use client'
import { NextPageContext } from "next";
import useLanguageSwitcher, {
  LanguageDescriptor,
} from "@/hooks/useLanguageSwitcher";
import React from "react";

export type LanguageSwitcherProps = {
  context?: NextPageContext;
};

export const LanguageSwitcher = ({ context }: LanguageSwitcherProps = {}) => {
  const { currentLanguage, switchLanguage, languageConfig } =
    useLanguageSwitcher({ context });

  if (!languageConfig) {
    return null;
  }

  return (
    <div className="text-center notranslate">
      {languageConfig.languages.map((ld: LanguageDescriptor, i: number) => (
        <React.Fragment key={i}>
          {currentLanguage === ld.name ||
          (currentLanguage === "auto" &&
            languageConfig.defaultLanguage === ld.name) ? (
            <span className="mx-3 text-orange-300">{ld.title}</span>
          ) : (
            <a
              onClick={switchLanguage(ld.name)}
              className="mx-3 text-blue-300 cursor-pointer hover:underline"
              role="button"
            >
              {ld.title}
            </a>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
