// // Karma configuration
// // Generated on Sat Mar 31 2018 00:40:44 GMT+0300 (MSK)
//
const path = require('path');
const getWebpackConfig = require('./webpack.config');

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: './',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [

            'src/**/*.spec.ts'
            // {pattern: 'src/**/*spec.ts', watced: false},
            // {pattern:'src/**/*.tsx',watced:false},
        ],


        // list of files / patterns to exclude
        exclude: [
            'node_modules'
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'src/**/*.ts': ['webpack', 'sourcemap'],
            'src/**/*.tsx': ['webpack', 'sourcemap'],
        },

        plugins: [
            'karma-jasmine',
            // 'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-sourcemap-loader',
            'karma-jasmine-html-reporter',
            'karma-coverage-istanbul-reporter',
            'karma-webpack',
            'karma-coverage',
            'karma-mocha-reporter'
        ],

        // coverageReporter: {
        //     dir:'tmp/coverage/',
        //     reporters: [
        //         { type:'html', subdir: 'report-html' },
        //         { type:'lcov', subdir: 'report-lcov' }
        //     ],
        //     instrumenterOptions: {
        //         istanbul: { noCompact:true }
        //     }
        // },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha', 'kjhtml'/*, 'coverage'*/],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,

        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        coverageIstanbulReporter: {
            reports: ['html', 'lcovonly'],
            fixWebpackSourcePaths: true
        },

        webpack: getWebpackConfig(),
        webpackMiddleware: {
            // mode:'development',
            // devtool: "inline-source-map",
            // noInfo: true,
            // stats: {
            //     color: true,
            //     assets: true
            // }
        },
        mime: {
            'text/x-typescript': ['ts', 'tsx']
        },
    })
};
