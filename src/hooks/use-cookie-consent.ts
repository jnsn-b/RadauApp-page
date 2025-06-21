'use client';

import { useState, useEffect, useCallback } from 'react';

// This hook is designed to be safe for SSR by initializing state to a value
// that indicates the client-side check hasn't run yet.
export function useCookieConsent() {
  // `null` means we haven't checked localStorage yet.
  // `true` means consent has been given/denied (banner hidden).
  // `false` means no consent decision has been made (banner shown).
  const [isConsentSet, setIsConsentSet] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const storedConsent = window.localStorage.getItem('cookie_consent');
      setIsConsentSet(!!storedConsent);
    } catch (e) {
      console.error("Could not access localStorage", e);
      setIsConsentSet(true); // Don't show banner if localStorage fails
    }
  }, []);

  const giveConsent = useCallback(() => {
    try {
      window.localStorage.setItem('cookie_consent', 'true');
      setIsConsentSet(true);
    } catch (e) {
      console.error("Could not write to localStorage", e);
    }
  }, []);

  return {
    shouldShowBanner: isConsentSet === false,
    giveConsent
  };
}
