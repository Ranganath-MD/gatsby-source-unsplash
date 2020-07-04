import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const Unsplash = () => {
    const data = useStaticQuery(graphql`
        {
            allUnsplashPhoto {
                edges {
                    node {
                        alt_description
                        description
                        id
                        likes
                        urls {
                            thumb
                            full
                        }
                        user {
                            name
                        }
                    }
                }
            }
        }
    `)
    const result = data.allUnsplashPhoto.edges
    return (
        <div className="mansonry">
            {
                result.map((item, i) => {
                    return (
                        <div key={i} className="mansonry-content">
                            <img
                                src={item.node.urls.full}
                                alt={item.node.urls.alt_description}
                            />
                        </div>
                    )
                })
           }
        </div>
    )
}

export default Unsplash

