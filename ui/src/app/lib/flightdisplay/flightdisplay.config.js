/**
 * @Author: Anthony Perry
 * @Date:   2017-07-17T17:37:35-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: flightdisplay.config.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-19T14:23:08-05:00
 */
 export const config =
   ($stateProvider) => {
     'ngInject'
     $stateProvider.state({
       name: 'flight',
       url: '/flight/{origin}/{destination}',
       params: { flight: {} },
       data: { requiresAuth: true },
       component: 'flightDisplay',
       resolve: {
         originData: ($transition$, flightDisplayService) => flightDisplayService.getMarkerByCityName($transition$.params().origin).then(data => flightDisplayService.setOriginData(data)),
         destinationData: ($transition$, flightDisplayService) => flightDisplayService.getMarkerByCityName($transition$.params().destination).then(data => flightDisplayService.setDestinationData(data)),
         origin: ($transition$, flightDisplayService) => flightDisplayService.setOrigin($transition$.params().origin),
         destination: ($transition$, flightDisplayService) => flightDisplayService.setDestination($transition$.params().destination)
       }
     })

     $stateProvider.state({
       name: 'flight.displaymap',
       component: 'flightDisplayMap'
     })
   }
