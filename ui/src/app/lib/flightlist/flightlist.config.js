/**
 * @Author: Anthony Perry
 * @Date:   2017-07-17T16:54:27-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: flightlist.config.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-18T08:54:59-05:00
 */
 export const config =
   ($stateProvider) => {
     'ngInject'
     $stateProvider.state({
       name: 'list',
       url: '/list',
       component: 'flightList',
       resolve: {
         currentList: (flightListService) => flightListService.getCurrentList()
       }
     })
   }
