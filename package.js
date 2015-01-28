Package.describe({
  name: 'liberation:reactive-var-getonce',
  summary: 'Adds a method "getOnce" to ReactiveVar',
  version: '1.0.0',
  git: 'https://github.com/dolgarev/reactive-var-getonce.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('reactive-var');
  api.addFiles('getonce.js', 'client');
});
