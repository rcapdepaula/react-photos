import React from 'react'
// styles
// icon
import { RiThumbUpFill } from 'react-icons/ri'
import { Wrapper, ImageWrapper } from './Photos.styles'

const Photos = ({
  urls: { regular },
  user: {
    name,
    portfolio_url,
    profile_image: { medium },
  },
  links: { html },

  likes,
  alt_description,
}) => {
  return (
    <Wrapper>
      <ImageWrapper>
        {/* // display:  all photos */}

        <a href={html} target='_blank'>
          <img className='img' src={regular} alt={alt_description} />
        </a>
        {/* // name */}

        <div className='photo-info'>
          <div>
            <span>{name}</span>
            <div>
              <RiThumbUpFill style={{ marginRight: '5px' }} />
              {likes} likes
            </div>
          </div>
          <img className='user-img' src={medium} alt={alt_description} />
        </div>
      </ImageWrapper>
    </Wrapper>
  )
}

export default Photos
