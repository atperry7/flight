/**
 * @Author: Anthony Perry
 * @Date:   2017-07-18T21:22:35-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: search.module.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-18T21:28:27-05:00
 */

 import { SearchService } from 'search/search.service'
 import { flightSearch } from 'search/search.component'
 import { config } from 'search/search.config'

 export default ng
   .module('flight.search', [])
   .service('searchService', SearchService)
   .component('flightSearch', flightSearch)
   .config(config)
   .name
