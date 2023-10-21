import classNames from 'classnames';

import styles     from './Header.module.scss'
import MenuList   from '@/components/Menu/SidebarMenu';
import MenuListItem from '@/components/Menu/SidebarMenu/MenuListItem';
import Image from 'next/image';

const cx        = classNames.bind(styles);
const rightMenu = [
  {
    key: "nationality",
    title: "vn_language",
    icon: {
      src: "/public/icons/",
      alt: "vn_language"
    }
  },
  {
    key: 2
  }
] 
const styleObj  = {
  wrapper: [styles.wrapper],
  rightMenu: [
    styles.right_menu, 
    "float-right", 
    "mb-0", 
    "list-none"
  ]
}

function Header() {
  return (
    <header className={cx(...styleObj.wrapper)}>
      <MenuList style={{ list: cx(...styleObj.rightMenu) }}>
        {
          rightMenu.map(item => 
            <MenuListItem key={item.key}/>
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
