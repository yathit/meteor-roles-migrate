/**
 * Created by kyawtun on 27/5/15.
 */

Roles.GLOBAL_GROUP = '__global_roles__';
Roles.addUsersToRoles = function(userId, roles, group) {
    group = group || Roles.GLOBAL_GROUP;
    roles = _.map(roles, function(role) {
        return group + '.' + role;
    });
    Roles.addUserToRoles(userId, roles);
};


Roles.getGroupsForUser = function(userId, role) {
    var arr = Roles._collection.find({userId: userId}).fetch();
    if (!arr) {
        return [];
    }
    return _.map(arr, function(role) {
        var groups = [];
        for (var i = 0; i < role.roles.length; i++) {
            var action = role.roles[i];
            var dot = action.indexOf('.');
            if (dot >= 0) {
                groups.push(action.substr(dot + 1));
            }
        }
        return groups;
    })
};

Roles.userIsInRole = function(userId, roles, group) {
    group = group || Roles.GLOBAL_GROUP;
    if (!_.isArray(roles)) {
        roles = [roles];
    }
    roles = _.map(function(role) {
        return group + '.' + role;
    });

    return Roles._collection.find({roles: {$in: roles}}, {_id: 1}).count() > 0;
};