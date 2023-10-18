import classNames from "classnames";

import styles from "./SidebarMenu.module.scss";

const cx = classNames.bind(styles);

function Menu() {
  return <div className={cx(styles.wrapper)}></div>;
}

export default Menu;
