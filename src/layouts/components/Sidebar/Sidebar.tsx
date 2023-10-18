import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCocktail } from "@fortawesome/free-solid-svg-icons";

import styles from "./Sidebar.module.scss";
import MenuList from "@/components/Menu/SidebarMenu/MenuList";
import MenuListItem from "@/components/Menu/SidebarMenu/MenuListItem";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
// import { useTranslation } from "react-i18next";
i18next
  .use(initReactI18next)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "Welcome to React": "Welcome to React and react-i18next"
        }
      }
    },
    fallbackLng: "en",
  });

const cx = classNames.bind(styles);

function Sidebar() {
  // const { t } = useTranslation('sidebar');

  return <section className={cx(styles.wrapper)}>
      <MenuList>
        <MenuListItem 
          title = ""
          type = ""
          leftIcon = {<FontAwesomeIcon icon={faCocktail}/>}
          rightIcon = {<FontAwesomeIcon icon={faCocktail}/>}
        >
          <></>
        </MenuListItem>
      </MenuList>
    <div></div>
  </section>;
}

export default Sidebar;
