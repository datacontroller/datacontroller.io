---
title: "v5.1 Release: Library & Dataset Info"
description: Spare yourself the effort of coding up a dictionary query or proc contents - you can now view dataset and library info directly in the Data Controller interface.
date: '2022-09-02 09:00:00'
author: 'Allan Bowe'
authorLink: https://www.linkedin.com/in/allanbowe/
previewImg: './cls_example.png'
tags:
  - Releases
---

# v5.1 Release

The new features in this release are:

* Refresh the Data Catalog on a per-library basis
* View the Data Catalog info in a new, linkable, 'library info' screen
* View dataset information (proc contents)
* New Forward & Back option in the Edit Record modal
* Tidying / publishing of [source code](https://code.datacontroller.io)

Various fixes have also been delivered, including:

* Removed error dialog when a library is empty
* Loading of formats with different length settings
* Suppress ABORT modal when dynamic filtering
* Dynamic retreival of Server Context when deploying on SAS 9
* Fixes to various edge cases in the FILTER dialog
* Display correct number of actual changed records (Previously capped at 200, the display amount)
* Dropdown values on modified Edge instance are no longer "sticking" (we built a custom modal)
* Fixed issue with `NaN` being displayed when copy/pasting in certain contexts


There is also a significant speed improvement when working with wide tables (hundreds of variables).


## New Features

### Data Catalog Refresh




`video: [Column level Security with Data Controller for SAS](https://www.youtube-nocookie.com/embed/jAVt-omtjVc)`

More information is available in the [documentation](https://docs.datacontroller.io/column-level-security/).

## Roadmap (11th July 2022)

The following items are on our radar for 2022:

* Admin Screen
* Data Rollback (from UI)
* Data Controller API

If you'd like to see something extra or something else entirely, you can also engage us to build it for you!  Our team specialises in [SAS App Development](https://sasapps.io).
