/**
 * Created by kyawtun on 27/5/15.
 */


Roles.registerAction('project.create');
Roles.registerAction('project.read');
Roles.registerAction('project.update');
Roles.registerAction('project.remove');
Roles.registerAction('project.member.add');
Roles.registerAction('project.member.remove');

var organizationAdminRole = new Roles.Role('OrganizationAdmin');
organizationAdminRole.allow('project.create', true);
organizationAdminRole.allow('project.read', true);
organizationAdminRole.allow('project.update', true);
organizationAdminRole.allow('project.remove', true);


var organizationMemberRole = new Roles.Role('OrganizationMember');

organizationMemberRole.allow('project.create', function(userId, doc, fields, modifier) {
  var org = userId == organizations.findOne({members: userId});
  return !!org && !org.deleted && !!org.active;
});


var projectOwnerRole = new Roles.Role('ProjectOwner');

var isOrganizationOwner = function(userId, project) {
  var org = organizations.findOne({_id: doc.organizationId});
  return org && _.contains(org.members, userId);
};

projectOwnerRole.allow('project.remove', function(userId, doc, fields, modifier) {
  return isOrganizationOwner(userId, doc);
});

projectOwnerRole.allow('project.member.add', function(userId, doc, fields, modifier) {
  var org = organizations.findOne({_id: doc.organizationId});
  return org && _.contains(org.members, userId);
});

projectOwnerRole.allow('project.update', function(userId, doc, fields, modifier) {
  var org = userId == Organization.findOne({members: userId});
  return !!org && !org.deleted && !!org.active;
});

projectOwnerRole.allow('project.remove', function(userId, doc, fields, modifier) {
  var org = userId == Organization.findOne({members: userId});
  return !!org && !org.deleted && !!org.active;
});


var projectMemberRole = new Roles.Role('ProjectMember');

projectMemberRole.allow('project.create', function(userId, doc, fields, modifier) {
  var org = userId ==Organization.findOne({members: userId});
  return !!org && !org.deleted && !!org.active;
});

projectMemberRole.allow('project.read', function(userId, doc, fields, modifier) {
  var org = userId == Organization.findOne({members: userId});
  return !!org && !org.deleted && !!org.active;
});


projectMemberRole.allow('project.update', function(userId, doc, fields, modifier) {
  var org = userId == superAdmin || Organization.findOne({members: userId});
  return !!org && !org.deleted && !!org.active;
});

projectMemberRole.allow('project.remove', function(userId, doc, fields, modifier) {
  var org = userId == superAdmin || Organization.findOne({members: userId});
  return !!org && !org.deleted && !!org.active;
});
