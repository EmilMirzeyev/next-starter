export const i18n = {
  defaultLocale: "az",
  locales: ["az", "en", "ru"],
};

export type LocaleType = (typeof i18n)["locales"][number];
