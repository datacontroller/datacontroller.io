---
title: ROI and Payback
description: How much time & money could you save by implementing Data Controller? We help you calculate the ROI and Payback time of your software investment.
date: '2021-07-15 09:00:00'
author: 'Allan Bowe'
authorLink: https://www.linkedin.com/in/allanbowe
previewImg: './roi.jpeg'
tags:
  - ROI
  - Payback
  - Regulatory
---

# ROI and Payback of Data Controller

For some customers, the evaluation of a tool is less about the additional value it provides, and more about - will this save me time (and therefore, €€€)?

By quantifying these savings, it is possible to calculate the rate of return of your investment in Data Controller (ROI) and the Payback period - how long it will take before that investment is effectively recuperated.

To assist with this process, we will explain all the areas where Data Controller can save time - and finish with a calculator you can use to build your business case internally.

## #1 - Development Time

This represents the time spent designing and writing the SAS code (or DI Job) that will take a business input and load it into an existing SAS table.  It could be a `proc import`, or an `extract` transform, or even a full-blown bespoke web application for capturing the particular input requirement.

It also includes the time spent unit testing that code, documenting any macros, and parameterising it accordingly for the particular input (eg, the network share in which the input file will land).

With Data Controller, this time is reduced to zero.  By taking metadata from the target table (columns, lengths, types, attributes such as NOT NULL) a grid is displayed dynamically into which end users can safely make changes, or drop files such as Excel or CSV with **zero code** (the data is extracted dynamically by JavaScript).


## #2 - Deployment Time

This represents the time taken to move jobs and programs from dev, through other SAS environments such as test, acceptance, and production.  As part of this, it's often necessary to produce release documentation, perform additional deployment steps (such as setup of landing areas, permissions), prepare backout scripts, and perhaps even attend a Change Management meeting to explain the upcoming updates.

With Data Controller, again - this part is reduced to zero.  Unless there was a need to configure a table to be editable in a test / accept environment, it wouldn't need to be done (and if it was, it would be a config change via the interface, not an actual code change).

## #3 Batch Incidents

Quite frequently, when capturing CSVs and Excel files from business users, there can be unintentional changes to the file format or data therein.

This can play havoc with the batch jobs used to build them, which typically expect a fixed structure, naming convention, directory path, and file type.

Failures in batch runs take time to troubleshoot and resolve, with knock-on impacts to downstream reporting teams.

Data Controller sidesteps the problem by ensuring that data is validated on arrival - ie, the user is unable to upload invalid data.  At the same time, the process is flexible enough to ingest data with varying formats, so long as all the necessary columns are provided.

Batch incidents based on invalid files are therefore avoided.


## #4 Data Quality Issues

For various reasons, data captured regularly from business users, can one day fail to meet quality standards.  This typically creates a whole bunch of work:

* Incident reporting the quality issue
* Creating a new rule for the quality issue
* Testing and deploying the new rule
* Reloading the original data

Data Controller drastically reduces the time spent on Data Quality with the following features:

* Automatic rules based on the target table schema
* Configurable frontend validations
* Simple and Complex dropdown rules
* Ability to run backend SAS programs for advanced DQ

In addition, corrections can be made immediately, 'in place', with an approval step and audit trail.

## #5 Compliance Costs

For many regulated clients, the costs of compliance (such as [Sarbanes Oxley](/sarbanes-oxley), BCBS, national [Data Quality regulations](/data-quality-and-the-nbb_2017_27-circular)) fall into 3 camps:

* Ongoing (day to day) costs
* Regular (eg annual) audit costs
* Fines (or the risk thereof)

In terms of data, such costs might come down to storing multiple copies of Excel EUCs on network drives, and the resultant technical debt (extra time) incurred in managing these as the copies mount up during a complex month-end process.

For audits, especially when performed by external companies, the time spent can be significant.  For end-user computing systems (where source code is not secured) such audits must be _reperformed_ every time, which can get very expensive.

Examples of fines that have been dealt in the past due to Data Quality or Data Access issues include:

* Morgan Stanley (2020), [$5 million](https://www.cappitech.com/blog/morgan-stanley-fined-5m-for-swap-data-reporting-errors-as-cftc-looks-to-improve-data-quality)
* Citibank (2020) [$400 million](https://occ.treas.gov/news-issuances/news-releases/2020/nr-occ-2020-132.html)
* DTCC (2021) [£350k](https://www.msn.com/en-gb/money/other/eu-securities-watchdog-slaps-dtcc-s-derivatives-unit-in-the-city-with-350k-fine-for-negligence/ar-AAM3u06)


The benefits of Data Controller in these areas are also threefold:

* Reduced ongoing cost of operation (spreadsheets backed up securely with each dataload)
* Reduce the cost of recertification with clear, controlled on-ramps from EUC to SAS
* Reduced risk of fines through a well documented, IT controlled Data Governance process with embedded 4-eyes approval for every upload

## #6 Data Lineage

For SAS customers using Data Integration Studio, a wealth of data lineage is available that maps source systems to target tables and vice versa.

To surface that information, it is typically necessary to make a request to an ETL developer (with DI Studio), or to step through a large number of connectors in SAS Lineage.

Data Controller provides both FORWARD and REVERSE lineage diagrams, available directly to all SAS users, that can be exported in PNG, SVG, and CSV formats.

## #7 Dataset Locks

Where end-users are using desktop tools to connect to SAS (eg Base SAS or Enterprise Guide) this can result in table locks preventing updates by other SAS users.

By using the VIEW menu in Data Controller to examine tables, no locks are held, and hence no processes are disrupted.  In addition, it is possible to share links to tables, even filtered views of those tables.

## #8 Additional Value
Data Controller ships with dozens of [features](https://docs.datacontroller.io/#product-features) that help with Data Quality, Data Governance, and Data Management - such as:

* Data Catalog
* Data Dictionary
* Data Alerts
* Data Quality routines
* Data Loading routines
* DDL Exports
* User Navigator
* Metadata Navigator
* Data Model Change Tracking

We provide a section in the calculator for you to quantify the benefits/savings from having such features.


## ROI Calculator

Download our calculator, and see how much you could save by deploying Data Controller!

[
<button>
Download
</button>](/files/DC_ROI_PAYBACK.xlsx)