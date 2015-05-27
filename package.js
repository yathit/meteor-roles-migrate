Package.describe({
    name: 'kyawtun:meteor-roles-migrate',
    version: '0.0.1',
    summary: 'In place upgrade kit for moving from alanning:roles meteor package to nicolaslopezj:roles.',
    git: 'https://github.com/yathit/meteor-roles-migrate',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.2');
    api.use(['nicolaslopezj:roles@1.0.5']);
    api.addFiles('roles.js', ['client', 'server']);
    api.addFiles('server/roles.js', 'server');
    api.addFiles('client/roles.js', 'client');
});

Package.onTest(function (api) {
    api.use(['nicolaslopezj:roles']);
    api.addFiles('roles.js', ['client', 'server']);
    api.addFiles('server/roles.js', 'server');
    api.addFiles('client/roles.js', 'client');
    api.addFiles('tests/server-roles-test.js', 'server');

});
