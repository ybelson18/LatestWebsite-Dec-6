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
        src="https://leadtrap-production.up.railway.app/platform/script?partner_id=ce43d1d9-40f7-4adb-b0e0-d1a13efa8ed5"
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
