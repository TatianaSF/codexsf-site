import Script from "next/script";

type GoogleTagManagerProps = {
  containerId?: string;
};

export function GoogleTagManager({ containerId }: GoogleTagManagerProps) {
  if (!containerId) {
    return null;
  }

  const gtmSrc = `https://www.googletagmanager.com/gtm.js?id=${containerId}`;
  const iframeSrc = `https://www.googletagmanager.com/ns.html?id=${containerId}`;

  return (
    <>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          '${gtmSrc}'+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${containerId}');
        `}
      </Script>
      <noscript>
        <iframe
          height="0"
          src={iframeSrc}
          style={{ display: "none", visibility: "hidden" }}
          title="Google Tag Manager"
          width="0"
        />
      </noscript>
    </>
  );
}
