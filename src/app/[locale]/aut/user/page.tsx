import { Metadata }                   from "next";

type Props = {
  params: {locale: string};
};

const metadata: Metadata = {
  title: "ZenZobs Manager - User",
};

function AutUserPage({params: {locale}}: Props) {

  return (
    <main className=""></main>
  );
}

export default AutUserPage;
export { metadata };
