'use client'

import classNames from "classnames";

import styles from "./List.module.scss";
import Button from "@/components/Button";
import { mdiAutorenew, mdiMinus } from "@mdi/js";
import DataTable from "./DataTable";

const cx    = classNames.bind(styles);
type Props  = {
  title     : string
};

function ListItem({ title }: Props) {
  return (
    <div className={cx(styles.item_wrapper)}>
      <div className={cx(styles.function)}>
        <div className="lg:w-8/12 md:w-8/12 px-1.5">
          <span className={cx(styles.title, "mb-4")}>{title}</span>
        </div>
        <div className="lg:w-4/12 md:w-4/12 text-right">
          {/* <Button icon={{ path: mdiAutorenew }}/>
          <Button icon={{ path: mdiMinus }}/> */}
        </div>
      </div>
      <DataTable 
        div="div_List_Cont_Typ_Adm"
      />
    </div>
  );
}

export default ListItem;
