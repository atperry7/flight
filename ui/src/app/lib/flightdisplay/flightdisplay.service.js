/**
 * @Author: Anthony Perry
 * @Date:   2017-07-17T17:38:04-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: flightdisplay.service.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-17T17:49:58-05:00
 */
 export class FlightDisplayService {
   constructor ($http, apiUrl) {
     'ngInject'
     this.$http = $http
     this.apiUrl = apiUrl
   }
 }
