import i18n from "./i18";
import { I18nextProvider } from "react-i18next";

const LanguageProvider = ({ children }) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default LanguageProvider;
