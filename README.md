# RedLight Software Summer Internship

This was my attempt at RedLight's 2023 Summer Internship Dev Challenge!

## Introduction

This challenge involved creating a web platform that would allow the user to:
*Create new applicants
*List existing applicants
*Show an existing applicant
*Update existing applicants
*Delete an existing applicant
*Search for applicants
*Create new roles
*List existing roles
*Show an existing role
*Update existing roles
*Delete an existing role
*Search for roles
\*Change the applicant status on a given role



## Development

The structure of my platform is as follows:
An **App.tsx** file that renders all the components in my code. The components are: **Add** **List** **Roletable** **Search**. Each component has its own .css file.

**Listing applicants:**
I started by making sure I could list and show the applicants. So, in my web platform, the list is right on the center of the screen with the applicants showing all their info.

**Adding applicants:**
Next I focused on the adding applicants bit, so I created a button on the bottom right part of the screen that opens up a form (that is a little ugly at the moment) that allows the user to enter all the details of an applicant. When entered it closes the form and adds to the center of the list.
Since the applicant array is stored in **App.tsx** I had to pass a function called **addAplicant** that updates these values to app and the to **List**.

**Search for applicants:**
I then added a search bar at the top that allows the user to enter a string and have the applicant corresponding to the string show up in the place where List is.
This involved quite a bit of gymnasting of needing to pass the _search string_ to **List** through **App** and then having it display the correct applicants.

**Note**: While testing with identical applicants I found that the applicants start multiplying for no reason?? And I couldn't fix that bug (although identical applicants probably should not exist to begin with, and I didn't make those verifications..).

**Updating and deleting users:**
For updating and deleting users I made each user clickable, and when clicked a form opens where the user can either modify the current applicant values or delete the applicant clicking the trash icon in the top right.
Again to do this, I sent the values from **List** to **App** to modify the current list of applicants.

**Roles:**
I added looking table to the side of my center list called **Role Table**.
It works very much like the applicants' list in the center, you can either add a role or delete a Role.
These roles control what type of applicants the user can add, so you can't make up a new role while adding a user.
You can also delete the roles, although the rendering of the delete buttons for each role was made on top of one another, resulting in an awkward deletion process. Although I tried, I could not fix this problem since it was my first time using the map function do display an array.

**Final words:**
This project was fun to make, even though there were some challenging aspects to it. In terms of overall aspect it looks a little rough around the edges.
If I were to continue to work on it I would:
*Set up the backend
*Focus on making the forms and the role table look a little better  
*Give more vibrance to the search bar
*Render the delete button correctly


