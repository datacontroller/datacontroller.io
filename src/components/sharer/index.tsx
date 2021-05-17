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
      <SocialButtonContainer>
        <FacebookShareButton url={url} quote={title}>
          <FacebookIcon size={56} />
        </FacebookShareButton>
      </SocialButtonContainer>

      <SocialButtonContainer>
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={56} />
        </TwitterShareButton>
      </SocialButtonContainer>

      <SocialButtonContainer>
        <TelegramShareButton url={url} title={title}>
          <TelegramIcon size={56} />
        </TelegramShareButton>
      </SocialButtonContainer>

      <SocialButtonContainer>
        <WhatsappShareButton url={url} title={title} separator=":: ">
          <WhatsappIcon size={56} />
        </WhatsappShareButton>
      </SocialButtonContainer>

      <SocialButtonContainer>
        <LinkedinShareButton url={url}>
          <LinkedinIcon size={56} />
        </LinkedinShareButton>
      </SocialButtonContainer>

      <SocialButtonContainer>
        <PinterestShareButton url={url} media={url}>
          <PinterestIcon size={56} />
        </PinterestShareButton>
      </SocialButtonContainer>

      <SocialButtonContainer>
        <VKShareButton url={url} image={url}>
          <VKIcon size={56} />
        </VKShareButton>
      </SocialButtonContainer>

      <SocialButtonContainer>
        <OKShareButton url={url} image={url}>
          <OKIcon size={56} />
        </OKShareButton>
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
        <TumblrShareButton url={url} title={title}>
          <TumblrIcon size={56} />
        </TumblrShareButton>
      </SocialButtonContainer>

      <SocialButtonContainer>
        <LivejournalShareButton url={url} title={title} description={url}>
          <LivejournalIcon size={56} />
        </LivejournalShareButton>
      </SocialButtonContainer>

      <SocialButtonContainer>
        <MailruShareButton url={url} title={title}>
          <MailruIcon size={56} />
        </MailruShareButton>
      </SocialButtonContainer>

      <SocialButtonContainer>
        <EmailShareButton url={url} subject={title} body="body">
          <EmailIcon size={56} />
        </EmailShareButton>
      </SocialButtonContainer>
      <SocialButtonContainer>
        <ViberShareButton url={url} title={title}>
          <ViberIcon size={56} />
        </ViberShareButton>
      </SocialButtonContainer>

      <SocialButtonContainer>
        <WorkplaceShareButton url={url} quote={title}>
          <WorkplaceIcon size={56} />
        </WorkplaceShareButton>
      </SocialButtonContainer>

      <SocialButtonContainer>
        <LineShareButton url={url} title={title}>
          <LineIcon size={56} />
        </LineShareButton>
      </SocialButtonContainer>

      <SocialButtonContainer>
        <WeiboShareButton url={url} title={title} image={url}>
          <WeiboIcon size={56} />
        </WeiboShareButton>
      </SocialButtonContainer>

      <SocialButtonContainer>
        <PocketShareButton url={url} title={title}>
          <PocketIcon size={56} />
        </PocketShareButton>
      </SocialButtonContainer>

      <SocialButtonContainer>
        <InstapaperShareButton url={url} title={title}>
          <InstapaperIcon size={56} />
        </InstapaperShareButton>
      </SocialButtonContainer>

      <SocialButtonContainer>
        <HatenaShareButton
          url={url}
          title={title}
          windowWidth={660}
          windowHeight={460}
        >
          <HatenaIcon size={56} />
        </HatenaShareButton>
      </SocialButtonContainer>
    </StyledSharer>
  )
}

export default Sharer
