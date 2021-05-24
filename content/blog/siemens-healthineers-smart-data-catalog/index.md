---
title: Siemens Healthineers Smart Data Catalog and Data Controller
description: Data Controller was implemented at Siemens Healthineers to facilitate their SAS-Powered Smart Data Catalog and enable Data Lineage reporting.
date: '2020-08-24 21:27:10'
author: 'Allan Bowe'
authorLink: https://www.linkedin.com/in/allanbowe/
previewImg: './siemenshealthineers.png'
tags:
  - data catalog
  - data controller
  - data lineage
  - Data quality
  - data warehouse
  - Excel
  - sas
  - Use Cases
  - VBA
---

Data Controller was implemented at Siemens Healthineers to facilitate their SAS-Powered Smart Data Catalog and integrate with Data Lineage reporting. We are grateful to <a href="https://www.linkedin.com/in/helen-stark-5bb15b6a/">Helen Stark</a> (Power User) and <a href="https://www.linkedin.com/in/hans-juergen-kopperger-942634b7/">Hans-Juergen Kopperger</a> (SAS App Developer) for sharing their "before and after" experiences. The previous article in this series is available <a href="/der-touristik/">here</a>.

---

## Helen Stark[<img class="alignright wp-image-1171" src="/wp-content/uploads/2020/08/thumbnail_HStark.jpg" alt="" width="150" height="200" />](https://www.linkedin.com/in/helen-stark-5bb15b6a/)

### Hi Helen, it’s great to meet with you today. Can you tell us - what is your role within the business?

I am the portfolio manager. What I do is a lot of demand management. So when people have new requests, like they want new data into our data lake, or they want it structured, or they want it visualized then I manage all that. For the Americas region, for North and south America. And I also do road shows, like marketing kind of aspect for the data scientists. And I do a smidge of project management here and there.

### Interesting. And what do you actually use Data Controller for?

I use it to keep our Smart Data Catalog up to date. One of the things that I do is we have marketing posters, and so I put the links to those marketing posters in there so they are a part of our front end web design. And I also do the marketing videos, so adding those links. So really it’s just adding and deleting entries into Data Controller, so that our Smart Data Catalog is updated at all times.

### And that Smart Data Catalog is in SAS. Is there reason its in SAS, and not say - Excel? Is it used by other parts of the business?

Yes, it’s used by the entire business

### I see. And what is the Smart Data Catalog?

It's a listing of all of the offerings that data governance has. So, I say data governance but its data governance and analytical services. So, we are the data owners for all of the data in the company. It’s the single source of truth for all Siemens health business data. And we use Data Controller to manage that. And Data Controller does some incredible things that I do not understand – such as being able to stage and preview the data before it’s made publicly available. I mean I honestly don’t understand it but it does some miraculous things.

### Nice feedback! Next question. How does Data Controller make your life easier?

Because it's so easy to use. Before we used an excel spreadsheet and it was quite unwieldy and it was bulky and it was so easy to make mistakes, just trying to remember where you were. And with Data Controller I love that I can filter first and get to exactly where I want to be and then I can edit. So, it really lessens the chance of me making a mistake. I love that, I am an editor, I am not an approver, but I like so I make an edit, but then it goes to an approver, so it’s like the four eye principle, something we did not have before. You can track changes, that’s amazing. Yeah, it made everything easier so whereas before I would dread updating the Smart Data Catalog, now you go in and it’s done in like 3 to 5 minutes.

### Superb. Ok, before Data Controller came along, how did you get data into SAS?

So again, it was the foundation of this spreadsheet. You would have to check it out so there was some control over it. If somebody checked it out then nobody else could go in and make any changes, and you would have to wait for it to be checked back in and then run like a macro or some tool and then you could upload it and you could update your smart data search. It was a process that depended on how careful your co-workers were about remembering to check it back in. In short, it used to often take days to update the SAS environment, and now it takes minutes.

### Wow - that’s great to hear! Ok, Next up. What are your favourite Data Controller features and why?

The filter. It will always be my favourite; it will never change. That’s really helpful. I just like how it makes it so much harder to make a mistake. With Data Controller it’s much harder to make a mistake. It’s less prone to human error. And the copy and paste is so easy, and yeah, there is nothing about it that I don’t love.

### Brilliant, I think that’s the best feedback we’ve ever had.

Really, I mean it has made our lives so much easier, so much faster. Um yeah, I just love it.

### Thankyou so much!

---

## Hans-Juergen [<img class="alignright wp-image-1181" src="/wp-content/uploads/2020/08/0-1-1.jpeg" alt="Hans-Juergen" width="150" height="225" />](https://www.linkedin.com/in/hans-juergen-kopperger-942634b7/)

### Guten Morgen Hans-Juergen! Can you tell us a little about your role within the business?

Yes, I am working as a Data Integration Manager at Siemens Healthineers providing BI and Analytical Services for our colleagues. My department is the DGA - Data Governance and Analytical Services. At Siemens-Healthineers we are analyzing "Big Data" from our computer systems - AT Angiography and Therapy, Computer Tomography CT, MR Magnetresonanz Tomography, and LD Labordiagnostik.

In consequence of our Business Strategy "from Onsite to Online" our focus is to connect more and more systems to our BI backend. With new services like "Condition-based Maintenance" or "Predictive Analysis", we can now generate data-driven services to increase business values for our customers or even decrease our overall service costs.

Our BI platform is based on the SAS technology stack. To get our Business Analysts and Data Scientists nearer to our Data Lake I have created a Smart Data Catalog which is an interactive web application with a "google style" search facility. Now they can do their jobs more effectively without struggling to find and access accurate, complete, and trustworthy data. As a result, they spend less time searching for data and can actually focus on using data to generate analyses and impactful insights.

### Now that's valuable! And what do you use Data Controller for?

To increase Data Quality while uploading backend data into our BI platform. Data Controller provides “data version control”, and full traceability of changes. We have several control tables that provide data for web applications like the "Smart Data Catalog", and with Data Controller it's now an easy, controllable and manageable process to get these changes into the backend tables.

In the past we had a custom Stored Process web app for uploading excel files, based on an excel template. This process had negative consequences for Data Quality because it often happened that many different versions of the excel templates were created and in the end we didn't know which was the latest version and which values we wanted to upload into the system. It could take a lot of time to clarify who had done which upload.

I would often receive support tickets in relation to this upload, the cause of which was often due to the diversity of our excel templates, and being unsure which was the right template...So, we would have a lot of discussions about how to bring data into the backend in a controlled manner.

Then one day, I got information through <a href="https://sasusergroup.de/">SAS User Group Germany</a> that you provide a solution with Data Controller. I was initially interested in the <a href="https://docs.datacontroller.io/videos/#data-lineage">Data Lineage</a> functionality, but then I understood the main concept behind Data Controller. And for me the main benefit is that I can save a lot of time - with out of the box features like the web data editor, and the web upload facility with excel spreadsheet drag and drop. And there is the automatic workflow behind with the mandatory approval step. Since we implemented Data Controller, we no longer get those support tickets.

### Fantastic. If you had to pick your top features, what would they be?

The main benefit is getting data controlled, and into the backend. The controlled process, and the approval process, those are the main benefits. But we've got other benefits. For instance, we have Data Lineage now. The Data Lineage diagrams could also be linked directly from our Smart Data Catalog using URL parameters. This easy integration means our users can open the relevant page in Data Controller with one click.

The transparency of the history page is another benefit. I can look at every requested submit or approval - what changes have been applied, what changes have been submitted, and what changes have been approved. This helps us a lot to get data transparency.

The <a href="https://docs.datacontroller.io/emails/">email alerts</a> is a great feature. For the communication of changes, we had previously created a team's collaboration chat. e.g. if someone did a change and needed to request an approval. But with email alerts, the notification of changes is now automatically sent to the responsible data owner, who can immediately click the email link and do his approval. This speeds up the whole process.

Another advantage is the "database approach" for updates. So, someone is changing one row in a table which is connected to his use case, another guy can change other rows of the same table, nearly simultaneously. Because not everyone is changing the same rows. Everyone has their own subset of rows, their own "workspace" within one table. In the past we would have one excel template, and this would always override all values. We would have a lot of excel templates going around our colleagues, so there were always conflicts of overrides and versioning, and stuff like that. With Data Controller, it's now a simple, easy and transparent data capture process.

### Vielen Dank!

---

<div class="imgHolder">
  <a href="/blog">
    <img class="wp-image-1190 size-large aligncenter" src="/wp-content/uploads/2020/08/Get-Started-Smart-Data-Catalog.png" alt="Smart Data Catalog" />
    <div>Smart Data Catalog</div>
  </a>
</div>
