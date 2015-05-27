/**
 * Created by kyawtun on 27/5/15.
 */


Projects.allow({

  insert: function(userId, doc, fields, modifier) {
    // the user must be logged in, and the document must be owned by the user
    return Roles.userHasPermission(userId, 'project.create', userId, doc, fields, modifier);
  },

  update: function(userId, doc, fields, modifier) {
    return Roles.userHasPermission(userId, 'project.update', userId, doc, fields, modifier);
  },

  remove: function(userId, doc) {
    return Roles.userHasPermission(userId, 'project.remove', userId, doc, fields, modifier);
  }

});


Canvases.allow({

  insert: function(userId, doc, fields, modifier) {
    // the user must be logged in, and the document must be owned by the user
    return Roles.userHasPermission(userId, 'canvas.create', userId, doc, fields, modifier);
  },

  update: function(userId, doc, fields, modifier) {
    return Roles.userHasPermission(userId, 'canvas.update', userId, doc, fields, modifier);
  },

  remove: function(userId, doc) {
    return Roles.userHasPermission(userId, 'canvas.remove', userId, doc, fields, modifier);
  }

});


Squares.allow({

  insert: function(userId, doc, fields, modifier) {
    // the user must be logged in, and the document must be owned by the user
    return Roles.userHasPermission(userId, 'square.create', userId, doc, fields, modifier);
  },

  update: function(userId, doc, fields, modifier) {
    return Roles.userHasPermission(userId, 'square.update', userId, doc, fields, modifier);
  },

  remove: function(userId, doc) {
    return Roles.userHasPermission(userId, 'square.remove', userId, doc, fields, modifier);
  }

});
