/**
 * @Author: Anthony Perry
 * @Date:   2017-07-18T10:30:18-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: map.config.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-18T10:33:17-05:00
 */
 export const config =
   ($stateProvider) => {
     'ngInject'
     $stateProvider.state({
       name: 'map',
       url: '/map/{origin}/{destination}',
       component: 'flightMap',
       resolve: {
         origin: ($transition$, $map) => $map.getMarkerByCityName($transition$.params().origin),
         destination: ($transition$, $map) => $map.getMarkerByCityName($transition$.params().destination)
       }
     })
   }
