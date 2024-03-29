---
title: EUC Management Systems need these 12 Attributes
description: An EUC management system should automatically identify, clean, secure, backup, and integrate EUC data with full auditability, ownership, and approval.
date: '2018-10-30 09:13:25'
author: 'Allan Bowe'
authorLink: https://www.linkedin.com/in/allanbowe/
previewImg: './DC-UML-Activity-Diagram-2.png'
tags:
  - Data Management
  - End User Computing
  - EUC
  - Excel
  - SAS
  - Shadow IT
  - VBA
---

End User Computing (EUC) applications are unavoidable - the challenge is not to erase them, but to embrace automated approaches to EUC management that will identify, clean, secure, backup, and integrate EUC data with full auditability, ownership, and approval.
<h2>The Much-Maligned EUC</h2>
EUC applications such as Excel, Access Databases, and locally executed programs, are often targeted as the source of a myriad of risks - such as financial misstatements, internal fraud, incorrect models, and potential for business process disruption. The rationale being that business developed / owned applications are not subject to the same access controls, development &amp; testing standards, documentation and release management processes as can be found over the "IT Fence". Whilst this is probably true, the inherent flexibility of EUCs that can be quickly updated without service desk requests, project codes, or lost arms &amp; legs - means that EUCs are, regardless, here to stay.

The challenge is to find a way to shine a light onto this "Shadow IT", and provide a framework by which EUC data can be extracted in a simple, safe, secure, scalable, and auditable fashion. <a href="/wp-content/uploads/2018/10/DC-UML-Use-Case-Diagram-EUC.png"><img class="aligncenter size-large wp-image-1008" src="/wp-content/uploads/2018/10/DC-UML-Use-Case-Diagram-EUC.png" alt="EUC Use Case Diagram" /></a>
<h2>EUCs can be Controlled</h2>
The 'war on EUCs' cannot be won - it simply isn't practical to ban them, or to migrate / redevelop every closely held and highly complex legacy VBA application. Until alternative solutions for Citizen Developers to build Enterprise Apps (such as <a href="https://sasjs.io">SASjs</a>) become mainstream, simple measures / controls on the EUCs themselves must be implemented - such as version control, readonly attributes, embedded documentation, peer review etc. In the meantime, a management system for EUCs is the ideal place for capturing the requisite metadata needed to monitor, audit, and secure the data therein. Such a management system should have, as a minimum, the following attributes:
<h3>EUC Data Quality at Source</h3>
The ability to run data quality routines at the point of data upload (from EUC to secure IT environment) provides instant feedback to EUC operators that will allow them to make corrections and avoid costly post-upload investigations, re-runs, or worse - incorrect results. As part of this process, it should be easy to create and update those Data Quality rules. A longer discussion of Data Quality can be found <a href="https://www.linkedin.com/pulse/zen-art-data-quality-allan-bowe/">here</a>.
<h3>EUC Data Review (4 eyes)</h3>
After EUC data is submitted, it should be reviewed before the target database is updated. It should be possible (but not mandatory) for this check to be performed by a different individual. When performing that check, it should only be necessary to review new / changed / deleted records. For changed records, the reviewer should also be able to see the original values. If the data is approved, the target table is updated. If rejected, the staged data can simply be archived.
<h3>Roles &amp; Responsibilities (RACI)</h3>
By capturing who is actually submitting the data, we can see who is responsible for each EUC. By reviewing who is signing off on that data, we have an indication of who is accountable. And by seeing who is being notified of changes to that data, we can deduce who are being consulted / informed. It will then be unnecessary to conduct time-consuming interviews or audits to produce instantly out of date and error-prone EUC ownership documentation!
<h3>EUC Data Security</h3>
EUCs are often present on network shares, with opaque access policies and few (if any) controls to prevent unintentional deletion or corruption of data. An EUC management system should ensure data protection from the point of EUC integration right through to the loading of the data to the target table(s). End users should not require write access to the target databases! Neither should individuals in IT be regularly relied upon to run manual scripts for loading business critical data. Finally, it should be possible to restrict (at both column and row level) which groups are given permission to edit or approve data.
<h3>Ease of Use</h3>
Adding new tables / EUCs to the system should be a BAU (configuration) task, and possible without needing to secure IT development resource. The process should be so well defined, that new EUC operators can safely integrate their processes with minimum (if any) engagement from IT.
<h3>EUC Traceability</h3>
Understanding the flow of data into regulatory reports is essential for ensuring the accuracy of the figures they contain. Whilst this can be done automatically in some IT systems (eg SAS Metadata or Prophet Diagram View) the lineage breaks down when data flow crosses system borders. An EUC management system therefore should keep a full history to enable traceback of data items, right back to a copy of the EUC from where the data arrived.
<h3>EUC Data Integration</h3>
Any "system" worth it's salt will enable easy integration and flexible workflows to ensure that subsequent processes can be triggered on relevant events (such as EUC submission, or data approval). There should be no manual steps other than the act of submitting the data, and reviewing / approving the data.
<h3>Version control / automated testing</h3>
This should really go without saying, however the reality is that there are still many teams (yes, even in IT) who work without source control. Don't even think about building a complex data management system without solid source control and a comprehensive test harness. Not to mention automated build and deployment. When it comes to a system that is responsible for maintenance of business data, it is imperative that it is robust, performant, and filled with checks and controls.
<h3>Documentation</h3>
Whilst a decent system should be intuitive enough to operate without a manual, when it comes to maintaining, extending, or using advanced features - documentation is essential, and should be updated regularly. New feature? Write the test, make the fix, build &amp; deploy, pass the test, update the documentation, release. Documentation should be useful for users, developers, and administrators - with diagrams, screenshots, and process flows.
<h3>Scalability</h3>
During month end, temperatures are high and the pressure is on. The last thing you need on BD2 is system failure, especially when it's 4:30 on a Friday and 150 users are affected. Be sure your platform of choice is proven, supported, and highly available.
<h3>EUC Auditability</h3>
One of the biggest business benefits of an EUC Management System is the ability to trace data directly back to a locked down copy of the EUC that it came from. The system should therefore make it easy to identify and locate that copy, to see who submitted it, who signed it off, and what the precise changes were (adds, updates, deletes). <a href="/wp-content/uploads/2018/10/DC-UML-Deployment-Diagram-without-EUC-EUC-version.png">
<img class="aligncenter wp-image-1055 size-large" src="/wp-content/uploads/2018/10/DC-UML-Deployment-Diagram-without-EUC-EUC-version.png" alt="" /></a>

## Data Controller for EUC Management

Before you go ahead and build / maintain your own ‘black box’ bespoke EUC reporting solution, take a look at what the Data Controller has to offer (in addition to everything described above):

- Ability to run bespoke SAS programs before / after every edit or approve
- Easy / simple deployment (entirely within your existing SAS platform)
- Roadmap (version restore, data access reports, data profiling)
- A smooth and performant review and approve experience
- A proven methodology for EUC capture
- Extensive [documentation](https://docs.datacontroller.io)
- Free Community Edition
- [Formula Support](https://docs.datacontroller.io/excel)
- Secured by SAS

We can also provide an on-site consultant to perform the deployment and user training. [Get in touch](/contact) to learn more!

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/QhShWNnNjIw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
