/**
 * @Author: Anthony Perry
 * @Date:   2017-07-17T17:37:35-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: flightdisplay.config.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-17T17:46:29-05:00
 */
 export const config =
   ($stateProvider) => {
     'ngInject'
     $stateProvider.state({
       name: 'flight',
       url: '/flight/{origin}/{destination}',
       component: 'flightDisplay',
       resolve: {
         origin: ($transition$) => $transition$.params().origin,
         destination: ($transition$) => $transition$.params().destination
       }
     })
   }
