/**
 * @Author: Anthony Perry
 * @Date:   2017-07-18T21:22:53-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: search.service.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-18T21:24:52-05:00
 */
 export class SearchService {
   constructor ($http, apiUrl, localStorageService) {
     'ngInject'
     this.$http = $http
     this.apiUrl = apiUrl
     this.localStorageService = localStorageService
   }

 }
