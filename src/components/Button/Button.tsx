'use client'

import { 
  MouseEventHandler 
}                 from "react";
import { 
  useTranslations
}                 from "next-intl";
import Image      from "next/image";

import classNames from "classnames";
import Icon       from "@mdi/react";

import styles     from "./Button.module.scss";

const cx    = classNames.bind(styles);
type  Props = {
  icon      : {
    src     ?: string;
    alt     ?: string;
    path    ?: string;
  },
  onClick   ?: MouseEventHandler,

  //...props

};

function Button({ 
  icon,
  onClick,
  ...props
}: Props) {
  const t         = useTranslations();
  let   IconComp  = null;

  if(icon?.path) {
    IconComp = <Icon path={icon.path} size={1}/>;
  } else if(icon?.src) {
    IconComp = <Image src={icon.src} alt={t(icon.alt)} width={32} height={32} />
  }

  return (
    <button className={cx(styles.wrapper)} onClick={onClick}>
      {IconComp}
    </button>
  );
}

export default Button;
