/**
 * @Author: Anthony Perry
 * @Date:   2017-07-17T16:47:31-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: register.module.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-17T14:29:46-05:00
 */

 import { RegisterService } from 'register/register.service'
 import { flightRegister } from 'register/register.component'
 import { config } from 'register/register.config'

 export default ng
   .module('flight.register', [])
   .service('registerService', RegisterService)
   .component('flightRegister', flightRegister)
   .config(config)
   .name
