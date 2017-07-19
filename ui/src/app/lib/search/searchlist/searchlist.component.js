/**
 * @Author: Anthony Perry
 * @Date:   2017-07-18T21:46:07-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: searchlist.component.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-19T13:59:31-05:00
 */
 import 'search/search.styles'
 import templateUrl from 'search/searchlist/searchlist.template'

 const controller =
   class SearchListController {
     constructor ($log, searchService, $state, loginService) {
       'ngInject'
       this.service = searchService
       this.$state = $state
       this.loginService = loginService
       $log.log('Flight-searchlist ...')
     }

     hasCurrentUser () {
       return this.loginService.isAuthenticated()
     }

     getList () {
       return this.service.getCurrentList()
     }

     getOrigin () {
       return this.service.getOrigin()
     }

     getDestination () {
       return this.service.getDestination()
     }

   }

 export const flightSearchList = {
   controller,
   templateUrl,
   controllerAs: 'searchList',
   bindings: {
     searchList: '<'
   }
 }
