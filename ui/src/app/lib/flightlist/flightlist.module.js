/**
 * @Author: Anthony Perry
 * @Date:   2017-07-17T16:54:39-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: flightlist.module.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-17T17:16:32-05:00
 */
 import { FlightListService } from 'flightlist/flightlist.service'
 import { flightList } from 'flightlist/flightlist.component'
 import { config } from 'flightlist/flightlist.config'

 export default ng
   .module('flight.flightlist', [])
   .service('flightListService', FlightListService)
   .component('flightList', flightList)
   .config(config)
   .name
