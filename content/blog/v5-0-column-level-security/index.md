---
title: "v5.0 Release: Column Level Security"
description: Data Controller now supports Column Level Security (in both VIEW and EDIT mode) as well as a number of other fixes and improvements
date: '2022-07-11 09:00:00'
author: 'Allan Bowe'
authorLink: https://www.linkedin.com/in/allanbowe/
previewImg: './cls_example.png'
tags:
  - Data Catalog
  - Data Lineage
  - Releases
  - Special Missings
---

# v5 Release

The big news items for Data Controller since the last release are:

* Support for Viya 4
* Support for Base SAS (on [SASjs Server](https://server.sasjs.io))
* Column Level Security (choose VIEWable or EDITable columns for specific groups)

Version 5 also brings some additional goodies!

* One click Data Catalog and Table Lineage refresh on install
* Support for Swedish (and other) Locales
* Deploy Demo DC _without_ Admin Rights
* Configurable Audit History Location
* DC_RESTRICT_EDITRECORD option
* Submit reason in HISTORY
* Shaded PK in VIEW

## New Features

### Column Level Security

Thanks to the new MPE_COLUMN_LEVEL_SECURITY table it is possible to configure:

* Which columns should be VISIBLE in VIEW mode
* Which columns should be EDITABLE in EDIT mode
* Which columns should be HIDDEN in EDIT mode

Rules apply to the specified [DC Groups](https://docs.datacontroller.io/dcc-groups/).  When this mode is activated, it is **not** possible to:

* Add or Delete records
* Modify the Primary Key
* Upload files (eg CSV or Excel)

`video: [Column level Security with Data Controller for SAS](https://www.youtube-nocookie.com/embed/jAVt-omtjVc)`

More information is available in the [documentation](https://docs.datacontroller.io/column-level-security/).


### One click Data Catalog and Table Lineage on Install

Previously it was necessary to dig out the relevant services to refresh the Data Catalog (all versions) or the Table Lineage (SAS 9 EBI only).

We now present links during the deploy process to speed up the initialisation of these features.

### Support for Swedish (and other) Locales

In Viya and SASjs Server, the session encoding is always UTF-8.  For SAS 9 EBI however, the session can vary depending on the Locale - from WLATIN1 through to WLATIN9 and beyond.

Thanks to some updates in our [JSON generator](https://core.sasjs.io/mp__jsonout_8sas_source.html) we can now support UTF-8 outputs even where the SAS session is not UTF-8.

### Deploy Demo DC _without_ Admin Rights

This has always been possible in Viya and SASjs Server (assuming you can write to the necessary folders) but for SAS 9 EBI it was previously necessary to have SAS Management Console or Data Integration Studio (or access to Batch Tools) in order to import the SPK.

Our new deployment process for SAS 9 EBI simply involves running a SAS Program, meaning that you can deploy to any folder in metadata (as a streaming app).

For a full deploy though, you would still need access to the Web Server, in order to deploy the frontend...

### Configurable Audit History Location

Since the [version 4 release](/v4-0-formats-special-missings/) we have been capturing ALL change history in a single audit table.

This has resulted in some voluminous output!

It is now possible  (on a per-table basis) to [configure](https://docs.datacontroller.io/dcc-tables/#audit_libds) alternative audit tables, or to switch the feature off completely.

### DC_RESTRICT_EDITRECORD Option

We are informated that sometimes you would like to have the option to have FEWER options for inputting data!  Who are we to argue.  You can now disable the 'EDIT RECORD' dialog using [this option](https://docs.datacontroller.io/dcc-options/#dc_restrict_editrecord).

### Submit Reason in HISTORY

We have replaced the "groups" column in the SUBMITTED / APPROVE / HISTORY tabs with 'SUBMIT_REASON' - which is even more reason to describe your submits!


### Shaded PK in VIEW

Using [this macro](https://core.sasjs.io/mp__getpk_8sas.html) we now automagically colour the primary key fields in the VIEW menu.

The logic differs from the EDIT menu in that it looks for an actual, UNIQUE + MISSING index on the target table, as opposed to picking up the [BUSKEY](https://docs.datacontroller.io/dcc-tables/#buskey) from MPE_TABLES.

## Bugfixes

We zapped a few of these, notable ones:

* Multiple Approver workflow not working
* Special Missings in cell dropdowns
* Special Missings in filters (BETWEEN + IN)
* Support for leading blanks in Excel uploads


## Model Changes

We've made the following changes to the data model:

* Dropped MPE_APPROVALS table
* Added MPE_SUBMIT table
* Added MPE_COLUMN_SECURITY table
* Dropped HELPFUL_LINK from MPE_TABLES
* Added AUDIT_LIBDS to MPE_TABLES

## Roadmap (11th July 2022)

The following items are on our radar for 2022:

* Admin Screen
* Data Rollback (from UI)
* Data Controller API

