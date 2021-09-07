---
title: "v3.13 Release: Extended Data Validation and Native Postgres Support"
description: Data Controller now provides additional support for creating dynamic cell dropdowns as well as native Postgres support.
date: '2021-09-06 09:00:00'
author: 'Allan Bowe'
authorLink: https://www.linkedin.com/in/allanbowe/
previewImg: './validation1.png'
tags:
  - Data Quality
  - End User Computing
  - SAS
---

This release contains a number of small fixes and UI improvements, and two major features:

* Extended Data Validations
* Native Postgres Support


## Extended Data Validations

In the [previous release](/3-12-four-new-data-management-features) we provided a feature that allows a SAS developer to create a program (using the source row as input) to determine the values of a particular dropdown.

This feature has now been extended, to allow the response to contain dropdowns for other cells in the same row.  Default values can also be provided for each additional dropdown.

`video: [Retain Formulas when Loading Excel to SAS](https://www.youtube-nocookie.com/embed/rmES77aIr90)`

To make this work, the SAS developer simply needs to write a SAS program that takes a source table named `work.source_row` (the row being edited) and creates two output tables:

* `work.dynamic_values` - the first dropdown
* `work.dynamic_extended_values` - the additional dropdowns, and any defaults.

Your SAS Program (hook script) can be a file on the filesystem (in which case it must end with ".sas") or it can also be a Stored Process or Viya Job in the logical folder tree (metadata or SAS Drive) - in which case it must _not_ end with ".sas".  In both cases you should provide the full path and filename in the MPE_VALIDATIONS table.

More info in [documentation](https://docs.datacontroller.io/dynamic-cell-dropdown).

## Native Postgres Support

Alongside Redshift and SQL Server we now have native support for Postgres.  What does this mean?

Thanks to SAS/ACCESS engines, we can automatically support a very wide range of database engines.  However load times can become significant when the target contains millions (or billions) of rows.

In order to provide "native" support we update our load process to 'inject' a temporary table using SQL passthrough, which results in significantly faster updates for certain load types, such as SCD2.

<hr>

Did you know Data Controller is free for up to 5 users? [Contact us](/contact) for your copy!
