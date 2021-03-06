---
title: Sarbanes-Oxley and Data Controller for SAS©
description: Learn how Data Controller for SAS reduces the risks and compliance costs of Sarbanes-Oxley and associated PCAOB Accounting Standard 5.
date: '2020-08-12 01:00:21'
author: 'Allan Bowe'
authorLink: https://www.linkedin.com/in/allanbowe/
previewImg: './Screenshot-from-2020-08-10-19-16-01.png'
tags:
  - data controller
  - Data Lineage
  - pcaob
  - Regulatory
  - sarbanes-oxley
  - SAS
  - sox
---

The Sarbanes-Oxley Act of 2002 has applied to all publicly-traded companies doing business in the US since 2006. The penalties can be severe - if Uncle Sam considers a corporate officer to have deliberately submitted an inaccurate certification, the corporate fine is $5 million with up to twenty years in prison for the individual(s). Accidental mis-certification (or non-submission) is just $1 million and 10 years in prison.

There are many aspects to full Sarbanes-Oxley (SOX) compliance, the [legislation](https://www.govinfo.gov/content/pkg/BILLS-107hr3763enr/pdf/BILLS-107hr3763enr.pdf) is over 60 pages long. As with other regulatory obligations, the goal is to regularly provide enough evidence to satisfy the auditor that the requirements have been met. As anyone running a compliance team knows, this is no small endeavour. The ability to automate the generation of such evidence, or make it available automatically to auditors, can result in significant cost savings. This article breaks down the areas where Data Controller can contribute to satisfying the requirements of the Sarbanes-Oxley Act.

## Sarbanes-Oxley Act Section 404 - MANAGEMENT ASSESSMENT OF INTERNAL CONTROLS.

Data Controller facilitates internal controls through a 4 eyes review &amp; approve mechanism for data changes. This, combined with data validation and an integrated workflow feature, provides a mechanism to easily track and report on the number of internal controls (quality rules, signoffs, rejections), as well as the frequency they are applied, who is applying them, which data items the controls relate to, and who is performing them. Such metrics can be compared and contrasted with pre-existing and current quality measures to help determine control effectiveness. Variations in the number of submit / approve cycles between reporting teams, also provide objective and repeatable measurements to support the assessment of the effectiveness of internal controls.

<div class="imgHolder"><a href="https://www.govinfo.gov/content/pkg/BILLS-107hr3763enr/pdf/BILLS-107hr3763enr.pdf"><img class="wp-image-1105 size-full aligncenter" title="Sec 404. (Sarbanes-Oxley)" src="/wp-content/uploads/2020/08/Screenshot-from-2020-08-07-17-57-01.png" alt="Sarbanes Oxley"/></a><caption>Sarbanes Oxley</caption></div>

&nbsp; Section 404 is widely considered the most onerous part of Sarbanes-Oxley, as the documentation and testing of all the controls requires significant time and effort. To address this, the <a href="https://pcaobus.org/">Public Company Accounting Oversight Board</a> (PCAOB - a US non-profit created by the Sarbanes-Oxley act itself) released<a href="https://pcaobus.org/Rulemaking/Docket%20021/2007-06-12_Release_No_2007-005A.pdf"> additional guidance</a> to assist management and auditors in producing their reports. This is officially labeled "Auditing Standard No. 5 - <em>An Audit of Internal Control Over Financial Reporting That Is Integrated with An Audit of Financial Statements"</em> A few points are highlighted by the guidance in this standard that are pertinent to users of Data Controller. <h2>PCAOB AS5 Sec24 - Controls Over Management Override</h2> Management Overrides (the freedom to simply "replace" reporting figures based on, presumably, sound judgement) are entity level controls that can be easily captured (in a centralised manner) by Data Controller. This in fact, is the "core functionality" of the tool. Data Stewards / Data Processors (Editors) make the change, then one or more Data Owners / Data Controllers (Approvers) sign it off before it is applied to the target table. A copy of the original excel file (if used) and a record of who made the change, when, what the change was, and why (if a reason is provided) is recorded. <a href="https://docs.datacontroller.io/dcc-validations/">Data Validation</a> rules can also be defined to ensure that inputs fit the desired pattern(s). <a href="https://pcaobus.org/Rulemaking/Docket%20021/2007-06-12_Release_No_2007-005A.pdf"><img class="aligncenter wp-image-1122" src="/wp-content/uploads/2020/08/Screenshot-from-2020-08-10-10-41-12.png" alt="Sarbanes Oxley sas management overrides" width="887" height="409" /></a> For fun, we made a short video for this part:

`youtube: https://youtu.be/iY3KQZL4ok0`

&nbsp; <h2>PCAOB AS5 Sec27 - Identifying Entity-Level Controls</h2> <img class="aligncenter wp-image-1126" src="/wp-content/uploads/2020/08/Screenshot-from-2020-08-10-12-58-26.png" alt="Sarbanes Oxley SAS Section 24" width="792" height="198" /> In the area of documenting the inputs, transformations and outputs of data flows within an organisation, SAS particularly shines, especially in the version 9 world. The table and column level lineage generated by SAS Data Integration provides a highly detailed view of the data lineage. Below is an example of Table level lineage, which colour codes each table according to it's library and captures the detail of each SAS job along the way. Clicking on a job will open the job in the metadata viewer. Clicking the table will open the table in VIEW mode. The lineage is shown all the way from source to target(s), or target to source(s) and can be exported in PNG, SVG, or CSV format.

<div class="imgHolder"><img class="aligncenter" src="/wp-content/uploads/2020/08/Screenshot-from-2020-08-10-14-41-04.png" alt="SAS Table Level Lineage Sarbanes Oxley"/><caption>SAS Table Level Lineage</caption></div>

Below is an example of column level lineage. Like Table Level lineage, this can be performed forwards or backwards and exported in multiple formats. Each arrow represents a SAS transform. Where business logic is applied, this is additionally extracted and showed in red.

<div class="imgHolder"><img class="aligncenter" src="/wp-content/uploads/2020/08/Screenshot-from-2020-08-10-18-42-50.png" alt="SAS Column Level Lineage Sarbanes Oxley"/><caption>SAS Column Level Lineage</caption></div>

&nbsp; The ability to define additional data lineages, outside of SAS (eg between spreadsheets or other reporting systems) is in the product roadmap, along with lineage from SAS Viya. <h2>PCAOB AS5 App B - Benchmarking of Automated Controls</h2> The use of IT secured financial controls can significantly reduce the cost of Sarbanes-Oxley compliance testing following the first year assessment, particularly where the source code is secured and cannot be modified by users. The core programs (services) within the Data Controller application that perform data signoffs are mature, distinct and change tracked - so it is possible for Data Controller to be upgraded in-place without affecting the benchmarking strategy. This contrasts with spreadsheet based control mechanisms, which must be revalidated in each reporting period.

<div class="imgHolder"><a href="https://pcaobus.org/Rulemaking/Docket%20021/2007-06-12_Release_No_2007-005A.pdf"><img class="aligncenter" title="PCAOB Release 2007-005A, Appendix B" src="/wp-content/uploads/2020/08/Screenshot-from-2020-08-08-22-15-50.png" alt="Sarbanes Oxley SAS"/></a><caption>PCAOB Release 2007-005A, Appendix B</caption></div>

## Sarbanes-Oxley Act Section 1102 - Tampering

Coming back to the original 2002 SOx paper, there is an additional stick being waved against those who destroy records. This is, unfortunately, a common occurrence in DWh landscapes - poorly designed data models often result in frequent rebuilds of monthly datamarts when issues are found. If your BI / ETL teams are routinely destroying / modifying database records as part of regular work efforts, you might wish to: a) ensure there is a well documented ticketing system to make sure those individuals are protected from any accusations, or b) implement a [Bitemporal](/bitemporal-historisation-and-the-sas-dds/) data model to ensure a full and transparent version history of data is always kept regardless of rebuilds. IT-secured tools such as Data Controller enable auditors to see easily for themselves who has changed a record, when, why, and who signed it off - thereby vastly reducing the potential for unintentionally impeding an investigation.

<div class="imgHolder"><a href="/wp-content/uploads/2020/08/BILLS-107hr3763enr.pdf"><img class="aligncenter size-full" title="SEC. 1102. (Sarbanes Oxley)" src="/wp-content/uploads/2020/08/Screenshot-from-2020-08-07-20-18-21.png" alt="sarbanes oxley SAS"/></a><caption>SEC. 1102. (Sarbanes Oxley)</caption></div>

## Sarbanes Oxley and SAS

We chose SAS as the platform on which to build Data Controller as it is very reliable, provides excellent support for data drivers (enables our code to run inside almost any database), long term customer support, and is very easy to deploy against. The demo version of Data Controller can be [deployed in under 30 seconds](https://docs.datacontroller.io/videos/#deploying-data-controller) (on a SAS 9 platform).

With SAS there are no additional servers to provision, firewalls to configure, scaling issues to address - everything works "out of the box". SAS also integrates nicely with existing enterprise authentication mechanisms such as LDAP, and the platform is typically fully secured under your existing IT policies at the backend.

Data Controller is built on [SASjs](https://sasjs.io) and hence we have versions for both SAS 9 and Viya. Do [get in touch](/contact/) to learn more.
