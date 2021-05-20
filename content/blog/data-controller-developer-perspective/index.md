---
title: Data Controller - a Developer Perspective
description: Rafal Gagor - veteran SAS Developer - shares his thoughts and experience of using Data Controller for SAS® on a client project.
date: '2020-07-29 09:11:59'
author: 'Allan Bowe'
authorLink: https://www.linkedin.com/in/allanbowe/
previewImg: './IMG-20190430-WA0049.jpg'
tags:
  - data controller
  - data lineage
  - metadata
  - release management
  - sas
  - Use Cases
---

<h1>What problem does Data Controller for SAS® solve?</h1>

<div class="imgHolder alignright"><a href="https://www.linkedin.com/in/rgagor/"><img class="wp-image-1070 size-square" src="https://datacontroller.io/wp-content/uploads/2020/07/IMG-20190430-WA0049-180x180.jpg" alt="Rafal Gagor - Veteran SAS Developer" width="180" height="180" /></a><div><span>Rafal Gagor - Veteran SAS Developer</span></div></div>

It's a question we get asked a lot, and so this is the first of a series of articles that explore real users and their actual use cases. We caught up with <a href="https://www.linkedin.com/in/rgagor/">Rafal Gagor</a>, a DI Developer with 2 decades of SAS and Financial Services experience, to get his impressions after using Data Controller for SAS on a client project.

## So, Rafal - what did your Client use Data Controller for?

Data Controller was implemented initially as the backbone of a <a href="https://sasjs.io">SASjs</a> Release Management system - it allowed my colleagues and I to upload, for each promote, a list of affected SAS artefacts along with details of the release, and associated JIRA tickets. We could make changes directly via the web interface, or by uploading an Excel file. It was great to capture that information automatically in a database and have data quality rules applied at source. The resultant "clean" data enabled the delivery of a robust release management web application that saved hours of manual effort each week.

## Nice use case. How did you manage before you had Data Controller?

Previously, release management was a process performed manually and inconsistently, with data scattered across dozens of Excel and Word documents - it was not brought into SAS at all. In the case of other, regular, business-sourced tables that needed to be uploaded - the options were to either hand-craft an upload process manually as a "one off" using Enterprise Guide, or to build (and deploy) an ETL flow sourced from an Excel or a CSV file deployed to a network drive.

This option was problematic - how frequently to run the flow? What if the file format changed? What if the target table changed? It was therefore quite convenient to have the ability to hand such processes back to the data owner, who could safely modify the data within Data Controller without running the risk of overwriting any indexes or otherwise changing the schema of the table.

## Last question. What were your favourite Data Controller features?

Probably my favourite feature was the <strong>Metadata Navigator</strong> - I hadn't been able to use this since moving away from Base SAS quite some years ago. It was useful to be able to navigate through the objects and associations, and view the properties and attributes, without writing any code. Next up was the <strong>Data Lineage</strong> explorer.

When the business told me there was an issue with a particular field, it was really helpful to use the Data Controller graphical tools - at both table and column level - to perform a reverse (Target to Source) lineage diagram and quickly understand the data flow. This avoided the need to open up every job in DI Studio and explore the transforms.

Although it's a basic feature, it was great to use the <strong>Data Viewer</strong> to quickly examine and explore the raw tables without locking the datasets (and hence running the risk of stopping a batch run). The full-table search was a neat touch, as well as the DDL export option. Finally, I liked the fact that there were separate buttons for SUBMIT and APPROVE - a bit like a database where you have to commit the change. It's a nice approach that gives an extra layer of validation for the changes uploaded.

## Rafal - many thanks!
