const pageData = {

    // page variables
    testimonialName: "Sharlise McDuffie",
    testimonialText: "Just wanted to thank you for the excellent work your crew did yesterday cutting down our trees. The Board of Directors could not believe how quickly you responded to our emergency, they talked about you all day. Your men were very professional and fun to be around. It was a 9 to 4 job and the only evidence you were here are the missing trees. Thank you from Seabury Cooperative.",
    pageUrl: 'https://example.com',
    ogImagePath: 'https://example.com/image.jpg',

    // global variables
    businessName: 'Precision Cutting Services',
    primaryColor: '#0e8524',
    contactPhoneNumber: '203-466-2400',
    contactEmailAddress: 'pcslandscaping@aol.com',
    facebookPageId: '', // find this from the PSC facebook page: https://www.facebook.com/PrecisionCuttingServicesTreeRemoval --> here is how --> https://www.youtube.com/watch?v=E9wDBDClCcI&t=0
    facebookAdminUrl: '', // whoever manages this page (a person) should be listed here --> here is how --> https://stackoverflow.com/questions/10836135/when-do-i-need-a-fbapp-id-or-fbadmins
    icon16IcoPath: '/path/icon16.ico', // (example)
    icon16PngPath: '/path/icon16.png', // (example)
    icon32PngPath: '/path/icon32.png', // (example)
    icon192PngPath: '/path/icon192.png' // (example)

};

const constructedVariables = {
    pageTitle: `Testimonial by ${pageData.testimonialName} | Precision Cutting Services | Tree Services in CT`,
    pageSummary: `"${pageData.testimonialText}" - ${pageData.testimonialName}`,
}

function setMetaTag(name, content, property = false) {
    const meta = document.createElement('meta');
    if (property) {
        meta.setAttribute('property', name);
    } else {
        meta.setAttribute('name', name);
    }
    meta.setAttribute('content', content);
    document.head.appendChild(meta);
}
function setLinkTag(rel, type, sizes, href) {
    const link = document.createElement('link');
    link.rel = rel;
    link.type = type;
    link.sizes = sizes;
    link.href = href;
    document.head.appendChild(link);
}

// Set basic meta tags
document.title = constructedVariables.pageTitle;
setMetaTag('description', pageData.blogSummary);
setMetaTag('theme-color', pageData.primaryColor);
setMetaTag('viewport', 'width=device-width, initial-scale=1, maximum-scale=1');
setMetaTag('robots', 'index, follow');
setMetaTag('canonical', pageData.pageUrl);

// Set miscellaneous meta tags
setMetaTag('language', 'EN');
setMetaTag('Classification', 'Business');
setMetaTag('url', pageData.pageUrl);
setMetaTag('identifier-URL', pageData.pageUrl);
setMetaTag('target', 'all');
setMetaTag('coverage', 'Worldwide');
setMetaTag('distribution', 'Global');

// Open Graph
setMetaTag('og:phone_number', pageData.contactPhoneNumber);
setMetaTag('og:email', pageData.contactEmailAddress);
setMetaTag('og:type', 'website', true);
setMetaTag('og:title', constructedVariables.pageTitle, true);
setMetaTag('og:description', constructedVariables.pageSummary, true);
setMetaTag('og:site_name', pageData.businessName, true);
setMetaTag('og:url', pageData.pageUrl, true);
setMetaTag('og:locale', 'en_US', true);
setMetaTag('og:image', pageData.ogImagePath, true);
setMetaTag('og:image:alt', `${constructedVariables.pageTitle}`, true);

// Twitter
setMetaTag('twitter:card', 'summary_large_image');
setMetaTag('twitter:title', constructedVariables.pageTitle);
setMetaTag('twitter:description', constructedVariables.pageSummary);
setMetaTag('twitter:image', pageData.ogImagePath);
setMetaTag('twitter:image:alt', `${constructedVariables.pageTitle}`);

// Facebook
setMetaTag('fb:page_id', pageData.facebookPageId);
setMetaTag('fb:admins', pageData.facebookAdminUrl, true);

// Icons
setLinkTag('icon', 'image/icon', '16x16', pageData.icon16IcoPath);
setLinkTag('icon', 'image/png', '16x16', pageData.icon16PngPath);
setLinkTag('icon', 'image/png', '32x32', pageData.icon32PngPath);
setLinkTag('apple-touch-icon', 'image/png', '192x192', pageData.icon192PngPath);