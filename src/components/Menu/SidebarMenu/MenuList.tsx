import classNames from "classnames";

import styles from "./SidebarMenu.module.scss";
import React from "react";

const cx = classNames.bind(styles);

function MenuList({
  title,
  children,
}: {
  title     ?: string;
  children  : React.ReactNode;
}) {
  return (
    <div className={cx(styles.menu_list)}>
      {title && <h5 className={cx(styles.menu_list__title)}>{title}</h5>}
      <div className={cx(styles.menu_list__content)}>{children}</div>
    </div>
  );
}

export default MenuList;
