/**
 * @Author: Anthony Perry
 * @Date:   2017-07-18T21:22:35-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: search.module.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-18T21:50:59-05:00
 */

 import { SearchService } from 'search/search.service'
 import { flightSearch } from 'search/search.component'
 import { flightSearchList } from 'search/searchlist/searchlist.component'
 import { config } from 'search/search.config'

 export default ng
   .module('flight.search', [])
   .service('searchService', SearchService)
   .component('flightSearch', flightSearch)
   .component('flightSearchList', flightSearchList)
   .config(config)
   .name
