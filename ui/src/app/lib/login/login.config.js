/**
 * @Author: Anthony Perry
 * @Date:   2017-07-17T11:10:40-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: login.config.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-17T14:28:02-05:00
 */

 export const config =
   ($stateProvider) => {
     'ngInject'
     $stateProvider.state({
       name: 'login',
       url: '/login',
       component: 'flightLogin'
     })
   }
