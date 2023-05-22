"use client";
import CookieConsent from "react-cookie-consent";

const CookieCard = () => {
  return (
    <CookieConsent debug={true}>
      This site uses cookies: By using this website, you consent to our use of
      cookies in accordance with our Website Terms of Use and Cookie Policy.
    </CookieConsent>
  );
};

export default CookieCard;
