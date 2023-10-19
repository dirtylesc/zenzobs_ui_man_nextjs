'use client'

import { useTranslations }      from "next-intl";
import { useRouter }            from "next/navigation";
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

import styles                   from "./Sidebar.module.scss";
import MenuList                 from "@/components/Menu/SidebarMenu/MenuList";
import MenuListItem             from "@/components/Menu/SidebarMenu/MenuListItem";

const cx = classNames.bind(styles);

const menu = [
  {
    title     : 'aut',
    type      : 'parent',
    leftIcon  : mdiAccountOutline,
    rightIcon : mdiRobotAngryOutline,
    children  : [
      {
        title : 'aut_user',
      },
      {
        title : 'aut_auth_service',
      },
      {
        title : 'aut_role',
      },
      {
        title : 'aut_right',
      },
    ]
  },
  {
    title     : 'nso',
    type      : 'parent',
    leftIcon  : mdiPostOutline,
    rightIcon : mdiRobotAngryOutline,
    children  : [
      {
        title : 'nso_offer',
      },
      {
        title : 'nso_post',
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
  const { push }  = useRouter();
  const t         = useTranslations("cms.Sidebar");

  const handleRedirect = (path: string) => {
    push('/' + path)
  }

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
                      key   = {item.title}
                      title = {t(child.title)}
                      onClick={() => handleRedirect(`${item.title}/${child.title}`)}
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
