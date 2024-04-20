// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { IntlProvider } from "react-intl";
import { FC, useState } from "react";
import { defaultLocale, locales } from "./i18n-config";
import { LocaleContext } from "./LocaleContext";
import { ChildrenProps } from "../common/types";

const I18n: FC<ChildrenProps> = (props) => {
  const [locale, setLocale] = useState(defaultLocale);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <IntlProvider
        locale={locale}
        defaultLocale={defaultLocale}
        messages={locales[locale].messages}
      >
        {props.children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
};

export default I18n;
