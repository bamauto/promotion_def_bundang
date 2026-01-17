import React from 'react';
import { Helmet } from 'react-helmet-async';

const SchemaJsonLd = ({ data }) => {
    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(data)}
            </script>
        </Helmet>
    );
};

export const generateLocalBusinessSchema = () => ({
    "@context": "https://schema.org",
    "@type": "EntertainmentBusiness",
    "name": "분당 하이퍼블릭 서우실장",
    "image": "https://bundang-entertainment.com/og-image.jpg",
    "telephone": "010-2626-4833",
    "url": "https://bundang-entertainment.com/",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bundang-gu",
        "addressRegion": "Gyeonggi-do",
        "addressCountry": "KR"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 37.3827,
        "longitude": 127.1189
    },
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ],
        "opens": "18:00",
        "closes": "06:00"
    },
    "priceRange": "$$"
});

export const generateServiceSchema = (serviceName, description, url) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceName,
    "provider": {
        "@type": "LocalBusiness",
        "name": "분당 하이퍼블릭 서우실장"
    },
    "areaServed": {
        "@type": "City",
        "name": "Bundang"
    },
    "description": description,
    "url": url
});

export default SchemaJsonLd;
