/**
 * @Author: Anthony Perry
 * @Date:   2017-07-17T10:55:15-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: app.config.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-18T10:08:22-05:00
 */

export const config =
  ($logProvider, $locationProvider, $urlRouterProvider, localStorageServiceProvider) => {
    'ngInject'
    $logProvider.debugEnabled(true)
    $locationProvider.html5Mode(true)
    $urlRouterProvider.otherwise('/home')

    localStorageServiceProvider
      .setPrefix('flightApp')
      .setStorageType('sessionStorage')
  }
