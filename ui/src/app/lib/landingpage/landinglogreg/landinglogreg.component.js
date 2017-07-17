/**
 * @Author: Anthony Perry
 * @Date:   2017-07-17T14:47:23-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: landinglogreg.component.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-17T14:51:36-05:00
 */
 import 'landingpage/landingpage.styles'
 import templateUrl from 'landingpage/landinglogreg/landinglogreg.template'

 const controller =
   class LandingLoginController {
     constructor ($log, landingpageService, $state) {
       'ngInject'
       this.service = landingpageService
       this.$state = $state
       this.register = false
       this.selectView = 'Register'
       $log.debug('twtr-landingpageLogin...')
     }

     clickedToRegister () {
       return this.register
     }

     clickToLogin () {
       this.register = false
     }

     clickToRegister () {
       this.register = true
     }
   }

 export const landingLogin = {
   controller,
   templateUrl,
   controllerAs: 'landingLogin',
   bindings: {
     selectView: '@'
   }
 }
