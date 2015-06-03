/**
 * Created by kyawtun on 27/5/15.
 */


Roles.registerAction('project.create');
Roles.registerAction('project.read');
Roles.registerAction('project.update');
Roles.registerAction('project.remove');
Roles.registerAction('project.member.add');
Roles.registerAction('project.member.remove');
Roles.registerAction('canvas.create');
Roles.registerAction('canvas.read');
Roles.registerAction('canvas.update');
Roles.registerAction('canvas.remove');
Roles.registerAction('canvas.member.add');
Roles.registerAction('canvas.member.remove');



/**
 * CanvasOwner Role
 * @type {Roles.Role}
 */
var canvasOwnerRole = new Roles.Role('CanvasOwner');


canvasOwnerRole.allow('canvas.remove', function(userId, doc, fields, modifier) {
  return Canvas.isOwner(doc, userId);
});

canvasOwnerRole.allow('canvas.member.add', function(userId, doc, fields, modifier) {
  return Canvas.isOwner(doc, userId);
});

canvasOwnerRole.allow('canvas.member.remove', function(userId, doc, fields, modifier) {
  return Canvas.isOwner(doc, userId);
});



/**
 * CanvasMember Role
 * @type {Roles.Role}
 */
var canvasMemberRole = new Roles.Role('CanvasMember');

canvasMemberRole.allow('canvas.create', function(userId, doc, fields, modifier) {
  return Canvas.isMember(doc, userId);
});

canvasMemberRole.allow('canvas.read', function(userId, doc, fields, modifier) {
  return Canvas.isMember(doc, userId);
});

canvasMemberRole.allow('canvas.update', function(userId, doc, fields, modifier) {
  return Canvas.isMember(doc, userId);
});

canvasMemberRole.allow('canvas.remove', function(userId, doc, fields, modifier) {
  return Canvas.isMember(doc, userId);
});




/**
 * SquareOwner Role
 * @type {Roles.Role}
 */
var squareOwnerRole = new Roles.Role('SquareOwner');


squareOwnerRole.allow('square.read', function(userId, doc, fields, modifier) {
  return Square.isOwner(doc, userId);
});

squareOwnerRole.allow('square.update', function(userId, doc, fields, modifier) {
  return Square.isOwner(doc, userId);
});

squareOwnerRole.allow('square.remove', function(userId, doc, fields, modifier) {
  return Square.isOwner(doc, userId);
});


/**
 * ProjectMember Role
 * @type {Roles.Role}
 */
var projectMemberRole = new Roles.Role('ProjectMember');

projectMemberRole.allow('project.create', function(userId, doc, fields, modifier) {
  return Project.isMember(doc, userId);
});

projectMemberRole.allow('project.read', function(userId, doc, fields, modifier) {
  return Project.isMember(doc, userId);
});

projectMemberRole.allow('project.update', function(userId, doc, fields, modifier) {
  return Project.isMember(doc, userId);
});

projectMemberRole.allow('project.remove', function(userId, doc, fields, modifier) {
  return Project.isMember(doc, userId);
});


/**
 * ProjectOwner Role
 * @type {Roles.Role}
 */
var projectOwnerRole = new Roles.Role('ProjectOwner');


projectOwnerRole.allow('project.remove', function(userId, doc, fields, modifier) {
  return Project.isOwner(doc, userId);
});

projectOwnerRole.allow('project.member.add', function(userId, doc, fields, modifier) {
  return Project.isOwner(doc, userId);
});


projectOwnerRole.allow('project.member.remove', function(userId, doc, fields, modifier) {
  return Project.isOwner(doc, userId);
});


/**
 * OrganizationMember Role
 * @type {Roles.Role}
 */
var organizationMemberRole = new Roles.Role('OrganizationMember');

organizationMemberRole.allow('project.create', function(userId, doc, fields, modifier) {
  var org = Organization.getFromProject(doc);
  return Organization.isMember(org, userId);
});


/**
 * OrganizationAdmin Role
 * @type {Roles.Role}
 */
var organizationAdminRole = new Roles.Role('OrganizationAdmin');
organizationAdminRole.allow('project.create', true);
organizationAdminRole.allow('project.read', true);
organizationAdminRole.allow('project.update', true);
organizationAdminRole.allow('project.remove', true);
