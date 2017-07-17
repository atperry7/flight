/**
 * @Author: Anthony Perry
 * @Date:   2017-07-17T14:48:50-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: landinglogreg.config.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-17T14:52:54-05:00
 */
 export const configLandingLogin =
   ($stateProvider) => {
     'ngInject'
     $stateProvider.state({
       parent: 'flightLandingpage',
       name: 'landingLogin',
       component: 'landingLogin'
     })
   }
