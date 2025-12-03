// src/lib/analytics.ts

// Diciamo a TypeScript che window.gtag può esistere
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

// Funzione comoda per tracciare eventi
export function trackEvent(
  action: string,
  params?: Record<string, any>
) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", action, params || {});
  }
}

// Necessario perché questo file sia trattato come modulo
export {};
