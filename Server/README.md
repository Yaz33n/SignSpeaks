# Description

<h1>Software development group project</h1>
<p>Team : Return 0;</p>

<p>This is a Restful API that handles requests for the sign-speaks Application</p>

# USING THE API

```
#1 POST https://vast-earth-36921.herokuapp.com/users

    Registering a user - Needs to be an JSON object
    -----------------------------------------------
    name: (String, required, minCharLength is 3)
    email: (String, required),  
    password: (String, required, maxCharLength is 15),
    phoneNumber: (String, required, maxCharLength & minCharLength is 10),
    operations: (Object, Not required)

#2 GET https://vast-earth-36921.herokuapp.com/users

    Getting all users - Returns an Array of objects
    -----------------------------------------------
    No need any request headers.
```
