import React      from "react";
import classNames from "classnames";

import styles     from "./SidebarMenu.module.scss";

const cx = classNames.bind(styles);
type Props = {
  title     ?: string;
  style     ?: {
    wrapper ?: string;
    list    ?: string;
  };
  children  : React.ReactNode;
}

function MenuList({
  title,
  style,
  children,
}: Props) {
  console.log('====================================');
  console.log(style?.wrapper);
  console.log('====================================');

  return (
    <div className={style?.wrapper}>
      {title && <h5 className={cx(styles.menu_list__title)}>{title}</h5>}
      <ul className={cx(styles.menu_list__content, style?.list)}>{children}</ul>
    </div>
  );
}

export default MenuList;
