import React, { Component } from 'react'
import {
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
  TwitterIcon,
  LinkedinIcon,
  EmailIcon
} from 'react-share'

import styled from 'styled-components'

import { StyledHeading } from '../../styledComponents/contact'

const StyledSharer = styled.div`
  margin-bottom: 30px;
`
const SocialButtonContainer = styled.div`
  display: inline-block;
  &:hover {
    opacity: 0.7;
  }
`

const Sharer = ({ title = '', url }) => {
  title = `${title} | Data Controller`
  return (
    <StyledSharer>
      <StyledHeading>Share this entry</StyledHeading>

      <SocialButtonContainer>
        <EmailShareButton url={url} subject={title} body="body">
          <EmailIcon size={56} />
        </EmailShareButton>
      </SocialButtonContainer>

      <SocialButtonContainer>
        <LinkedinShareButton url={url}>
          <LinkedinIcon size={56} />
        </LinkedinShareButton>
      </SocialButtonContainer>

      <SocialButtonContainer>
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={56} />
        </TwitterShareButton>
      </SocialButtonContainer>
    </StyledSharer>
  )
}

export default Sharer
