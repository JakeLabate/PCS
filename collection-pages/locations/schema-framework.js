const page = {
    locationCity: 'North Haven',
    locationState: 'Connecticut',
    locationUrl: 'https://www.precisioncuttingservicesct.com/locations/tree-removal-north-haven-ct/',
};

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebSite",
            "@id": 'https://www.precisioncuttingservicesct.com#WebSite',
            "url": 'https://www.precisioncuttingservicesct.com',
            "name": "Precision Cutting Services",
            "sdPublisher": [
                {
                    "@type": "Organization",
                    "@id": "https://www.3-prime.com#Organization",
                    "url": "https://www.3-prime.com",
                    "name": "3 PRIME",
                    "sameAs": [
                        "https://www.linkedin.com/company/3prime-web-solutions"
                    ]
                },
                {
                    "@type": "Person",
                    "@id": "https://www.jakelabate.com#Person",
                    "url": "https://www.jakelabate.com",
                    "name": "Jake Labate",
                    "sameAs": [
                        "https://www.linkedin.com/in/jakelabate"
                    ]
                }
            ]
        },
        {
            "@type": "WebPage",
            "@id": `${page.locationUrl}#WebPage`,
            "url": page.locationUrl,
            "name": '',
            "isPartOf": {
                "@type": "WebSite",
                "@id": 'https://www.precisioncuttingservicesct.com#WebSite',
                "url": 'https://www.precisioncuttingservicesct.com',
            },
            "speakable": {
                "@type": "SpeakableSpecification",
                "@id": `${page.locationUrl}#SpeakableSpecification`,
                "url": page.locationUrl,
                "xPath": [
                    "/html/head/title",
                    "/html/head/meta[@name='description']/@content"
                ]
            },
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${page.locationUrl}#BreadcrumbList`,
            "url": page.locationUrl,
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "@id": `https://www.precisioncuttingservicesct.com/locations#ListItem`,
                    "position": 0,
                    "name": `Locations`,
                    "item": 'https://www.precisioncuttingservicesct.com/locations'
                },
                {
                    "@type": "ListItem",
                    "@id": `${page.locationUrl}#ListItem`,
                    "position": 1,
                    "name": ``,
                    "item": page.locationUrl
                }
            ]
        },
        {
            "@type": "LocalBusiness",
            "@id": "https://www.precisioncuttingservicesct.com#LocalBusiness",
            "url": "https://www.precisioncuttingservicesct.com",
            "name": "Precision Cutting Services",
            "telephone": "203-466-2400",
            "contactPoint": {
                "@type": "ContactPoint",
                "@id": "https://www.precisioncuttingservicesct.com#ContactPoint",
                "contactType": "Customer Service",
                "telephone": "203-466-2400"
            },
            "areaServed": {
                "@type": "AdministrativeArea",
                "@id": "https://www.precisioncuttingservicesct.com#AdministrativeArea",
                "url": "https://www.precisioncuttingservicesct.com",
                "name": "Connecticut"
            }
        },
        {
            "@type": "AggregateRating",
            "@id": `https://www.precisioncuttingservicesct.com#AggregateRating`,
            "url": "https://www.precisioncuttingservicesct.com",
            "ratingCount": "37",
            "ratingValue": "4.8",
            "itemReviewed": {
                "@type": "LocalBusiness",
                "@id": 'https://www.precisioncuttingservicesct.com#LocalBusiness',
                "url": "https://www.precisioncuttingservicesct.com",
                "name": "Precision Cutting Services"
            }
        },
        {
            "@type": "Place",
            "@id": `${page.locationUrl}#Place`,
            "url": page.locationUrl,
            "name": `${page.locationCity}, ${page.locationState}`
        }
    ]
};

// add to dom
const script = document.createElement('script');
script.type = 'application/ld+json';
script.innerHTML = JSON.stringify(schema, null, 2);
document.head.appendChild(script);