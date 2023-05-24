# Mongo Async Crud

## Table of contents

- [Overview](#overview)
  - [Built With](#built-with)
- [How to Use](#how-to-use)
- [Continued Development](#continued-development)

## Overview

This is a completed result from this [YouTube tutorial](https://www.youtube.com/watch?v=f2EqECiTBL8&list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw). 

### Built with

- bcrypt
- cookie-parser
- cors
- express
- jsonwebtoken
- mongoose

## How to Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/jdegand/mongo-async-crud -b angular --single-branch

# Install dependencies
$ npm install

# Add .env with Mongo_URI Connection String, Token Secrets, & PORT

# Run the app
$ npm start
```

## Branch Differences

- 'secure:true' and 'same-site: true' causes problems with local testing.     
- I changed from bcryptjs to bcrypt.
- Updated mongoose and dotenv dependencies
- I changed port to 4200.
