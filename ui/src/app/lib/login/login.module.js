/**
 * @Author: Anthony Perry
 * @Date:   2017-07-17T11:10:40-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: login.module.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-17T14:28:15-05:00
 */

import { LoginService } from 'login/login.service'
import { flightLogin } from 'login/login.component'
import { config } from 'login/login.config'
import { run } from 'login/loginhook.run'

export default ng
  .module('flight.login', [])
  .service('loginService', LoginService)
  .component('flightLogin', flightLogin)
  .config(config)
  .run(run)
  .name
