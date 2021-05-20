---
title: Five Zero-Code ways to Import Excel into SAS
description: Five zero-code ways to import Excel into SAS - be that on Viya, SAS 9 with Metadata, or good old Base SAS on your desktop.
date: '2021-04-18 10:59:18'
author: 'Allan Bowe'
authorLink: https://www.linkedin.com/in/allanbowe/
previewImg: './dcgrid.png'
tags:
  - Data Management
  - EUC
  - Excel
---

<p>Your data is in Excel and you need to import it into SAS.  You googled, and discovered 500 different methods.  Which to choose?  We compare and contrast 5 approaches to this perennial problem.  Before we get onto that though - <strong>why</strong> is it such a problem?
The crux of the issue is:</p> <h2>Flexibility vs Scalability</h2> <p>Excel, as you probably know, is incredibly flexible.  Data can spread in all directions, move around, be positioned anywhere, on any cell, of any worksheet in a workbook.  That workbook can have different names, exist in different locations, be of different types (xls, xlsx, xlsm).  That's before we get down to whether the data arrives as values, formatted values, formulas, or <a href="https://www.linkedin.com/posts/allanbowe_data-engineers-in-your-experience-what-activity-6771408875544461312-Weqt">other dragons</a> .  And the fact that, as it is typically stored on a shared filesystem, it can be changed by anyone, at any time.
SAS is far less flexible in this regard.  Data is nearly always structured in a table, with fixed columns, of fixed data types, in a fixed library / location, with a fixed name (or naming convention).  That table usually lives on a server, perhaps in a database.  This rigidity is actually a Very. Good. Thing.  It provides consistency, which is the basis for scalability.  And the basis of the consistency is how the data is modelled.</p>

## The Data Model

Every table in SAS contains some kind of metadata about how the data is structured - the column names, types (character vs numeric), formats (dates, currency), lengths, encoding (UTF8 vs WLATIN1) and more. The first question you need to ask yourself, when loading Excel data into SAS, is - do I take the model from Excel? Or am I targeting an existing model in SAS?

Speaking of SAS. The word "SAS" can mean so many things - do we mean the language? The platform? The company? A specific product? Let's break this down, as the choice of tool will depend on the type of "SAS" you have.

## Which Flavour of SAS do I have?

The world of SAS can be broken into 3 major platforms:

- Base SAS. Traditional SAS, typically installed on your desktop.
- SAS Meta. An enterprise deployment with mid-tier and metadata server.
- SAS Viya. Cloud native, API driven microservices architecture.

The options available to you for importing Excel will vary depending on the flavour you are using. How do you know which one you have? Try running the following code in SAS:

```sas
filename mc url "<a href='"'httpsayoutub://raw.githubusercontent.com/sasjs/core/main/all.sas'>https://raw.githubusercontent.com/sasjs/core/main/all.sas</a>";
%inc mc;
%put %mf_getplatform();
```

The entry in the log will tell you if your environment is BASESAS, SASMETA or SASVIYA.

## Importing Excel into SAS

Without further ado, let's explore the options available!

### 1 - Import Excel with Data Controller for SAS

It's <em>super easy</em> to import an arbitrary Excel file to an <strong>existing</strong> table using Data Controller for SAS. You simply choose the table you'd like to modify, then drag your Excel file into the browser.

Data Controller will scan every worksheet in your Excel file to find a range that matches the target table. How does it do that? The top of the range is identified by simply checking for a <em>row</em> that contains<em> all columns</em> as per the target table definition, whereas the bottom of the range is simply the first blank primary key value.

Once the range is found, Data Controller will perform a series of automatic checks and validations, and import the data and a copy of the workbook. If all the checks pass, it's one button click to load the data (and corresponding workbook) to the SAS server and notify the approver that a change request has been submitted.

`vimeo: https://vimeo.com/417808409`

Once the approver approves the change, the table is updated. There is a full audit history and you can even retrieve the original excel file that was submitted. The tool does NOT let you load <em>new</em> tables to SAS, nor does it let you modify the columns. The <em>model</em> is therefore protected by IT, whilst the <em>values</em> are managed by the business

Data Controller is available for SAS Meta and SAS Viya. A Base SAS version is in development. Like what you see? Don't hesitate to <a href="https://datacontroller.io">book a demo session</a> and meet the team!</p>

### 2 - Import Excel using SAS Studio

<img class="alignright wp-image-1262" src="https://datacontroller.io/wp-content/uploads/2021/04/2IrsV7v-239x300.png" alt="Upload File to SAS Studio" width="352" height="442" />

This approach can be used whether you are using SAS Meta, SAS Viya, or even Base SAS (eg with University Edition). Just open [YOURSERVER]/SASStudio in a browser (on Viya, it will be /SASStudio<strong>V</strong>).

The first step will be to get the Excel file to a location where it can be accessed by SAS.

On Viya, that will require opening the Explorer menu, expanding the server dropdown, and right clicking on the directory within. You can then choose the "Upload files" option to import your spreadsheet. Your upload is limited to 100mb (default system setting), and the target directory is typically the unix home directory for your user.

The "home directory" part is a key point - as it means that other users will not necessarily be able to access that source file. To easily load to other areas on the SAS filesystem you may need to ask your admin to create a symlink, or use an alternative upload mechanism (such as <a href="https://sasjs.io/apps/#viya-file-uploader">this one)</a>.

<img class="alignleft wp-image-1263" src="https://datacontroller.io/wp-content/uploads/2021/04/2021-04-10_15-53.png" alt="Import Excel to SAS Studio" width="218" height="203" />

Once your file is available on the server, you can begin the import process. Simply click on the Start Page, "New Import" and follow the steps in the wizard.

The generated SAS code will be shown in the window below, and the output can be directed to either to WORK or a permanent library as desired.

You may need to rename the default target dataset (eg from IMPORT to IMPORT2) in order to run the code.

### 3 - How to Import Excel using the SAS Add-In for Microsoft Office

Unlike the other examples presented, this one allows you to load data from directly within your Excel workbook! You must have the requisite permission to make data write-back to the target table selected. You can also modify column properties and specify an 'inactivity timeout' before 'edit mode' is closed.
To use, simply open your desired table and click the "Begin Edit" button in the SAS Ribbon.

`youtube: https://www.youtube.com/watch?v=XrK3hmYO4ag`

The SAS Add-In for Microsoft Office is available only for SAS Meta deployments.

### 4 - Import Excel using the SAS Enterprise Guide Wizard

<img class="alignright wp-image-1258" src="https://datacontroller.io/wp-content/uploads/2021/04/import_excel_into_EG_03.jpg" alt="SAS Enterprise Guide" width="500" height="284" />

To import a spreadsheet using Enterprise Guide you can simply click "File" then "Import Data" and select your Excel file to proceed through the wizard. An excellent guide to this process is available <a href="https://bi-notes.com/sas-enterprise-guide-import-excel/">here</a>. This process will load an Excel table into your SAS project, where you can run further analyses.
This approach will work for both SAS Meta and Base SAS deployments, the key difference being that for SAS Meta your tables will be on the SAS Server as opposed to the local desktop.

### 5 - Import Excel using the SAS Data Integration Studio

This option is more for SAS 9 ETL developers building enterprise data flows from stable data sources. Many ETL teams are forced to build flows Excel, despite it's (deserved) reputation as an "unstable data source".
One way to perform this task is to set up a library using the EXCEL engine, then register the tables within it. This involves a number of steps, the screenshots for which are below!
<img class="aligncenter wp-image-1268" src="https://datacontroller.io/wp-content/uploads/2021/04/Excel-in-DI-Studio-715x1030.png" alt="Import Excel to SAS DI Studio" width="683" height="984" />

## Comparison of Methods

With so many methods, how do you choose the one that is right for you? This depends on the volume, velocity, variety, and <em>purpose</em> of the data you are loading. If your Excel is large, has a static structure, and arrives directly from a source system on a regular basis in a fixed location, then you would probably want to build an automated flow using Data Integration Studio. For ad-hoc data, prepared by technical analysts for departmental reporting then either Enterprise Guide, SAS Studio or the SAS Addin are potential choices.

For <em>business</em>-<em>sourced</em> data (such as model parameter sets, reference data, actuarial assumptions) that need to be updated in an <em>IT-secured</em> environment then Data Controller is an<strong> ideal choice.</strong> Particularly given that it eliminates the need for a shared directory and reduces the risk of downstream batch incidents due to 'validate on load' features.

Data Controller works well as a zero-code option for Excel imports, in the following scenarios:

- The extraction process must be dynamic, as data can sometimes have additional columns or differently named worksheets
- You need to upload data rapidly and don't have time for a fully automated ETL solution to be built &amp; deployed
- You must retain the original Excel, along with change metadata, for audit purposes
- Your SAS Admin does not have capacity for ad-hoc data modification requests
- You would like to separate the role of Data Submitter and Data Approver
- Your data model needs protecting from accidental corruption
- You need automatic Data Quality rules applied at source

Below is a further comparison of the different options:

 <img class="aligncenter wp-image-1394 size-full" src="https://datacontroller.io/wp-content/uploads/2021/04/dcgrid-1.png" alt="Data Controller compared" width="558" height="436" />

If you'd like to discuss potential use cases for Data Controller, or to get a deep dive into any of it's features, you can begin the process right now by requesting a <a href="https://datacontroller.io/contact">demo session</a>!
