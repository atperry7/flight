/**
 * @Author: Anthony Perry
 * @Date:   2017-07-18T21:22:24-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: search.config.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-18T22:55:03-05:00
 */
 export const config =
   ($stateProvider) => {
     'ngInject'
     $stateProvider.state({
       name: 'search',
       url: '/search',
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
         currentList: (landingpageService, searchService) => landingpageService.getCurrentList().then(data => searchService.setCurrentList(data))
       }
     })
   }
