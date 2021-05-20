import React, { Component } from 'react'
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  LineShareButton,
  WeiboShareButton,
  PocketShareButton,
  InstapaperShareButton,
  HatenaShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  OKIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,
  TumblrIcon,
  MailruIcon,
  EmailIcon,
  LivejournalIcon,
  ViberIcon,
  WorkplaceIcon,
  LineIcon,
  PocketIcon,
  InstapaperIcon,
  WeiboIcon,
  HatenaIcon
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
        <RedditShareButton
          url={url}
          title={title}
          windowWidth={660}
          windowHeight={460}
        >
          <RedditIcon size={56} />
        </RedditShareButton>
      </SocialButtonContainer>

      <SocialButtonContainer>
        <TelegramShareButton url={url} title={title}>
          <TelegramIcon size={56} />
        </TelegramShareButton>
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
