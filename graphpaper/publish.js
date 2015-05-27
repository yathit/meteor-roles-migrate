Meteor.publish("projects", {
  find: function () {
    return Organization.getForUser(this.userId);
  },
  children: [{
    find: function (organization) {
      return projects.find({
        $or: [
          {organizationId: organization._id},
          {collaborators: this.userId}
        ]
      });
    }
  }]
});


Meteor.publish("canvases", function() {
  var org = Organization.getForUser(this.userId);
  var projects = Canvases.find({
    $or: [{
      'owner': this.userId
    }, {
      'collaborators': this.userId
    }, {
      'organization': org._id
    }]
  });

  return _.map(projects, function(doc) {
    return Roles.userHasPermission(this.userId, 'canvas.read', doc, [], []);
  }, this);
});


Meteor.publishComposite("squares", {
  find: function() {
    return Organization.getForUser(this.userId);
  },
  children: [{
    find: function(organization) {
      var arr = projects.find({$or: [{organizationId: organization._id}, {collaborators: this.userId}]});
      return _.map(arr, function(doc) {
        return Roles.userHasPermission(this.userId, 'project.read', doc, [], []);
      }, this);
    },
    children: [{
      find: function(project) {
        var arr = canvases.find({$or: [{projectId: project._id}, {collaborators: this.userId}]});
        return _.map(arr, function(doc) {
          return Roles.userHasPermission(this.userId, 'canvas.read', doc, [], []);
        }, this);
      },
      children: [{
        find: function(canvas) {
          return squares.find({canvasId: canvas._id});
        }
      }]
    }]
  }, {
    find: function() {
      return squares.find({ownerId: this.userId});
    }
  }]
});


