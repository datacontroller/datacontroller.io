---
title: Version 3.11 - Release Notes (Redshift, Locale, Proc Transpose)
description: V3.11 of Data Controller includes Amazon Redshift support, a Locale switch, Data Lineage for Proc Transpose, and varoius UI & Performance enhancements.
date: '2021-02-14 13:58:57'
author: 'Allan Bowe'
authorLink: https://www.linkedin.com/in/allanbowe/
previewImg: './1_5i1_LPEiMqqEuAmYhcmcIw.png'
tags:
  - licence
  - redshift
  - Releases
---

Following a busy few months, a number of new deployments and feedback from several customers we are <noframes></noframes>w ready to release version 3.11 of Data Controller for SAS©. The biggest news in terms of updates is the addition of the licence key. This enables us to offer Data Controller for up to 5 users **without charge**!

## Features

- REDSHIFT support - we now provide native pass-through access to Amazon Redshift for all load types (Replace, Update, SCD2 and Bitemporal). So you can safely modify that 100 million row table! Or use our generic macro to perform incremental loads as part of your batch process.
- LOCALE switch - you can now explicitly set your locale (can be useful when importing CSV or Excel as the loader uses anydtdtme. informats)
- DATA LINEAGE for PROC TRANSPOSE - previously our SAS 9 column level lineage diagrams did not support this transform. Now it does! With thanks to [Hans-Juergen](/siemens-healthineers-smart-data-catalog/) for his contribution.
- Reason message in emails - previously we were not showing the SUBMIT or REJECT messages in the notification emails. Now, we do.
- Drag & Drop Excel or CSV directly over the table to upload (no need to click the 'upload' button any more)
- Separator on the number of observations - handy when your table has billions of rows. 23,456,233,677 is easier to read than 23456233677!
- Discard button - in case you uploaded the wrong Excel
- Refresh button - no need to navigate away and back (or refresh the entire app) to refresh the data
- Refactored and improved FILTER interface (now with datetime pickers)
- Streamlined Viya Deployment

## Fixes

- In the VIEWER, there was an issue where tables were not shown where the libref in metadata was in lowercase and library level permissions were applied. This is now fixed.
- There was an issue where the only 'PROCESSED' column name was 'PROCESSED_DTTM'. You can now designate any (numeric) column to be updated with the current timestamp when that record is modified.
- File downloads in Viya now work when deployed to contexts other than 'SAS Job Execution compute context'
- Column widths can now be modified when using the filtered view of the table
- ACCEPT / REJECT buttons are now disabled if the user is not in the APPROVE group
- The app no longer fails if a trailing slash is provided by the user in the DCPATH variable
- Fixed issue where arrow was not shown in the Handsontable dropdown for some selectbox types
- Updated User Navigator in Viya to show additional user specific info

## Redshift

The loading routine for Redshift makes use of configurable bulkload options via the MPE_CONFIG table. The MPE_DATALOADS table tracks every time a table is loaded, showing the number of records added, removed, and modified - along with details of who made the update, when, a reason code, and which table was modified. Full table copies are avoided by performing SQL pass through in SAS©.

## Other areas

We've also made significant strides in our DevOps thanks to the [SASjs](https://sasjs.io) framework, brought the product into the [Analytium](https://sasapps.io) fold (UK SAS Partner), and - in addition to a standard pricing - we have put together a reseller pack. Again, contact [Allan Bowe](https://www.linkedin.com/in/allanbowe/) for further details. As a reminder, Data Controller is free for up to 5 users, and this includes all features:


- Ability to upload any Excel or CSV file to any SAS© registered table
- SAS 9 Table & Column level lineage with SVG & PNG export
- Data Edit & Approval workflow with Audit history
- Export in CSV, Excel, SAS Datalines, DDL format
- User Navigator (Viya + SAS 9)
- SAS 9 Metadata Navigator
- Data Quality rules
- Data Dictionary
- Data Catalog
- Data Alerts

Thanks to SAS/ACCESS engines we can support all major databases, eg Netezza, Teradata, SPDE, Postgres, SQL Server, Redshift etc.

Note - the free offer does not permit re-use of the underlying macros, and support is 'best endeavors'. Further details on the [pricing](/pricing) page, else contact [Allan Bowe](https://www.linkedin.com/in/allanbowe/).
