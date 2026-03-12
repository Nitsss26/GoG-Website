import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    canonical?: string;
    ogImage?: string;
}

/**
 * SEO Component for dynamic page titles and meta descriptions
 * This helps Google understand each page uniquely, which is required for Sitelinks
 */
const SEO: React.FC<SEOProps> = ({
    title,
    description,
    keywords,
    canonical,
    ogImage = 'https://i.ibb.co/dJVbhnf7/logo-2.png'
}) => {
    const fullTitle = title.includes('Geeks of Gurukul') ? title : `${title} - Geeks of Gurukul`;
    const siteUrl = 'https://www.geeksofgurukul.com';

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}

            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:type" content="website" />
            {canonical && <meta property="og:url" content={`${siteUrl}${canonical}`} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Canonical URL */}
            {canonical && <link rel="canonical" href={`${siteUrl}${canonical}`} />}
        </Helmet>
    );
};

export default SEO;
