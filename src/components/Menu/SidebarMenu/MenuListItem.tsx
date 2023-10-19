'use client'

import React, { MouseEventHandler, useEffect, useState } from "react";
import classNames from "classnames";

import styles from "./SidebarMenu.module.scss";

const cx    = classNames.bind(styles);
type Props  = {
  title       : string;
  type        ?: string;
  leftIcon    ?: React.ReactNode;
  rightIcon   ?: React.ReactNode;
  onClick     ?: MouseEventHandler;
  children    ?: React.ReactNode;
}
const getStyleObj = (type ?: string) => ({
  wrapper: [
    styles.menu_list_item,
    type === 'child' && styles.menu_list_item_child, 
    'list-none'
  ]
})

function MenuListItem({
  title,
  type = 'child',
  leftIcon,
  rightIcon,
  onClick,
  children
}: Props) {
  const [styleObj, setStyleObj] = useState(getStyleObj());

  useEffect(() => {
    setStyleObj(getStyleObj(type))
  }, [type])

  return (
    <li className={cx(...styleObj.wrapper)}>
      <button onClick={onClick}>
        <div>
          {
            leftIcon && (
              <div className={cx(styles.menu_list_item__icon)}>
                {leftIcon}
              </div>
            )
          }
          <span className={cx(styles.menu_list_item__title)}>{title}</span>
          {
            rightIcon && (
              <div className={cx(styles.menu_list_item__right_icon)}>
                {rightIcon}
              </div>
            )
          }
        </div>
        <ul>{children}</ul>
      </button>
    </li>
  );
}

export default MenuListItem;
