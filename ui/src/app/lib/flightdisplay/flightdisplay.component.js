/**
 * @Author: Anthony Perry
 * @Date:   2017-07-17T17:37:24-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: flightdisplay.component.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-17T17:48:12-05:00
 */
 import 'flightdisplay/flightdisplay.styles'
 import templateUrl from 'flightdisplay/flightdisplay.template'

 const controller =
   class FlightDisplayController {
     constructor ($log, flightDisplayService, $state, loginService) {
       'ngInject'
       this.service = flightDisplayService
       this.$state = $state
       this.loginService = loginService
       $log.debug('Flight-flightdisplay ...')
     }

   }

 export const flightDisplay = {
   controller,
   templateUrl,
   controllerAs: 'flightDisplay',
   bindings: {
     origin: '@',
     destination: '@'
   }
 }
