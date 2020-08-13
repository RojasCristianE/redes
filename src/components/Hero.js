import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class Hero extends React.Component {
  render() {
    const { data } = this.props
    let { edges: posts } = data.allMarkdownRemark
    // posts = posts.filter(({ node: post }) => {
      // post.frontmatter.tags.find(tag => tag == 'Destacada')
    // })


    return (
      <>
        {posts &&
          posts.filter(({ node: post }) => post.frontmatter.tags.includes('Destacada')).slice(0,1).map(({ node: post }) => (
            <div style={{
              backgroundImage: `url(${ post.frontmatter.featuredimage.childImageSharp.fluid.src })`,
              backgroundPosition: `center center`,
              backgroundAttachment: `cover`,
              backgroundSize: `cover`,
              backgroundRepeat: `no-repeat`,
              marginBottom: `4vh`
            }}
            >
            <div style={{
              paddingBottom: `5vh`,
              height: `60vh`,
              display: `flex`,
              alignItems: `flex-end`
            }}>
              <article key={post.id}
                className="featured"
                style={{
                  display: `flex`,
                  alignItems: `center`,
                }}
              >
                <header>
                  <h2>
                    <Link
                      className="title" style={{
                        color: `white`,
                        fontStyle: `italic`,
                        textTransform: `uppercase`,
                        fontSize: `calc(2vw + 3vh)`
                      }}
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}                     
                    </Link>
                  </h2>
                </header>                
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
                templateKey
                tags
                date(formatString: "MMMM DD, YYYY")
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
