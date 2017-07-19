/**
 * @Author: Anthony Perry
 * @Date:   2017-07-18T21:22:24-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: search.config.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-18T21:50:15-05:00
 */
 export const config =
   ($stateProvider) => {
     'ngInject'
     $stateProvider.state({
       name: 'search',
       url: '/search',
       component: 'flightSearch'
     })

     $stateProvider.state({
       name: 'search.list',
       url: '/',
       component: 'flightSearchList'
     })
   }
