/**
 * @Author: Anthony Perry
 * @Date:   2017-07-17T14:36:57-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: landingpage.service.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-18T21:10:54-05:00
 */

 export class LandingPageService {
   constructor ($http, apiUrl, localStorageService) {
     'ngInject'
     this.$http = $http
     this.apiUrl = apiUrl
     this.localStorageService = localStorageService
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
