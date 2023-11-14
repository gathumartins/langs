import Script from 'next/script';
import Head from 'next/head';
import '../styles/globals.css';
import LanguageSwitcher from '@/components/lang-switcher';

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        <LanguageSwitcher/>
        {children}
       <Script
          src="/assets/scripts/translation.js"
          strategy="beforeInteractive" async={true}
        />
      {process.env.GOOGLE_TRANSLATION_CONFIG && (
          <Script
            src="//translate.google.com/translate_a/element.js?cb=TranslateInit"
            strategy="afterInteractive" async={true}
          />
        )}
      </body>
    </html>
  )
}
