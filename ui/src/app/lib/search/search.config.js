/**
 * @Author: Anthony Perry
 * @Date:   2017-07-18T21:22:24-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: search.config.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-19T15:27:49-05:00
 */
 export const config =
   ($stateProvider) => {
     'ngInject'
     $stateProvider.state({
       name: 'search',
       url: '/search',
       onEnter: (searchService) => searchService.createLiveReload(),
       onExit: (searchService) => searchService.clearIntervalList(),
       component: 'flightSearch'
     })

     $stateProvider.state({
       name: 'search.list',
       url: '/',
       params: {to: 'none', from: 'none'},
       component: 'flightSearchList',
       resolve: {
         to: (searchService, $transition$) => searchService.setDestination($transition$.params().to),
         from: (searchService, $transition$) => searchService.setOrigin($transition$.params().from),
         searchList: ($transition$, searchService) => searchService.searchRequest($transition$.params().from, $transition$.params().to)
       }
     })
   }
