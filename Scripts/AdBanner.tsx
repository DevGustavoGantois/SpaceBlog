'use client';

import React, { useEffect } from "react";

type AdBannerTypes = {
    dataAdSlot: string;
    dataAdFormat: string;
    dataFullWidthResponsive: boolean;
};

export const AdBanner = ({ dataAdFormat, dataAdSlot, dataFullWidthResponsive }: AdBannerTypes) => {
    
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            try {
                ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
            } catch (error: any) {
                console.error("AdSense Error: ", error.message);
            }
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-123456789"  
            data-ad-slot={dataAdSlot}
            data-ad-format={dataAdFormat}
            data-full-width-responsive={dataFullWidthResponsive.toString()}
        />
    );
};
