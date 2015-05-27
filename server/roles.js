/**
 * Created by kyawtun on 27/5/15.
 */


Roles.GLOBAL_GROUP = '';
Roles.addUsersToRoles = function(userId, roles, group) {
    if (group) {
        roles = _.map(roles, function(role) {
            return group + '.' + role;
        })
    }
    Roles.addUserToRoles(userId, roles);
};


Roles.getGroupsForUser = function(userId, role) {
    var arr = Roles._collection.find({ userId: userId, roles: role }, {_id: 1}).fetch();
    return arr ? _.pluck(arr, '_id') : [];
};

Roles.userIsInRole = function(userId, role, group) {
    var filter = {userId: userId};
    if (_.isArray(role)) {
        filter.roles = {$in: role};
    } else {
        filter.roles = role;
    }
    if (group) {
        filter._id = group;
    }
    return Roles._collection.find(filter, {_id: 1}).count() > 0;
};
