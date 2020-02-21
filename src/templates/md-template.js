import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import PropTypes from 'prop-types';
import React from 'react';
import SEO from 'react-seo-component';
import Layout from '../components/layout';
import { Toc } from '../components/toc';
import { useSiteMetadata } from '../hooks/use-site-metadata';

const Template = ({ data }) => {
  const {
    body,
    excerpt,
    fields: { slug },
    tableOfContents: { items },
  } = data.mdx;
  const {
    imageLink,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
    developerName,
    title: siteTitle,
  } = useSiteMetadata();
  return (
    <Layout>
      <SEO
        title={items[0].title}
        titleTemplate={siteTitle}
        description={excerpt}
        image={`${siteUrl}${imageLink}`}
        pathname={`${siteUrl}${slug}`}
        publishedDate={'2019-12-01T08:26:52.963Z'}
        modifiedDate={new Date(Date.now()).toISOString()}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
        author={developerName}
        article={true}
      />
      <MDXRenderer>{body}</MDXRenderer>
      <Toc items={items} />
    </Layout>
  );
};

export default Template;

Template.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query PageBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      excerpt
      fields {
        slug
      }
      tableOfContents
    }
  }
`;
