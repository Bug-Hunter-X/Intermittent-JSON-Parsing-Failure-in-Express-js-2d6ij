# Intermittent JSON Parsing Failure in Express.js

This repository demonstrates a bug where an Express.js application intermittently fails to parse JSON request bodies. The `req.body` object is sometimes undefined, leading to unexpected behavior.

## Problem Description

The Express.js application uses `express.json()` middleware to parse incoming JSON requests. However, under certain conditions (possibly related to high server load or request timing), the middleware fails to parse the JSON, resulting in `req.body` being undefined.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `node bug.js` to start the server.
4. Send POST requests to `/data` with a JSON payload using tools like curl or Postman.  You might need to send multiple requests before encountering the error.

## Solution

The solution involves explicitly setting the `limit` option in `express.json()` to handle potentially larger request bodies and configuring a robust error handling mechanism to detect and handle parsing failures.

## Note

The intermittent nature of this bug can make it difficult to reproduce consistently.  The solution increases robustness but might not eliminate all potential occurrences under extremely heavy load. 