---
title: Allianz Insurance and Data Controller for SAS®
description: Data Controller for SAS is used to provide the actuarial team at Allianz with an easy to use bitemporal reporting capability
date: '2021-03-26 11:20:56'
author: 'Allan Bowe'
authorLink: https://www.linkedin.com/in/allanbowe/
previewImg: './Allianz_logo.svg_.png'
tags:
  - Use Cases
---

Data Controller for SAS was deployed at Allianz to support a bitemporal reporting capability for the actuarial team. [Bitemporal](https://datacontroller.io/bitemporal-historisation-and-the-sas-dds/) tables allow data to be stored across two time dimensions - a business (reporting) history and a technical (version) history. This enables results for any previous reporting period to be reproduced 'as at' any point in time, providing full auditability and traceability. By using Data Controller, the actuarial team at Allianz were able to upload data from multiple sources, and have it automatically merged into their SAS reporting database. We caught up with Joris Jansen, Actuary for P&amp;C Reserving.

---

<img class="alignright" src="/wp-content/uploads/2021/03/view.jpeg" alt="Data Controller for SAS at Allianz Insurance" width="300" height="169" />

### Joris, hallo! Could you please explain to us, your role within Allianz?

My role, Allan, is a "reporting role" in the business of the Allianz Benelux insurance company. This means that every month I need to report all the figures to my management in an accurate, complete and timely way - and this is important for Allianz Management in order to steer the company in the right way. I'm responsible for ensuring the reporting processes are performed properly, and of course, that the output is correct. The Data Controller is helping me to do this.

### Great! And how does it help? What do you use Data Controller for?

The Data Controller I use for the upload of the source data for my calculations. You can imagine I have source data from let's say, different systems or queries or whatever, and I upload this with the Data Controller. I then have the data available and can perform my calculations on the data in SAS, and output the figures for reporting.

### And why is it that you use Data Controller and not any other tools for uploading that data?

Well I think that you, Allan, have given Allianz a really easy tool to use, to do this part in a uniform, simple and proper way. Also the sources are from different systems so the unification of those different data sources isn't that easy - and Data Controller is a really simple tool to make that happen. I have my inputs from different systems available and in a relatively easy way I can upload them.

Automation may be much better but it's not that easy and practical to do.

### I see. And what format do these files arrive in?

The inputs are all Excel or CSV files and it's easy to input them.

### What happens to this data after it is uploaded?

There is a [hook script](https://docs.datacontroller.io/dcc-tables/#pre_edit_hook) that runs after the upload that makes sure that all the data is captured in one big database, which is a convenient way to handle the data so it's all together in one place. Before Data Controller, this wasn't the case. The advantage of having this data all merged automatically with each upload means that our subsequent processes that calculate the amounts as an output from the source is more uniform. Where we previously had many programs and input locations that would make calculations on top of one another, there are now just 1 to 3 programs.

### Is anyone else making use of Data Controller?

Currently there are three heavy users, and also other departments make use of it, eg the audit department, concerned with models and calculations, will make checks to ensure it works properly on a regular basis.

### What would you say are your favourite features in Data Controller, and why?

The most important feature is the uniform way in which data is uploaded and merged automatically in one database. Which means we always have our data, in an accurate and complete way, available. It is not that easy to adjust the database, and before Data Controller was in place it was possible to accidentally modify data because it was just sitting on the directory, the network drive. It is now not so easy to do that, the data is uploaded in a uniform way and always protected. We have a better, more proper way of reporting.

The second is that if auditors have extra questions, or would like to investigate other scenarios for calculating the outputs, then we can re-perform very easily the calculation because the data is already available [* with bi-temporal history in a database]. We don't need to do something extra, we can recalculate whenever we want. It's not something we use regularly but it is there, if there are questions from audit or if we would like to change something on the longer term etc, for change management purposes. This is a very nice feature.

### Glad to hear it! Is there anything you'd like to see in DC?

I'm currently very satisfied, it works, it's very fast, it's really quick to use. Which makes it very efficient.

### Erg bedankt!

---

The previous article in this series is available [here](/siemens-healthineers-smart-data-catalog/).
