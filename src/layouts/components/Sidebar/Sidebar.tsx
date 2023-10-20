'use client'

import { useTranslations }      from "next-intl";
import classNames               from "classnames";
import Icon                     from '@mdi/react';
import { 
  mdiAccountOutline, 
  mdiArchiveArrowDownOutline, 
  mdiArchiveArrowUpOutline, 
  mdiArchiveCheckOutline, 
  mdiPostOutline, 
  mdiRobotAngryOutline 
}                               from '@mdi/js';

import constConfig              from "@/constants";
import styles                   from "./Sidebar.module.scss";
import MenuList                 from "@/components/Menu/SidebarMenu/MenuList";
import MenuListItem             from "@/components/Menu/SidebarMenu/MenuListItem";

const cx = classNames.bind(styles);

const menu = [
  {
    title     : constConfig.groups.AUT,
    type      : 'parent',
    leftIcon  : mdiAccountOutline,
    rightIcon : mdiRobotAngryOutline,
    children  : [
      {
        title : constConfig.groups.AUT_USER,
        path  : constConfig.paths.AUT_USER
      },
      {
        title : constConfig.groups.AUT_AUTH_SERVICE,
        path  : constConfig.paths.AUT_AUTH_SERVICE
      },
      {
        title : constConfig.groups.AUT_ROLE,
        path  : constConfig.paths.AUT_ROLE
      },
      {
        title : constConfig.groups.AUT_RIGHT,
        path  : constConfig.paths.AUT_RIGHT
      },
    ]
  },
  {
    title     : constConfig.groups.NSO,
    type      : 'parent',
    leftIcon  : mdiPostOutline,
    rightIcon : mdiRobotAngryOutline,
    children  : [
      {
        title : constConfig.groups.NSO_OFFER,
        path  : constConfig.paths.NSO_OFFER
      },
      {
        title : constConfig.groups.NSO_POST,
        path  : constConfig.paths.NSO_POST
      },
    ]
  },
  {
    title     : 'mat_material',
    type      : 'parent',
    leftIcon  : mdiArchiveCheckOutline,
    rightIcon : mdiRobotAngryOutline
  },
  {
    title     : 'sor_order_in',
    type      : 'parent',
    leftIcon  : mdiArchiveArrowDownOutline,
    rightIcon : mdiRobotAngryOutline
  },
  {
    title     : 'sor_order_out',
    type      : 'parent',
    leftIcon  : mdiArchiveArrowUpOutline,
    rightIcon : mdiRobotAngryOutline
  },
]

function Sidebar() {
  const t         = useTranslations("cms.Sidebar");

  return <section className={cx(styles.wrapper)}>
      <MenuList>
        {
          menu.map(item => (
            <MenuListItem 
              key       = {item.title}
              title     = {t(item.title)}
              type      = {item.type}
              leftIcon  = {<Icon path={item.leftIcon} size={1}/>}
              rightIcon = {<Icon path={item.rightIcon} size={.9}/>}
            >
                {
                  item.children?.map(child => (
                    <MenuListItem 
                      key   = {child.title}
                      title = {t(child.title)}
                      path  = {child.path}
                    />
                  ))
                }
            </MenuListItem>
          ))
        }
      </MenuList>
    <div></div>
  </section>;
}

export default Sidebar;
