/**
 * @Author: Anthony Perry
 * @Date:   2017-07-17T16:44:18-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: register.component.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-17T16:07:52-05:00
 */
 import 'register/register.styles'
 import templateUrl from 'register/register.template'

 const controller =
   class FlightRegisterController {
     constructor ($log, registerService, $state) {
       'ngInject'
       this.service = registerService
       this.$state = $state
       $log.debug('Flight-register ...')
     }

     join () {
       this.service.register(this.username, this.password, this.email, this.firstName, this.lastName, this.phoneNumber)
       .then((data) => {
         if (data === true) {
           this.$state.reload('home')
         }
       })
     }

     registerError () {
       return this.service.errorMessage()
     }
   }

 export const flightRegister = {
   controller,
   templateUrl,
   controllerAs: 'register',
   bindings: {
     username: '<',
     password: '<',
     email: '<',
     firstName: '<',
     lastName: '<',
     phoneNumber: '<'
   }
 }
