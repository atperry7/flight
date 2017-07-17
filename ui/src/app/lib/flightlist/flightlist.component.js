/**
 * @Author: Anthony Perry
 * @Date:   2017-07-17T16:54:18-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: flightlist.component.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-17T17:23:56-05:00
 */
 import 'flightlist/flightlist.styles'
 import templateUrl from 'flightlist/flightlist.template'

 const controller =
   class FlightListController {
     constructor ($log, flightListService, $state, loginService) {
       'ngInject'
       this.service = flightListService
       this.$state = $state
       this.loginService = loginService
       $log.debug('Flight-flightlist ...')
     }

   }

 export const flightList = {
   controller,
   templateUrl,
   controllerAs: 'flightList',
   bindings: {
     currentList: '='
   }
 }
