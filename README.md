# Sprint Challenge: Authentication - Dad Jokes

## Description

In this challenge, you build a real wise-guy application. _Dad jokes_ are all the rage these days. Currently the application is trying to receive some `Dad Jokes`, however we are locked out.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment, please work on it alone. It is an opportunity to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

If the instructions are not clear, please seek support from your TL and Instructor on Slack.

The Minimum Viable Product must be completed in three hours.

Follow these steps to set up and work on your project:

- [X] Create a forked copy of this project.
- [X] Add your _Team Lead_ as collaborator on Github.
- [X] Clone your forked version of the Repository.
- [X] Create a new Branch on the clone: git checkout -b `firstName-lastName`.
- [X] Implement the project on this Branch, committing changes regularly.
- [X] Push commits: git push origin `firstName-lastName`.

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge `firstName-lastName` branch into `master` on your fork. **Please don't make Pull Requests against Lambda's repository**.
- [ ] Please don't merge your own pull request.
- [ ] Add your _Team Lead_ as a Reviewer on the Pull-request
- [ ] Your _Team Lead_ will count the challenge as done by merging the branch into _master_.

## Commits

Commit your code regularly and use descriptive messages. This helps both you (in case you ever need to return to old code) and your Team Lead.

## Self-Study/Essay Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [X] What is the purpose of using _sessions_?

    Sessions allow us to persist information. So for example if we only want logged in users to see certain routes, we can use sessions so that they only have to login once, and can then maintain access through the duration of that session. Sessions (as opposed to tokens) also make it easy for us to lockout or log out a user because the session can be ended on command.

- [X] What does bcrypt do to help us store passwords in a secure manner.

    bcrypt allows us to hash & salt our passwords so that they are not stored in the database in plain text. 

- [X] What does bcrypt do to slow down attackers?

    It allows developers to insert a time-value to make the hash more difficult to decode via something like a brute-force or rainbow table attack

- [X] What are the three parts of the JSON Web Token?

    Header, payload, & signature. The headers contains the type of token and algorithm used for signing the token. The payload contains meta-data about the token such as expiration date and token issuer. Signature is used to verify the message wasn't changed.

## Minimum Viable Product

Implement an User Authentication System. Hash user's passwords before saving them to the database. Use `JSON Web Tokens` or `Sessions and Cookies` to persist authentication across requests.

- [X] Implement the `register` and `login` functionality inside `/auth/auth-router.js`. A `user` has `username` and `password`. Both properties are required.
- [X] Implement the `authenticate` middleware inside `/auth/authenticate-middleware.js`.
- [ ] Write a **minimum o 2 tests** per API endpoint. Write more tests if you have time.

**Note**: the database already has the users table, but if you run into issues, the migrations are available.

## Stretch Problem

Build a front end to show the jokes.

- [ ] Add a React client that connects to the API and has pages for `Sign Up`, `Sign In` and showing a list of `Jokes`.
- [ ] Once you have the functionality down, style it!
