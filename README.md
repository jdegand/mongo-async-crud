# Mongo Async Crud

## Table of contents

- [Overview](#overview)
  - [Built With](#built-with)
- [How to Use](#how-to-use)
- [Continued Development](#continued-development)

## Overview

This is a completed result from this [YouTube tutorial](https://www.youtube.com/watch?v=f2EqECiTBL8&list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw). 

### Built with

- bcryptjs
- cookie-parser
- cors
- express
- jsonwebtoken
- mongoose

## How to Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/jdegand/mongo-async-crud

# Install dependencies
$ npm install

# Add .env with Mongo_URI Connection String, Token Secrets, & PORT

# Run the app
$ npm start
```

## Continued Development

- The all route doesn't work because it is after a verifyJWT route.  

- Changing roles relied on manually changing the users object inside the mongo atlas dashboard.   

- 'secure:true' prevents testing with thunderclient.   

- Logout should probably be a post route.

- Changing to a post route is not as simple as just changing the route type.  Have to do a significant rework.  

- I used bcryptjs instead of bcrypt.

- Is it better not to have any views at all?

- I used 4000 vs 3500 for PORT

- I didn't add an employees route

- Delete route should be a dynamic route and you should pull the id from the url not the body.  
