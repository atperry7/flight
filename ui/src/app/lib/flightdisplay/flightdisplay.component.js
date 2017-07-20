/**
 * @Author: Anthony Perry
 * @Date:   2017-07-17T17:37:24-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: flightdisplay.component.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-19T22:24:26-05:00
 */
 import 'flightdisplay/flightdisplay.styles'
 import templateUrl from 'flightdisplay/flightdisplay.template'

 const controller =
   class FlightDisplayController {

     constructor ($log, flightDisplayService, $stateParams) {
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

     reservation () {
       this.service.bookFlight(this.origin(), this.destination(), this.$stateParams.flight)
                                            .then(data => { this.message = data })
     }

   }

 export const flightDisplay = {
   controller,
   templateUrl,
   controllerAs: 'flightDisplay',
   bindings: {
     message: '@'
   }
 }
