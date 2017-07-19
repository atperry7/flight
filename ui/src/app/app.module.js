/**
 * @Author: Anthony Perry
 * @Date:   2017-07-17T10:37:25-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: app.module.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-18T21:28:53-05:00
 */

 import ngLocalStorage from 'angular-local-storage'
 import ngUiRouter from 'angular-ui-router'
 import ngMaterial from 'angular-material'
 import ngAnimate from 'angular-animate'
 import ngMessages from 'angular-messages'
 import ngAria from 'angular-aria'
 import ngMap from 'ngmap'

 import apiUrl from 'app/api.url'
 import flightMap from 'map/map.module'
 import login from 'login/login.module'
 import register from 'register/register.module'
 import flightLandingpage from 'landingpage/landingpage.module'
 import flightList from 'flightlist/flightlist.module'
 import flightDisplay from 'flightdisplay/flightdisplay.module'
 import flightSearch from 'search/search.module'

 import { flightHeader } from 'app/header.component'
 import { flightApp } from 'app/app.component'
 import { config } from 'app/app.config'
 import { run } from 'app/app.run'

 export default ng
  .module('flight.app', [
    // outside dependencies
    ngLocalStorage,
    ngUiRouter,
    ngMaterial,
    ngMessages,
    ngAnimate,
    ngAria,
    ngMap,

    // product dependencies
    flightMap,
    login,
    register,
    flightList,
    flightLandingpage,
    flightDisplay,
    flightSearch
  ])
  .component('flightApp', flightApp)
  .component('flightHeader', flightHeader)
  .constant('apiUrl', apiUrl)
  .config(config)
  .run(run)
  .name
