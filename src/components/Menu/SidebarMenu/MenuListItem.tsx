'use client'

import React, { 
  Fragment,
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
  title       ?: string;
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
  ],
  title: [
    styles.menu_list_item__title
  ],
  leftIcon: [
    styles.menu_list_item__icon
  ],
  rightIcon: [
    styles.menu_list_item__right_icon
  ],
  children: [
    styles.menu_list_item__children
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
  const [styleObj, setStyleObj]       = useState(getStyleObj());
  const [cNameAppend, setCNameAppend] = useState("")
  const locale = useLocale()

  useEffect(() => {
    setStyleObj(getStyleObj(type))
  }, [type])

  const handleOnClickDefault = () => {
    if(cNameAppend) setCNameAppend("")
    else setCNameAppend(styles.show_child)
  }

  return (
    <li className={cx(...styleObj.wrapper, cNameAppend)} onClick={onClick || handleOnClickDefault}>
      <Link href={path ? `/${locale}/${path}` : "#"} >
        <div>
          {
            leftIcon && (
              <div className={cx(...styleObj.leftIcon)}>
                {leftIcon}
              </div>
            )
          }
          <span className={cx(...styleObj.title)}>{title}</span>
          {
            rightIcon && (
              <div className={cx(...styleObj.rightIcon)}>
                {rightIcon}
              </div>
            )
          }
        </div>
      </Link>
      {children && <ul className={cx(...styleObj.children)}>{children}</ul>}
    </li>
  );
}

export default MenuListItem;
