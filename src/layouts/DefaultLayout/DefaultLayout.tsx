import React        from "react";
import classNames   from "classnames";

import styles       from "./DefaultLayout.module.scss";
import Sidebar      from "@/layouts/components/Sidebar";
import Header       from "@/layouts/components/Header";
import Rightbar     from "@/layouts/components/Rightbar";

const cx = classNames.bind(styles);

function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className={cx(styles.wrapper)}>
      <Sidebar />
      <div className={cx(styles.container)}>
        <Header />
        <Rightbar />
        <div className={cx(styles.content)}>{children}</div>
      </div>
    </section>
  );
}

export default DefaultLayout;
