# Concept

- [ ] Readme
- [ ] Blog Post
- [ ] Video Demo
- [x] Project summary
- [x] Problem statement
- [x] User stories / features
- [ ] Model your domain

## Project Summary

Flip Code is a flashcard app. Users jot down snippets of code on one side and then the corresponding psuedo-code on the other side as a way of fostering understanding through memorization. 


## Problem Statement

There's no easy way to memorize code that has line-by-line description.
This product aims to mimic the purpose of git comments.
For example a user sees `git commit -m 'a super-detailed description'` next to each commit in github and knows exactly what that commit does next to the line of recently added code.  
Flip Code is a good place to keep notes for tricky edge-cases that are hard to remember.

# Main Goal

- [ ] Card Page shows one card at a time
- [ ] Card has Two sides
- [ ] Side 1 has two buttons: Reveal (to Reveal Answer on BACK), Previous/Next
- [ ] Side 1 has Language,
- [ ] Side 1 'What does this code do?'
- [ ] Side 2 has Title that gives general description of Code.
- [ ] Side 2 has Description (body copy) that describes Code on side 1 in detail  
- [ ] Side 2 has buttons for Return (to flip card to FRONT), Next (to go to next card)
- [ ] 10 Line Limit
- [ ] Error Messaging
- [x] No Users for now

# Nice To Haves
- [ ] Flip Animation
- [ ] List page with Add, and Delete
- [ ] View Cards by Programming Language
- [ ] Numbers Next to Each Line of Code [https://stackoverflow.com/questions/41306797/html-how-to-add-line-numbers-to-a-source-code-block]



## User Stories

- TBD


## Domain Modeling

- Need Help / TBD


## Project Requirements

- [ ] 
The application must be an HTML, CSS, and JavaScript frontend with a Rails API backend. All interactions between the client and the server must be handled asynchronously (AJAX) and use JSON as the communication format.

- [ ] 
The JavaScript application must use Object Oriented JavaScript (classes) to encapsulate related data and behavior.

- [ ] 
The domain model served by the Rails backend must include a resource with at least one has-many relationship. For example, if you were building an Instagram clone, you might display a list of photos with associated comments.

- [ ] 
The backend and frontend must collaborate to demonstrate Client-Server Communication. Your application should have at least 3 AJAX calls, covering at least 2 of Create, Read, Update, and Delete (CRUD). Your client-side JavaScript code must use fetch with the appropriate HTTP verb, and your Rails API should use RESTful conventions.