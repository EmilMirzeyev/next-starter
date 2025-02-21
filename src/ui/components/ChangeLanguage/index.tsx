"use client";
import { ChangeLanguageEnum } from "@/data/enum/change_language.enum";
import ChangeLanguageFactory from "./change_language.factory";
import { ChangeLanguageType } from "./change_language.type";

const ChangeLanguage = ({
  variant = ChangeLanguageEnum.DROPDOWN,
}: ChangeLanguageType) => {
  const { renderChangeLanguage } = ChangeLanguageFactory();

  return renderChangeLanguage[variant]
};

export default ChangeLanguage;
