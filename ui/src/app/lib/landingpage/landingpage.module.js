/**
 * @Author: Anthony Perry
 * @Date:   2017-07-17T14:36:45-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: landingpage.module.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-17T14:55:11-05:00
 */
 import { LandingPageService } from 'landingpage/landingpage.service'
 import { flightLandingpage } from 'landingpage/landingpage.component'
 import { config } from 'landingpage/landingpage.config'
 import { landingLogin } from 'landingpage/landinglogreg/landinglogreg.component'

 export default ng
   .module('flight.landingpage', [])
   .service('landingpageService', LandingPageService)
   .component('flightLandingpage', flightLandingpage)
   .component('landingLogin', landingLogin)
   .config(config)
   .name
