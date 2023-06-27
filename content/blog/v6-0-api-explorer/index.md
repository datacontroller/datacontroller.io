---
title: "v6.0 Release: Unlimited Users, Viya API Explorer"
description: Data Controller community tier now includes unlimited users! We also added an API explorer (Viya only) and overhauled the (in)format ingestion capability as well as many smaller fixes and improvements.
date: '2023-06-26 09:00:00'
author: 'Allan Bowe'
authorLink: https://www.linkedin.com/in/allanbowe/
previewImg: './viewbox.png'
tags:
  - Releases
---

# v6.0

With a (Viya) API explorer, an overhauled (in)format ingestion capability, and unlimited (free) users - Data Controller v6 is a major release indeed!

## Viya API Explorer

Following on from the metadata explorer (SAS 9 EBI feature) we have been looking to provide a similar capability for Viya.  And so, we built the API explorer!

This lets you easily trigger the (GET) APIs and explore the responses without having to break open Postman or another development toolkit.  Here's an example of opening a Job and examining the SAS code:

`video: [Browsing JSON content in Viya](browsing.mp4)`

Here we grab the raw JSON for pasting into VS Code:

`video: [Grabbing JSON from Viya API](json.mp4)`

And here we toggle the start / limit parameters to bring back more values:

`video: [Viya API start/end params](start-limit.mp4)`



## Unlimited Users (in Free Tier)

If you've been following us for a while you've probably heard the '5 users free' tagline.  Well - you will hear it no more, as we now offer the community edition on an 'unlimited user' basis!

That's right, you can download Data Controller and use it across your entire enterprise TODAY, without spending a penny.

If, however, you would like:

* priority support
* more than 15 VIEW rows
* more than 5 EDIT rows
* Excel uploads

We ask that you engage us on a TEAM or ENTERPRISE plan.

## (IN)FORMAT Capabilities

Previously we were only supporting the ingestion of run-of-the-mill SAS formats.  Following customer feedback, we have now expanded this capability to include:

* Informats
* Multilabel Formats
* NotSorted Formats

The addition of these format types broke the data model we were using previously for holding format data.  We had incorrectly assumed that the CNTLOUT dataset could be keyed on TYPE, FMTNAME and START.

In fact, START can be null, and the format data can have complete duplicates (multilabel). Furthermore, the _order_ of records is important (notsorted).  Therefore we have applied a new key (TYPE,FMTNAME,FMTROW) where FMTROW is the index of the record of the format in question.

This means if you insert a row in a format, Data Controller will see this as a CHANGE to all the rows underneath (if they are not duplicates).  This difference in behaviour, as well as the the change in the model, is the only "breaking change" in this release.  It will likely only affect you if you are using Excel or CSV to upload (in)format data.

This primary key is also displayed (now) in VIEW mode.

## Admin Screen

We've added a new screen (under username/SYSTEM) to show system details as well as a handy set of shortcut buttons for refreshing the data catalog and downloading configuration files.

![](admin.svg)

This screen is also available for regular users (those not in the Data Controller admin group), but without the additional buttons.


## Load More Values

We've added the ability to 'load more' history on the history page, as well as the ability to [show more history by default](https://docs.datacontroller.io/dcc-options/#history_rows)

"More Values" can now also be requested from the selection dropdowns when creating data filters.


## Bugfixes

Some of the isues we've zapped:

* Show special missing values on VIEW screen
* Enable data-catalog refresh of a single library when invalid libraries are present
* Bug with delete-only uploads not appearing in the audit table
* Prevent error being thrown when attempting an UNLOCK of an already-unlocked table

## Roadmap

Looking to the future, we are actively tidying up the codebase to release it as 'source-available' (the source is already available to existing customers).  We are also investigating the HandsOnTable "Formula" feature to see if we can implement it on the EDIT grid.

If you would like to see any new features in DC, or would like to kick the tyres and give it a whirl, do [get in touch](https://datacontroller.io/contact)!

















