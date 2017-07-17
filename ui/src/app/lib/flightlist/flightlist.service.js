/**
 * @Author: Anthony Perry
 * @Date:   2017-07-17T16:54:48-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: flightlist.service.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-17T17:32:52-05:00
 */
 export class FlightListService {
   constructor ($http, apiUrl) {
     'ngInject'
     this.$http = $http
     this.apiUrl = apiUrl
   }

   getCurrentList () {
     return this.$http({
       method: 'GET',
       url: `${this.apiUrl}/flights`
     }).then((response) => {
       if (response.data !== undefined) {
         return response.data
       }
       return false
     }, (response) => {
       return false
     })
   }

 }
