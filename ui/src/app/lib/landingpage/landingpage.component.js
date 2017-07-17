/**
 * @Author: Anthony Perry
 * @Date:   2017-07-17T14:36:21-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: landingpage.component.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-17T15:47:18-05:00
 */
 import 'landingpage/landingpage.styles'
 import templateUrl from 'landingpage/landingpage.template'

 const controller =
   class FlightLandingPageController {
     constructor ($log, landingpageService, $state, loginService) {
       'ngInject'
       this.service = landingpageService
       this.$state = $state
       this.loginService = loginService
       $log.debug('Flight-landingpage ...')
     }

     hasCurrentUser () {
       return this.loginService.isAuthenticated()
     }

   }

 export const flightLandingpage = {
   controller,
   templateUrl,
   controllerAs: 'landingpage'
 }
