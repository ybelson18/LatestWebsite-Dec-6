'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export function LeadBot() {
  useEffect(() => {
    // This will run only on the client side
    console.log('LeadBot component mounted');
  }, []);

  return (
    <>
      <div id="lead-bot"></div>
      <Script 
        strategy="afterInteractive"
        type="text/javascript" 
        src="https://app.leadtrap.ai/platform/script?partner_id=dfaacbca-1c96-4399-9b36-7c63c2707f16"
        onLoad={() => {
          console.log('LeadTrap script loaded in client component');
        }}
        onError={(e) => {
          console.error('Error loading LeadTrap script in client component:', e);
        }}
      />
    </>
  );
}
