/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-10T10:55:15-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: app.config.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-17T10:38:53-05:00
 */

export const config =
  ($logProvider, $locationProvider, $urlRouterProvider, localStorageServiceProvider) => {
    'ngInject'
    $logProvider.debugEnabled(true)
    $locationProvider.html5Mode(true)
    $urlRouterProvider.otherwise('/')

    localStorageServiceProvider
      .setPrefix('flightApp')
      .setStorageType('sessionStorage')
  }
