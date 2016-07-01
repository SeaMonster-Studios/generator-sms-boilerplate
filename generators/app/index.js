'use strict';

var _ = require('underscore.string');
var generators = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = generators.Base.extend({

    prompting: function () {
        var done = this.async();
        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the ' + chalk.red('\nSMS Boilerplate') + '\n generator!'
        ));
        this.log(chalk.green(
            'You\'ll also have the option to use Normalise-css and Modernizr.js \n'
        ));

        this.prompt([{
            type: 'input',
            name: 'appName',
            message: 'Your project name',
            default: 'sms-project',
            store: true
        }, {
            type: 'input',
            name: 'appDescription',
            message: 'Short description of the project...',
            default: 'A new SMS project',
            store: true
        }, {
            type: 'input',
            name: 'gitUsername',
            message: 'What\'s your Github username?',
            store: true
        }, {
            type: 'input',
            name: 'authorName',
            message: 'What\'s your name (the author)?',
            default: '',
            store: true
        }, {
            type: 'confirm',
            name: 'includeNormalize',
            message: 'Would you like to include Normalize.css?',
            default: true
        }]).then(function(answers) {
            this.props = answers;
            this.log('app name', answers.appName);
            done();
        }.bind(this));

    },

    writing: {
        // Copy the configuration files
        config: function() {
            this.fs.copyTpl(
                this.templatePath('_package.json'),
                this.destinationPath('package.json'),
                {
                    appName: _.slugify(this.props.appName),
                    appDescription : this.props.appDescription,
                    authorName : this.props.authorName
                }
            );
            this.fs.copyTpl(
                this.templatePath('_bower.json'),
                this.destinationPath('bower.json'),
                {
                    appName: _.slugify(this.props.appName),
                    appDescription : this.props.appDescription,
                    authorName : this.props.authorName,
                    includeNormalize : this.props.includeNormalize
                }
            );
            this.fs.copy(
                this.templatePath('bowerrc'),
                this.destinationPath('.bowerrc')
            );
            this.fs.copy(
                this.templatePath('gitignore'),
                this.destinationPath('.gitignore')
            );
            this.fs.copy(
                this.templatePath('gitattributes'),
                this.destinationPath('.gitattributes')
            );
            this.fs.copy(
                this.templatePath('editorconfig'),
                this.destinationPath('.editorconfig')
            );
            this.fs.copy(
                this.templatePath('_Gruntfile.js'),
                this.destinationPath('Gruntfile.js')
            );
        },
        // Copy Application Files
        app: function() {
            this.fs.copy(
                this.templatePath('scss/_style.scss'),
                this.destinationPath('scss/style.scss')
            );
            this.fs.copy(
                this.templatePath('scss/_sms-mixins.scss'),
                this.destinationPath('scss/mixins/_sms-mixins.scss')
            );
            this.fs.copy(
                this.templatePath('scss/layout/global.scss'),
                this.destinationPath('scss/layout/global.scss')
            );
            this.fs.copy(
                this.templatePath('scss/layout/default-wordpress.scss'),
                this.destinationPath('scss/layout/default-wordpress.scss')
            );
            this.fs.copy(
                this.templatePath('scss/overrides/_sms-bundle-overrides.scss'),
                this.destinationPath('scss/overrides/_sms-bundle-overrides.scss')
            );
            this.fs.copy(
                this.templatePath('scss/overrides/_sms-scaffolding.scss'),
                this.destinationPath('scss/overrides/_sms-scaffolding.scss')
            );
            this.fs.copy(
                this.templatePath('scss/overrides/_sms-typography.scss'),
                this.destinationPath('scss/overrides/_sms-typography.scss')
            );
            this.fs.copy(
                this.templatePath('scss/overrides/_sms-variables.scss'),
                this.destinationPath('scss/overrides/_sms-variables.scss')
            );
            this.fs.copy(
                this.templatePath('scss/partials/_breadcrumbs.scss'),
                this.destinationPath('scss/partials/_breadcrumbs.scss')
            );
            this.fs.copy(
                this.templatePath('scss/partials/_footer.scss'),
                this.destinationPath('scss/partials/_footer.scss')
            );
            this.fs.copy(
                this.templatePath('scss/partials/_header.scss'),
                this.destinationPath('scss/partials/_header.scss')
            );
            this.fs.copy(
                this.templatePath('scss/partials/_navigation.scss'),
                this.destinationPath('scss/partials/_navigation.scss')
            );
            this.fs.copy(
                this.templatePath('scss/partials/_pagination.scss'),
                this.destinationPath('scss/partials/_pagination.scss')
            );
            this.fs.copy(
                this.templatePath('scss/partials/_sidebar.scss'),
                this.destinationPath('scss/partials/_sidebar.scss')
            );
            this.fs.copy(
                this.templatePath('scss/templates/404.scss'),
                this.destinationPath('scss/templates/404.scss')
            );
            this.fs.copy(
                this.templatePath('scss/templates/contact.scss'),
                this.destinationPath('scss/templates/contact.scss')
            );
            this.fs.copy(
                this.templatePath('scss/templates/generic-content.scss'),
                this.destinationPath('scss/templates/generic-content.scss')
            );
            this.fs.copy(
                this.templatePath('scss/templates/homepage.scss'),
                this.destinationPath('scss/templates/homepage.scss')
            );
            this.fs.copy(
                this.templatePath('scss/templates/index.scss'),
                this.destinationPath('scss/templates/index.scss')
            );
            this.fs.copy(
                this.templatePath('scss/templates/single.scss'),
                this.destinationPath('scss/templates/single.scss')
            );
            this.fs.copy(
                this.templatePath('css/_style.css'),
                this.destinationPath('public/css/style.css')
            );
            this.fs.copy(
                this.templatePath('css/_sms-columns.css'),
                this.destinationPath('public/css/sms-columns.css')
            );
            this.fs.copy(
                this.templatePath('js/_script.js'),
                this.destinationPath('js/script.js')
            );
            this.fs.copyTpl(
                this.templatePath('index.html'),
                this.destinationPath('public/index.html'),
                {
                    appName: this.props.appName,
                    appDescription : this.props.appDescription,
                    authorName : this.props.authorName
                }
            );
            // PHP files/templates
            this.fs.copyTpl(
                this.templatePath('php/index.php'),
                this.destinationPath('php/index.php')
            );
            this.fs.copyTpl(
                this.templatePath('php/404.php'),
                this.destinationPath('php/404.php')
            );
            this.fs.copyTpl(
                this.templatePath('php/page-contact.php'),
                this.destinationPath('php/page-contact.php')
            );
            this.fs.copyTpl(
                this.templatePath('php/page-home.php'),
                this.destinationPath('php/page-home.php')
            );
            this.fs.copyTpl(
                this.templatePath('php/single.php'),
                this.destinationPath('php/single.php')
            );
            this.fs.copyTpl(
                this.templatePath('php/template-generic-content.php'),
                this.destinationPath('php/template-generic-content.php')
            );
            this.fs.copyTpl(
                this.templatePath('php/inc/config.php'),
                this.destinationPath('php/inc/config.php')
            );
            this.fs.copyTpl(
                this.templatePath('php/inc/header.php'),
                this.destinationPath('php/inc/header.php'),
                {
                    appName: this.props.appName,
                    appDescription : this.props.appDescription,
                    authorName : this.props.authorName
                }
            );
            this.fs.copyTpl(
                this.templatePath('php/inc/footer.php'),
                this.destinationPath('php/inc/footer.php')
            );
            this.fs.copyTpl(
                this.templatePath('php/inc/breadcrumbs.php'),
                this.destinationPath('php/inc/breadcrumbs.php')
            );
            this.fs.copyTpl(
                this.templatePath('php/inc/form-contact.php'),
                this.destinationPath('php/inc/form-contact.php')
            );
            this.fs.copyTpl(
                this.templatePath('php/inc/social-media.php'),
                this.destinationPath('php/inc/social-media.php')
            );
        },
    },

    //Install Dependencies
    install: function() {
        this.installDependencies({
            bower: true,
            npm: true,
            callback: function() {
                this.spawnCommand('grunt', ['bowerBuild']);
            }.bind(this)
        });
    },
});
