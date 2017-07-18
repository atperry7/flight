/**
 * @Author: Anthony Perry
 * @Date:   2017-07-17T14:36:21-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: landingpage.component.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-17T21:31:33-05:00
 */
 import 'landingpage/landingpage.styles'
 import templateUrl from 'landingpage/landingpage.template'

 const controller =
   class FlightLandingPageController {
     constructor ($log, landingpageService, $state, loginService, flightListService) {
       'ngInject'
       this.service = landingpageService
       this.$state = $state
       this.loginService = loginService
       this.flightListService = flightListService
       $log.debug('Flight-landingpage ...')
     }

     hasCurrentUser () {
       return this.loginService.isAuthenticated()
     }

   }

 export const flightLandingpage = {
   controller,
   templateUrl,
   controllerAs: 'landingpage',
   bindings: {
     currentList: '='
   }
 }
