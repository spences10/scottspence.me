import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import PropTypes from 'prop-types';
import React from 'react';
import SEO from 'react-seo-component';
import styled from 'styled-components';
import Layout from '../components/layout';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

const MdTitle = styled.h1``;

const MdDate = styled.span`
  font-weight: 700;
  font-size: 0.8rem;
  color: ${props => props.theme.fontLight};
`;

const Template = ({ data }) => {
  const {
    frontmatter: { title, date },
    body,
    excerpt,
    fields: { slug },
  } = data.mdx;
  const {
    imageLink,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
    developerName,
  } = useSiteMetadata();
  return (
    <Layout>
      <SEO
        title={title}
        description={excerpt}
        image={`${siteUrl}${imageLink}`}
        pathname={`${siteUrl}${slug}`}
        publishedDate={'2019-12-01T08:26:52.963Z'}
        modifiedDate={date}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
        author={developerName}
        article={true}
      />
      <MdTitle>{title}</MdTitle>
      <MdDate>Updated: {date}</MdDate>
      <MDXRenderer>{body}</MDXRenderer>
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
      frontmatter {
        title
        date
      }
      body
      excerpt
      fields {
        slug
      }
    }
  }
`;
