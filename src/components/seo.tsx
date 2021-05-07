import * as React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Seo = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author {
              name
            }
            social {
              linkedin
            }
          }
        }
      }
    `
  )

  const author = site.siteMetadata?.author?.name
  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const pageTitle = title ? `${title} | ${defaultTitle}` : defaultTitle

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={pageTitle}
      meta={[
        { name: 'author', property: 'author', content: author },
        {
          name: 'description',
          property: 'og:description',
          content: metaDescription
        },
        // { name: 'facebook:site', content: '', },
        // { name: 'image', property: 'og:image', content: image.og, },

        // { name: `description`, content: metaDescription },
        {
          name: `linkedin:site`,
          content: site.siteMetadata?.social?.linkedin || ``
        },
        { name: `twitter:card`, content: `summary` },
        // { name: `twitter:creator`, content: site.siteMetadata?.social?.twitter || `` },
        { name: `twitter:description`, content: metaDescription },
        // { name: 'twitter:site', content: `${site?.twitter}`, },
        { name: `twitter:title`, content: title },
        // { name: 'youtube:site', content: `${site?.youtube}`, },
        { property: `og:description`, content: metaDescription },
        { property: `og:title`, content: title },
        { property: `og:type`, content: `website` }
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  title: ``
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string
}

export default Seo
