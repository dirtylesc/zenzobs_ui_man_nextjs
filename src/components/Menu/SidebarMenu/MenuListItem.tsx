'use client'

import React, { 
  MouseEventHandler, 
  useEffect, 
  useState 
}                     from "react";
import { useLocale }  from "next-intl";
import classNames     from "classnames";

import styles         from "./SidebarMenu.module.scss";
import Link from "next/link";

const cx    = classNames.bind(styles);
type Props  = {
  title       : string;
  type        ?: string;
  path        ?: string;
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
  path,
  leftIcon,
  rightIcon,
  onClick,
  children
}: Props) {
  const [styleObj, setStyleObj] = useState(getStyleObj());
  const locale                  = useLocale()

  useEffect(() => {
    setStyleObj(getStyleObj(type))
  }, [type])

  return (
    <li className={cx(...styleObj.wrapper)}>
      <Link href={`/${locale}/${path}`}>
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
      </Link>
    </li>
  );
}

export default MenuListItem;
