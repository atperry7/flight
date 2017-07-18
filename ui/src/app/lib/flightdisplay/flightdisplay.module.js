/**
 * @Author: Anthony Perry
 * @Date:   2017-07-17T17:37:54-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: flightdisplay.module.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-18T14:39:55-05:00
 */
 import { FlightDisplayService } from 'flightdisplay/flightdisplay.service'
 import { flightDisplay } from 'flightdisplay/flightdisplay.component'
 import { flightDisplayMap } from 'flightdisplay/displaymap/displaymap.component'
 import { config } from 'flightdisplay/flightdisplay.config'

 export default ng
   .module('flight.flightdisplay', [])
   .service('flightDisplayService', FlightDisplayService)
   .component('flightDisplay', flightDisplay)
   .component('flightDisplayMap', flightDisplayMap)
   .config(config)
   .name
