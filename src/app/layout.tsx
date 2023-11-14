import Script from 'next/script';
import Head from 'next/head';
import '../styles/globals.css';
import LanguageSwitcher from '@/components/lang-switcher';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <LanguageSwitcher/>
        {children}
       <Script
          src="/assets/scripts/translation.js"
          strategy="beforeInteractive"
        />
      {process.env.GOOGLE_TRANSLATION_CONFIG && (
          <Script
            src="//translate.google.com/translate_a/element.js?cb=TranslateInit"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  )
}
