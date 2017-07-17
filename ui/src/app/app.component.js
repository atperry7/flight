/**
 * @Author: Anthony Perry
 * @Date:   2017-07-17T10:34:44-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: app.component.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-17T15:50:31-05:00
 */

import 'app/app.styles'
import templateUrl from 'app/app.template'

const controller = class FlightAppController {
  constructor ($log) {
    'ngInject'
    $log.debug('flight-app ...')
  }
}

export const flightApp = {
  controller,
  templateUrl,
  controllerAs: 'app'
}
