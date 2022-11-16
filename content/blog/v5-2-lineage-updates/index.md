---
title: "v5.2 Release: Lineage Updates"
description: The lineage in SAS 9 EBI is a beauty to behold.  We bring it to your browser, and it's now better than ever!
date: '2022-11-16 09:00:00'
author: 'Allan Bowe'
authorLink: https://www.linkedin.com/in/allanbowe/
previewImg: './lineage.png'
tags:
  - Releases
---

# v5.2 Release

Whilst not a core feature of Data Controller, and only available on the SAS 9 EBI instance (not Viya or SASjs Server), many of you are telling us that your favourite feature is the Data Lineage explorer!

And recently it's been getting battle tested in some large environments with sizeable lineage trees. The (single) new feature in this release therefore is the ability to limit lineage depth before generating the lineage.

![](collineage.png)

We've also spent time in this release improving the responsiveness of Data Controller to suit different screen sizes. We've reduced the number of menu items from 5 to 3, and adjusted the way the menu works when Data Controller is accessed from devices such as mobile or tablet.

The following fixes have been deployed:

* Prevent hanging in column lineage when library id not found
* Fix issue with "max_depth" not limiting depth in some cases
* Fix issue with PK fields not shown in dictionary tables
* Escaping of ampersands in file / table lineage
* Fix alignment of the "library info" screen

Finally, since the last release, we also made a demo instance of Data Controller public.  It makes use of the mocking capabilities of [SASjs Server](https://server.sasjs.io) (backend is JS-only).

You can try it out here: [https://demo.datacontroller.io](https://demo.datacontroller.io)


