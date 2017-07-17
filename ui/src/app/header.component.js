/**
 * @Author: Anthony Perry
 * @Date:   2017-07-17T13:06:46-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: header.component.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-17T15:52:37-05:00
 */

 import 'app/header.styles'
 import templateUrl from 'app/header.template'

 const controller =
   class FlightHeaderController {
     constructor ($log, loginService, $state) {
       'ngInject'
       this.loginService = loginService
       this.$state = $state
       $log.log('ft-header is a go')
     }

     loggingOut () {
       this.loginService.logout().then(() => this.$state.reload())
     }
   }

 export const flightHeader = {
   controller,
   templateUrl,
   controllerAs: 'header'
 }
