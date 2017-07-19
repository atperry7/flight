/**
 * @Author: Anthony Perry
 * @Date:   2017-07-18T21:22:15-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: search.component.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-19T09:23:51-05:00
 */
 import 'search/search.styles'
 import templateUrl from 'search/search.template'

 const controller =
   class SearchController {
     constructor ($log, searchService, $state, loginService) {
       'ngInject'
       this.service = searchService
       this.$state = $state
       this.loginService = loginService
       $log.debug('Flight-search ...')
     }

     hasCurrentUser () {
       return this.loginService.isAuthenticated()
     }
   }

 export const flightSearch = {
   controller,
   templateUrl,
   controllerAs: 'search',
   bindings: {
     toCity: '<',
     fromCity: '<'
   }
 }
