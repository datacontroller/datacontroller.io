---
title: "v6.1 Release: Source Available"
description: Data Controller source code is now freely available for anyone to build and evaluate.  We also enabled full deletion of formats, and reduced the audit data volumes (whilst retaining full change history).
date: '2023-07-25 09:00:00'
author: 'Allan Bowe'
authorLink: https://www.linkedin.com/in/allanbowe/
previewImg: './gitea_logo.png'
tags:
  - Releases
---

# v6.1

This will be our last ever release (blog) post - sniff sniff - actually it's very good news, because we're moving to a fully automated and PUBLIC release system!

Here you can find the notes (and assets) from the 6.1 release:  [https://git.datacontroller.io/dc/dc/releases/tag/v6.1.0](https://git.datacontroller.io/dc/dc/releases/tag/v6.1.0).

In addition we've added the ability to fully delete formats from catalogs, reduced the volume of audit data, and zapped a couple of smaller bugs too.

## Source Available

Transparency is very important to us, as a team, and also for you - as you are trusting our software inside one of your most strategic platforms.  Whilst we have had a 'source available' policy for several years now, it has been on a private invite / request basis.  With version 6.1 it is now possible for ANY customer of SAS to freely evaluate our software without having to trust our build, or even to talk to us - you can create a release yourself, directly from the source repository, available here:  [https://git.datacontroller.io/dc/dc](https://git.datacontroller.io/dc/dc).  All the steps can be viewed in the project [release.yaml](https://git.datacontroller.io/dc/dc/src/branch/development/.gitea/workflows/release.yaml).

The source is available on a [dual licence](https://git.datacontroller.io/dc/dc/src/branch/development/licence-non-commercial-datacontroller.pdf) (the same as our commercially sub-licenced grid system).

![](./gitea_logo.png)

We will continue to publish the SAS code in doxygen form at [https://code.datacontroller.io](https://code.datacontroller.io). If you would like the ability to raise issues, or would like to submit a pull request, do get in touch via support@datacontroller.io and we will gladly create a user account for you.


## Format Deletion

Unlike data in regular tables, formats must be modified and reloaded to catalogs in their entirety.  Our previous approach for deletions was to export the format, remove the offending rows, and reload the catalog.

This is problematic when every row is marked deleted, as there is nothing to reload.  The [fix](https://github.com/sasjs/core/pull/342) was made in the underlying [mp_loadformat.sas](https://core.sasjs.io/mp__loadformat_8sas.html) SASjs Core macroj - now, when **all** format records are removed, `proc format` is invoked with the `delete` statement for those formats in the specified catalog.

## Reduced Audit Data

Previously when loading an [audit table](https://docs.datacontroller.io/tables/mpe_audit/) we always included the entire row - including values that have not changed.

This resulted in some very large audit tables, especially for tables with hundreds of columns!

To limit data volumes, audit records are now _excluded_ when `MOVE_TYPE="M"` (modified record), `IS_PK=0` (not a primary key column) and `IS_DIFF=0` (no change to the value).

We will continue to post the full record where `MOVE_TYPE in ("A","D")` (added/deleted) so that the table state can be recovered from a backup of the table, or reverted back from a modified table.


## Fixes

Bugs we've blasted:

* Frontend rejection of excel uploads with duplicates on the primary key
* Missing `mf_existds()` macro issue when refreshing table lineage (SAS 9 EBI) or regenerating the Table Catalog.



















