import { PageProps, Link, graphql } from 'gatsby'
import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'

import { Section } from '../components/shared'
import {
  SectionHeading,
  SectionDesc
} from '../components/shared/styledComponents'

import {
  Card,
  CardImg,
  CardBody,
  FeaturedImg,
  FeaturedDesc
} from '../styledComponents/about'

import sasenseiLogo from '../images/sasapps/sasensei.png'
import rubyLogo from '../images/sasapps/ruby.png'
import pygrailLogo from '../images/sasapps/pygrail.png'
import pilotLogo from '../images/sasapps/pilot.png'
import yogaLogo from '../images/sasapps/yoga.png'
import jsLogo from '../images/sasapps/js.png'
import serbianLogo from '../images/sasapps/serbian.png'
import quizrLogo from '../images/sasapps/quizr.png'
import cdoquizLogo from '../images/sasapps/cdoquiz.png'
import insureLogo from '../images/sasapps/insure.png'

import sasenseiFeatured from '../images/sasensei_featured.png'

type DataProps = {
  site: {
    meta: {
      title: string
      description: string
      social: { linkedin: string }
    }
  }
}

const SasApps = [
  {
    name: 'Sasensei',
    desc: 'Sasensei. SAS Software Quiz, Challenge, Compete & Learn',
    link: 'https://sasensei.com',
    themeColor: '#2196F3',
    logo: sasenseiLogo
  },
  {
    name: 'Ruby',
    desc: 'Ruby Cards - a Community Quiz Game for Rubyists',
    link: 'https://ruby.cards',
    themeColor: '#aa1502',
    logo: rubyLogo
  },
  {
    name: 'PyGrail',
    desc: 'PyGrail - a Community Quiz Game for Monty Pythonistas',
    link: 'https://pygrail.com',
    themeColor: '#efbf2c',
    logo: pygrailLogo
  },
  {
    name: 'Pilot',
    desc: 'Pilot Cards Leaderboard - How High Can You Climb?',
    link: 'https://pilot.cards',
    themeColor: '#446ff3',
    logo: pilotLogo
  },
  {
    name: 'Yoga.cards',
    desc: 'Yoga Cards - a Community Quiz Game for Student Yogis',
    link: 'https://yoga.cards',
    themeColor: '#6d69fb',
    logo: yogaLogo
  },
  {
    name: 'JS.cards',
    desc: 'JS Cards - a Community Quiz Game for JavaScript Ninjas',
    link: 'https://js.cards',
    themeColor: '#00cc99',
    logo: jsLogo
  },
  {
    name: 'Serbian.cards',
    desc: 'Serbian Cards - How Much Serbian Do You Know?',
    link: 'https://serbian.cards',
    themeColor: '#c6363c',
    logo: serbianLogo
  },
  {
    name: 'Quizr',
    desc: 'quizR - a community quiz game for useRs',
    link: 'https://quizr.io',
    themeColor: '#51904c',
    logo: quizrLogo
  },
  {
    name: 'CDOquiz',
    desc: 'CDO Quiz - a Royally Challenging Data Adventure',
    link: 'https://cdoquiz.com/',
    themeColor: '#a54499',
    logo: cdoquizLogo
  },
  {
    name: 'Insure.cards',
    desc: 'Insure Cards - Are You An Insurance Expert? Prove It',
    link: 'https://insure.cards/',
    themeColor: '#5f8ba5',
    logo: insureLogo
  }
]

const About: React.FC<PageProps<DataProps>> = ({ data, location }) => {
  return (
    <Layout
      location={location}
      heading="Behind Data Controller"
      desc="Data Controller is a product of Analytium Ltd"
    >
      <Seo title="About" />
      <Section color="black" bgColor="white">
        <div className="row">
          <div className="offset-md-2 col-md-8">
            <SectionHeading center="no">About Data Controller</SectionHeading>
            <SectionDesc center="no">
              Data Controller is sold through Analytium Ltd, a
              company&nbsp;based in the UK and operating since 2016.
              <br />
              The company supports the development of the Data Controller web
              application and other <a href="https://sasapps.io">SAS Apps</a>,
              and the Macro Cards range of websites listed below:
            </SectionDesc>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
          {SasApps.map((app) => (
            <div className="col">
              <Card
                className="card"
                href={app.link}
                target="_blank"
                rel="noopener"
              >
                <CardImg
                  className="card-img-top"
                  src={app.logo}
                  alt={app.name}
                  title={app.name}
                />
                <CardBody className="card-body">
                  <h5 className="card-title">{app.name}</h5>
                  <p className="card-text">{app.desc}</p>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <FeaturedImg src={sasenseiFeatured} alt="Sasensei" title="Sasensei" />
        <FeaturedDesc>
          Sasensei is a free question-based learning system dedicated to various
          aspects of the
          <br />
          SAS® software such as SAS® Programming, Administration, Risk
          Dimensions, Viya, AF/SLC, and much more.
        </FeaturedDesc>
        <FeaturedDesc>
          This SAS® quiz allows the player to test their knowledge, challenge
          their peers and submit their own questions for others to enjoy.
          <br />
          Sasensei is constantly improving by adding new features which
          contribute to the player experience and increase the educational
          value.
        </FeaturedDesc>
      </Section>
      <Section color="black" bgColor="#eaeaea" bottomArrow={false}>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
          <div className="col">
            1000+
            <br />
            Active Players
          </div>
          <div className="col">
            650+
            <br />
            Questions
          </div>
          <div className="col">
            20+
            <br />
            New Players Every Day
          </div>
          <div className="col">
            6<br />
            Unique Features
          </div>
          <div className="col">
            7<br />
            Difficulty Levels
          </div>
        </div>
      </Section>
    </Layout>
  )
}

export default About
