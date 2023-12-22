This week is divided into three parts for assignments - 
## Middlewares
 - You have to create a few standard middlewares for your application.
 - You have to create a middleware for logging the number of requests on a server
 - You have to create a middleware for rate limiting a users request based on their username passed in the header
 - You have to create a middleware for logging the number of errors on a server
 - To test, go to the 01-middlewares folder and run `npx jest ./tests`
  ## Solution update:
![image](https://github.com/ankurRangi/100xDevs-cohort2-0-1/assets/32847436/34501f92-419a-4296-b40b-8c7183efc006)
 
## JWTs
 - Write a function that takes in a username and password and returns a JWT token with the username encoded. Should return null if the username is not a valid email or if the password is less than 6 characters. Try using the zod library here
 - Write a function that takes a jwt as input and returns true if the jwt can be DECODED (not verified). Return false otherwise
 - Write a function that takes a jwt as input and returns true if the jwt can be VERIFIED. Return false otherewise
 - To test, go to the 02-jwt folder and run `npx jest ./tests`

   ## Solution Update:
   ![image](https://github.com/ankurRangi/100xDevs-cohort2-0-1/assets/32847436/7965bef8-207a-46cc-bc2c-778df804dc38)


## Databases
