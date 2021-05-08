import { Link, graphql } from 'gatsby'
import React from 'react'
import Gallery from '@browniebroke/gatsby-image-gallery'
import { IGatsbyImageData } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Seo from '../components/seo'

import { Section, ScheduleDemo } from '../components/shared'
import {
  SectionHeading,
  SectionDesc
} from '../components/shared/styledComponents'
import { Art, Reason, CenteredText, Feature } from '../styledComponents'

import leftArt from '../images/home_illustration2.png'
import rightArt from '../images/home_illustration1.png'
import dcSoftwareArt from '../images/dc-software.png'

import { AiOutlineClockCircle, AiFillLock } from 'react-icons/ai'
import { TiTick } from 'react-icons/ti'
import { HiOutlineRefresh } from 'react-icons/hi'
import { MdHistory } from 'react-icons/md'
import { BsCode } from 'react-icons/bs'
import { BiNetworkChart } from 'react-icons/bi'

import dcDesign from '../images/data-controller-design.png'

interface ImageSharpEdge {
  node: {
    childImageSharp: {
      thumb: IGatsbyImageData
      full: IGatsbyImageData
      meta: {
        originalName: string
      }
    }
  }
}

interface PageProps {
  data: {
    images: {
      edges: ImageSharpEdge[]
    }
  }
}

const Home: React.FC<PageProps> = ({ data, location }) => {
  const images = data.images.edges.map(({ node }) => ({
    ...node.childImageSharp,
    // Use original name as caption.
    // The `originalName` is queried in a nested field,
    // but the `Gallery` component expects `caption` at the top level.
    caption: node.childImageSharp.meta.originalName
  }))

  // Override some of Lightbox options to localise labels in French
  const lightboxOptions = {
    imageLoadErrorMessage: 'Impossible de charger cette image',
    nextLabel: 'Image suivante',
    prevLabel: 'Image précédente',
    zoomInLabel: 'Zoomer',
    zoomOutLabel: 'Dézoomer',
    closeLabel: 'Fermer'
  }
  return (
    <Layout
      location={location}
      heading="Flexible and Secure Data Modification"
      desc="Data Controller for SAS® enables business users to update IT owned source tables, secured by review / approve workflow and full audit trail."
    >
      <Seo />
      <Section color="black" bgColor="white">
        <div className="row">
          <div className="col-md-3">
            <Art src={leftArt} info="Business Owner" />
          </div>
          <div className="col-md-6">
            <SectionHeading>Who is Data Controller for?</SectionHeading>
            <SectionDesc>
              Data Controller is designed to provide business users with a tool
              which can be included in their overall armoury for regulatory
              reporting.
            </SectionDesc>
            <SectionDesc>
              Having worked in data-intensive SAS environments for many years,
              the founders of Data Controller experienced first hand the
              inefficient practices that reporting teams had to endure when
              changes needed to be made to the data and source system access
              wasn’t possible.
            </SectionDesc>
            <SectionDesc>
              It was clear to see that users needed the ability to self-serve
              their data updates. That data owners should have the chance to
              review and approve those updates. And that all changes to data
              should be safe and secure, as well as tracked and visible for
              audit reasons.
            </SectionDesc>
            <SectionDesc>
              The Data Controller is useful for any Enterprise that needs to
              perform manual data uploads into their preferred database, in
              real-time, with full validation, approval, security, and control.
            </SectionDesc>
          </div>
          <div className="col-md-3">
            <Art src={rightArt} info="Clinical Research Data" />
          </div>
        </div>
      </Section>
      <Section color="black" bgColor="white">
        <div className="row">
          <div className="offset-md-2 col-md-8">
            <SectionDesc>Devoted to</SectionDesc>
            <SectionHeading>SAS® Users, Admins and Developers</SectionHeading>
            <SectionDesc>
              Most (if not all) SAS users have the basic need to load, modify or
              delete data in SAS. They can typically achieve this by:
            </SectionDesc>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-md-4">
            <Reason text="Placing files on network drives ready for a batch program to load them" />
            <Reason text="Updating data directly using SAS® code" />
            <Reason text="Opening a dataset in Enterprise Guide and changing a value" />
            <Reason text="Asking a DBA to run a script update" />
          </div>
          <div className="col-md-4">
            <CenteredText>
              The approaches mentioned are less than ideal for a number of
              reasons:
            </CenteredText>
            <Art src={dcSoftwareArt} info="Data Controller Software" />
          </div>
          <div className="col-md-4">
            <Reason
              text="Every new piece of data requires a new job or program to be created to load it"
              bgColor="red"
            />
            <Reason
              text="END USERS NEED TO BE GRANTED MODIFY ACCESS TO SENSITIVE DATA LOCATIONS"
              bgColor="red"
            />
            <Reason text="High risk of locking datasets" bgColor="red" />
            <Reason
              text="Need for change requests and delays to the process"
              bgColor="red"
            />
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="row">
          <div className="offset-md-2 col-md-8">
            <SectionHeading>Data Controller Features</SectionHeading>
            <SectionDesc>
              Our goal with Data Controller is to focus on great user experience
              and auditor satisfaction.
              <br />
              Our software saves years of development and testing, as well as
              avoiding a ‘black box’ custom build.
              <br />
              It is a SAS® Powered Web Application with the following features:
            </SectionDesc>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="row">
          <Feature
            title="Real-time"
            desc="Intra day, concurrent updates are managed using a lock table and queuing mechanism. Updates are aborted if another user has changed the table since the approval diff was generated."
            Icon={AiOutlineClockCircle}
          />
          <Feature
            title="Secure"
            desc="The existing SASLogon framework is used to manage Authentication &amp; Authorisation. End users do not require direct access to the target tables."
            Icon={AiFillLock}
          />
          <Feature
            title="Approval Mechanism"
            desc="ALL data changes require 1 or more approvals before updating the table. The approver sees only the changes that will be applied to the target (new/deleted/changed rows)."
            Icon={TiTick}
          />
          <Feature
            title="Loading Tables of Different Types"
            desc="Using SAS®&nbsp;libname engines, you can securely update tables in your preferred database. Data Controller supports Retained keys, SCD2 loads, Bitemporal, and composite primary keys."
            Icon={HiOutlineRefresh}
            className="col-md-3"
          />
          <Feature
            title="Full Audit History"
            desc="You are able to track every change of data, including who made the change, when, why, and what the actual change was. You are able to access this feature on the History page."
            Icon={MdHistory}
            className="col-md-3"
          />
          <Feature
            title="Zero Code"
            desc="Adding new tables is a matter of configuration, which can perform entirely within the tool itself. No need to define column types, lengths etc – these are dynamically figured out at runtime."
            Icon={BsCode}
            className="col-md-3"
          />
          <Feature
            title="Workflow"
            desc="You are able to configure “Hook scripts” to execute before and after each action. So you could run a data quality check after uploading a mapping table or run a model after changing a parameter."
            Icon={BiNetworkChart}
            className="col-md-3"
          />
        </div>
      </Section>
      <Section color="black" bgColor="#f8f8f8">
        <div className="row">
          <div className="offset-md-2 col-md-8">
            <SectionDesc>Take a look at</SectionDesc>
            <SectionHeading>Data Controller Design</SectionHeading>
            <SectionDesc>
              We designed Data Controller to work on multiple devices and
              different screen types. This, combined with SAS® scalability and
              security, gives you full flexibility and location independence
              when managing your data.
            </SectionDesc>
            <Art src={dcDesign} info="Data Controller Design" />
          </div>
        </div>
      </Section>
      <Section color="black" bgColor="white">
        <SectionHeading>See How it Looks</SectionHeading>
        <Gallery images={images} lightboxOptions={lightboxOptions} gutter={0} />
      </Section>
      <ScheduleDemo />
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query ImagesForGallery {
    images: allFile(
      filter: { relativeDirectory: { eq: "gallery" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            thumb: gatsbyImageData(
              width: 300
              height: 270
              placeholder: BLURRED
            )
            full: gatsbyImageData(layout: FULL_WIDTH)
            meta: fixed {
              originalName
            }
          }
        }
      }
    }
  }
`
