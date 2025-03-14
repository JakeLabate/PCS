const pageData = {

    // page variables
    blogTitle: "Large Tree Varieties in Connecticut",
    blogSummary: "Connecticut is home to a variety of large tree species that can be found in the state. These trees are known for their size and beauty, and they are a popular choice for homeowners and landscapers alike. In this blog post, we will take a look at some of the most common large tree varieties in Connecticut, including the sugar maple, the white oak, and the eastern white pine.",
    pageUrl: 'https://example.com', // (example)
    ogImagePath: 'https://example.com/image.jpg', // (example)

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
    pageTitle: `${pageData.blogTitle} | Blog | ${pageData.businessName}`,
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
setMetaTag('og:description', pageData.blogSummary, true);
setMetaTag('og:site_name', pageData.businessName, true);
setMetaTag('og:url', pageData.pageUrl, true);
setMetaTag('og:locale', 'en_US', true);
setMetaTag('og:image', pageData.ogImagePath, true);
setMetaTag('og:image:alt', `${constructedVariables.pageTitle}`, true);

// Twitter
setMetaTag('twitter:card', 'summary_large_image');
setMetaTag('twitter:title', constructedVariables.pageTitle);
setMetaTag('twitter:description', pageData.blogSummary);
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