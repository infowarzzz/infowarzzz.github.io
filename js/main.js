let consentLabel="IW_Cookie_Consent",analyticsId="G-MTMXTC67RM";function acceptCookies(){localStorage.setItem(consentLabel,"accepted"),document.getElementById("cookieBanner").classList.remove("visible"),initializeAnalytics()}function rejectCookies(){localStorage.setItem(consentLabel,"rejected"),document.getElementById("cookieBanner").classList.remove("visible")}function initializeAnalytics(){var e=document.createElement("script");function t(){dataLayer.push(arguments)}e.async=!0,e.src="https://www.googletagmanager.com/gtag/js?id="+analyticsId,document.head.appendChild(e),window.dataLayer=window.dataLayer||[],t("js",new Date),t("config",analyticsId,{anonymize_ip:!0,allow_google_signals:!1})}window.addEventListener("load",function(){localStorage.getItem(consentLabel)?"accepted"===localStorage.getItem(consentLabel)&&initializeAnalytics():document.getElementById("cookieBanner").classList.add("visible")});