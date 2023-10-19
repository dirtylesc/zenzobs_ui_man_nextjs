import classNames from "classnames";

import styles from "./SidebarMenu.module.scss";
import React from "react";

const cx = classNames.bind(styles);
type Props = {
  title     ?: string;
  children  : React.ReactNode;
}

function MenuList({
  title,
  children,
}: Props) {
  return (
    <div className={cx(styles.menu_list)}>
      {title && <h5 className={cx(styles.menu_list__title)}>{title}</h5>}
      <ul className={cx(styles.menu_list__content)}>{children}</ul>
    </div>
  );
}

export default MenuList;
