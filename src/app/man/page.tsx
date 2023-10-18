import DefaultLayout from "@/layouts/DefaultLayout";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "ZenZobs Manager",
};

function Dashboard() {
  return (
    <DefaultLayout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    </DefaultLayout>
  );
}

export default Dashboard;
export { metadata };
