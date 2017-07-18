/**
 * @Author: Anthony Perry
 * @Date:   2017-07-17T17:37:24-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: flightdisplay.component.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-18T16:34:40-05:00
 */
 import 'flightdisplay/flightdisplay.styles'
 import templateUrl from 'flightdisplay/flightdisplay.template'

 const controller =
   class FlightDisplayController {

     constructor ($log, flightDisplayService, $state, loginService, $map, $stateParams) {
       'ngInject'
       this.service = flightDisplayService
       this.$stateParams = $stateParams
       $log.debug('Flight-flightdisplay ...')
     }

     origin () {
       return this.$stateParams.origin.toLowerCase()
     }

     destination () {
       return this.$stateParams.destination.toLowerCase()
     }

   }

 export const flightDisplay = {
   controller,
   templateUrl,
   controllerAs: 'flightDisplay'
 }
