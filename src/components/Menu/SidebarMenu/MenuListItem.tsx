import classNames from "classnames";

import styles from "./SidebarMenu.module.scss";
import React from "react";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);

function MenuListItem({
  title,
  type,
  leftIcon,
  rightIcon,
  children
}: {
  title       ?: string;
  type        ?: string;
  leftIcon    ?: React.ReactNode;
  rightIcon   ?: React.ReactNode;
  children    ?: React.ReactNode;
}) {
  return <div className={cx(styles.menu_list_item)}>
  </div>;
}

export default MenuListItem;
