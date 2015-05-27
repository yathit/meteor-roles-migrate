# Polyfill to nicolaslopezj:roles  for alanning:roles 


In place upgrade kit for moving from alanning:roles meteor package to nicolaslopezj:roles. 

Include unit tests and migration scripts.

## Schema migration

alanning:roles store roles in users collection with `roles` field object of group id for roles. An example user record

    {
      "_id": "qx4RqmpJsZxfxA8bj",
      "roles": {
        "wCvSS2exrrGyZndYb": [
          "read",
          "write",
          "manage"
        ]
      }
    }
    
On nicolaslopezj:roles, each of these roles becomes action, for example:
    
    {
        userId: qx4RqmpJsZxfxA8bj, 
        roles: [
          canvas.read, 
          canvas.write, 
          canvas.manage
        ]
    }
    

alanning:roles keeps list of roles in `roles` collection, while nicolaslopezj:roles just keep roles, actions in memory. There `wCvSS2exrrGyZndYb` is name of the `Role` and `wCvSS2exrrGyZndYb.read`, etc are actions.
 

 
 

