import { Metadata }                   from "next";

type Props = {
  params: {locale: string};
};

const metadata: Metadata = {
  title: "ZenZobs Manager - Role",
};

function AutRolePage({params: {locale}}: Props) {

  return (
    <main className=""></main>
  );
}

export default AutRolePage;
export { metadata };
