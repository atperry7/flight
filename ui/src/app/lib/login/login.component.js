/**
 * @Author: Anthony Perry
 * @Date:   2017-07-17T11:10:40-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: login.component.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-17T14:27:46-05:00
 */

import 'login/login.styles'
import templateUrl from 'login/login.template'

const controller =
  class FlightLoginController {
    constructor ($log, loginService, $state) {
      'ngInject'
      this.service = loginService
      $log.debug('flight-login ...')
      this.$state = $state
    }

    successfulLogin () {
      return this.service.isAuthenticated()
    }

    login () {
      this.service.authenticate(this.username, this.password)
                                .then((data) => {
                                  if (data === true) {
                                    this.$state.reload('feed')
                                  }
                                })
    }

    logout () {
      this.service.logout()
    }
  }

export const flightLogin = {
  controller,
  templateUrl,
  controllerAs: 'login',
  bindings: {
    username: '<',
    password: '<'
  }
}
