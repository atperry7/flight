/**
 * @Author: Anthony Perry
 * @Date:   2017-07-17T14:36:33-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: landingpage.config.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-19T09:04:21-05:00
 */
 export const config =
   ($stateProvider) => {
     'ngInject'
     $stateProvider.state({
       name: 'home',
       url: '/home',
       component: 'flightLandingpage',
       onEnter: (landingpageService) => landingpageService.createLiveReload(),
       onExit: (landingpageService) => landingpageService.clearIntervalList(),
       resolve: {
         currentList: (landingpageService) => landingpageService.getCurrentList()
       }
     })
   }
