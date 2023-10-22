import classNames     from 'classnames';
import { 
  mdiBellOutline, 
  mdiCogOutline
}                     from '@mdi/js';

import styles         from './Header.module.scss'
import MenuList       from '@/components/Menu/SidebarMenu';
import MenuListItem   from '@/components/Menu/SidebarMenu/MenuListItem';

const cx        = classNames.bind(styles);
const rightMenu = [
  {
    key     : "nationality",
    title   : "cms.Lang.vi",
    leftIcon: {
      src   : "/icons/vn-circle.svg",
      alt   : "cms.Lang.vi"
    },
    style: {
      wrapper : styles.menu_list_item,
      icon : styles.menu_list_item__icon
    }
  },
  {
    key     : "notification",
    leftIcon: {
      path: mdiBellOutline
    },
    style: {
      wrapper : styles.menu_list_item,
      icon : styles.menu_list_item__icon
    }
  },
  {
    key     : "setting",
    leftIcon: {
      path  : mdiCogOutline
    },
    style: {
      wrapper : styles.menu_list_item,
      icon : styles.menu_list_item__icon
    }
  },
  {
    key: "user",
    title: "cms.def_name",
    leftIcon: {
      src   : "/images/avatar-1.jpg",
      alt   : "cms.Lang.vi"
    },
    style: {
      wrapper: styles.menu_list_item_user,
      icon : "rounded-full",
    }
  }
] 
const styleObj  = {
  wrapper   : [
    styles.wrapper
  ],
  rightMenu : [
    styles.right_menu,
    "float-right", 
    "mb-0",
    "list-none"
  ],
  item      : {
    show    : styles.menu_list_item__show,
    title   : styles.menu_list_item__title
  }
}

function Header() {
  return (
    <header className = {cx(...styleObj.wrapper)}>
      <MenuList style = {{ list: cx(...styleObj.rightMenu) }}>
        {
          rightMenu.map(item => 
            <MenuListItem 
              key       = {item.key} 
              title     = {item.title} 
              leftIcon  = {item.leftIcon}
              style     = {{ 
                ...styleObj.item,
                wrapper : item.style.wrapper,
                icon    : item.style.icon 
              }}
            />
          )
        }
      </MenuList>
      <ul className={cx()}></ul>
      <div className={cx()}>
        
      </div>
    </header>
  );
}

export default Header;
