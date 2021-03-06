/**
 * @Author: Anthony Perry
 * @Date:   2017-07-17T16:47:17-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: register.config.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-17T14:29:38-05:00
 */

 export const config =
   ($stateProvider) => {
     'ngInject'
     $stateProvider.state({
       name: 'register',
       url: '/register',
       component: 'flightRegister'
     })
   }
