import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class Hero extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark


    return (
      <>
        {posts &&
          posts.slice(0,1).map(({ node: post }) => (
            <div style={{
              backgroundImage: `url(${ post.frontmatter.featuredimage.childImageSharp.fluid.src })`,
              backgroundPosition: `center center`,
              backgroundAttachment: `cover`,
              backgroundSize: `cover`,
              backgroundRepeat: `no-repeat`,
            }}
            >
            <div style={{
              paddingBottom: `5vh`,
              height: `60vh`,
              display: `flex`,
              alignItems: `flex-end`
            }}>
              <article key={post.id}
                className={`featured`}
              >
                <header>
                  <p>
                    <Link
                      className="title" style={{
                        color: `white`
                      }}
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                  </p>
                </header>
                <p>
                  {post.frontmatter.description}
                </p>
              </article>
            </div>
            </div>
          ))}
      </>
    )
  }
}

Hero.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query HeroQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                description
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 1200, quality: 75) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Hero data={data} count={count} />}
  />
)
