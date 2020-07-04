import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import LikeImage from "../images/heart.svg"

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
                            <div className="mansonry-footer">
                                <p>PC: {item.node.user.name}</p>
                                <div className="likes-container">
                                    <div className="like">
                                        <img
                                            src={LikeImage}
                                            alt={item.node.urls.alt_description}
                                            width="100%" />
                                    </div>
                                    <p>{item.node.likes}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Unsplash

