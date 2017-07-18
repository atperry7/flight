/**
 * @Author: Anthony Perry
 * @Date:   2017-07-17T17:37:35-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: flightdisplay.config.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-18T15:48:36-05:00
 */
 export const config =
   ($stateProvider) => {
     'ngInject'
     $stateProvider.state({
       name: 'flight',
       url: '/flight/{origin}/{destination}',
       component: 'flightDisplay',
       resolve: {
         originData: ($transition$, $map) => $map.getMarkerByCityName($transition$.params().origin).then(data => data),
         destinationData: ($transition$, $map) => $map.getMarkerByCityName($transition$.params().destination).then(data => data),
         origin: ($transition$, flightDisplayService) => flightDisplayService.setOrigin($transition$.params().origin),
         destination: ($transition$, flightDisplayService) => flightDisplayService.setDestination($transition$.params().destination)
       }
     })

     $stateProvider.state({
       name: 'flight.map',
       component: 'flightDisplayMap'
     })
   }
