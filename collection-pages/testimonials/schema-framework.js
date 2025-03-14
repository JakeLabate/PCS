const page = {
    testimonialName: 'Sharlise McDuffie',
    testimonialText: "Just wanted to thank you for the excellent work your crew did yesterday cutting down our trees. The Board of Directors could not believe how quickly you responded to our emergency, they talked about you all day. Your men were very professional and fun to be around. It was a 9 to 4 job and the only evidence you were here are the missing trees. Thank you from Seabury Cooperative.",
    testimonialUrl: 'https://www.precisioncuttingservicesct.com/testimonial/sharlise-mcduffie/'
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
            "@id": `${page.testimonialUrl}#WebPage`,
            "url": page.testimonialUrl,
            "name": page.testimonialName,
            "isPartOf": {
                "@type": "WebSite",
                "@id": 'https://www.precisioncuttingservicesct.com#WebSite',
                "url": 'https://www.precisioncuttingservicesct.com',
            },
            "speakable": {
                "@type": "SpeakableSpecification",
                "@id": `${page.testimonialUrl}#SpeakableSpecification`,
                "url": page.testimonialUrl,
                "xPath": [
                    "/html/head/title",
                    "/html/head/meta[@name='description']/@content"
                ]
            },
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${page.testimonialUrl}#BreadcrumbList`,
            "url": page.testimonialUrl,
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "@id": `https://www.precisioncuttingservicesct.com/testimonials#ListItem`,
                    "position": 0,
                    "name": `Testimonials`,
                    "item": 'https://www.precisioncuttingservicesct.com/testimonials'
                },
                {
                    "@type": "ListItem",
                    "@id": `${page.testimonialUrl}#ListItem`,
                    "position": 1,
                    "name": `${page.testimonialName}`,
                    "item": page.testimonialUrl
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
            "@type": "Review",
            "@id": `${page.testimonialUrl}#Review`,
            "url": page.testimonialUrl,
            "name": page.testimonialName,
            "reviewBody": page.testimonialText,
            "itemReviewed": {
                "@type": "LocalBusiness",
                "@id": 'https://www.precisioncuttingservicesct.com#LocalBusiness',
                "url": "https://www.precisioncuttingservicesct.com",
                "name": "Precision Cutting Services"
            },
            "author": {
                "@type": "Person",
                "@id": `${page.testimonialUrl}#Person`,
                "url": page.testimonialUrl,
                "name": page.testimonialName
            }
        }
    ]
};

// add to dom
const script = document.createElement('script');
script.type = 'application/ld+json';
script.innerHTML = JSON.stringify(schema, null, 2);
document.head.appendChild(script);