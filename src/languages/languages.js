import ua from "./ua";
import ru from "./ru";
import eng from "./eng";


export function calculate_age(dob) {
  const diff_ms = Date.now() - dob.getTime();
  const age_dt = new Date(diff_ms);

  return Math.abs(age_dt.getUTCFullYear() - 1970);
}

export const languageList = {
  ua: ua,
  ru: ru,
  eng: eng,
};

export function dataLanguages(lang) {
  return languageList?.[
    localStorage.getItem("language")
    || lang
    || "ua"
  ];
}