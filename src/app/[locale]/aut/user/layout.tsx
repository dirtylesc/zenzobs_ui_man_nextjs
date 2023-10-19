import DefaultLayout from "@/layouts/DefaultLayout";
import { NextIntlClientProvider } from "next-intl";

type Props    = {
    children: React.ReactNode;
    params: {locale: string};
  };

function AutUserLayout({children, params : { locale }}: Props) {
    return (
        <NextIntlClientProvider locale={locale}>
          <DefaultLayout>
            {children}
          </DefaultLayout>
        </NextIntlClientProvider>
    )
}

export default AutUserLayout;