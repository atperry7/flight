/**
 * @Author: Anthony Perry
 * @Date:   2017-07-17T10:29:30-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: map.module.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-18T10:37:47-05:00
 */

import { mapLocations } from 'map/map.locations'
import { flightMap } from 'map/map.component'
import { MapService } from 'map/map.service'
import { config } from 'map/map.config'

export default ng
    .module('flight.map', [])
    .constant('locations', mapLocations)
    .component('flightMap', flightMap)
    .service('$map', MapService)
    .config(config)
    .name
