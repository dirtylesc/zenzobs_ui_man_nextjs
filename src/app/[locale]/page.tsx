import { Metadata }                   from "next";
import { useTranslations }            from "next-intl";
import { unstable_setRequestLocale }  from "next-intl/server";


type Props = {
  params: {locale: string};
};

const metadata: Metadata = {
  title: "ZenZobs Manager",
};

function Dashboard({params: {locale}}: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('cms.Sidebar');

  return (
    <main className="">{t('sidebar_per_person_typ_02')}</main>
  );
}

export default Dashboard;
export { metadata };
