const page = {
    blogTitle: "Large Tree Varieties in Connecticut",
    blogSummary: "Connecticut is home to a variety of large tree species that can be found in the state. These trees are known for their size and beauty, and they are a popular choice for homeowners and landscapers alike. In this blog post, we will take a look at some of the most common large tree varieties in Connecticut, including the sugar maple, the white oak, and the eastern white pine.",
    blogUrl: 'https://www.precisioncuttingservicesct.com/2019/12/large-tree-varieties-in-connecticut/',
    blogImgSrc: "https://www.precisioncuttingservicesct.com/wp-content/uploads/2019/12/Screen-Shot-2019-12-30-at-10.39.04-AM.png",
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
            "@id": `${page.blogUrl}#WebPage`,
            "url": page.blogUrl,
            "name": page.blogTitle,
            "isPartOf": {
                "@type": "WebSite",
                "@id": 'https://www.precisioncuttingservicesct.com#WebSite',
                "url": 'https://www.precisioncuttingservicesct.com',
            },
            "speakable": {
                "@type": "SpeakableSpecification",
                "@id": `${page.blogUrl}#SpeakableSpecification`,
                "url": page.blogUrl,
                "xPath": [
                    "/html/head/title",
                    "/html/head/meta[@name='description']/@content"
                ]
            },
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${page.blogUrl}#BreadcrumbList`,
            "url": page.blogUrl,
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "@id": `https://www.precisioncuttingservicesct.com/blogs#ListItem`,
                    "position": 0,
                    "name": `Blog`,
                    "item": 'https://www.precisioncuttingservicesct.com/blogs'
                },
                {
                    "@type": "ListItem",
                    "@id": `${page.blogUrl}#ListItem`,
                    "position": 1,
                    "name": `${page.blogTitle}`,
                    "item": page.blogUrl
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
            "@type": "BlogPosting",
            "@id": `${page.blogUrl}#BlogPosting`,
            "url": page.blogUrl,
            "name": page.blogTitle,
        }
    ]
};

// add to dom
const script = document.createElement('script');
script.type = 'application/ld+json';
script.innerHTML = JSON.stringify(schema, null, 2);
document.head.appendChild(script);