/**
 * @Author: Anthony Perry
 * @Date:   2017-07-18T21:22:53-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: search.service.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-18T22:59:10-05:00
 */
 export class SearchService {
   constructor ($http, apiUrl, localStorageService, $stateParams, $log) {
     'ngInject'
     this.$log = $log
     this.$stateParams = $stateParams
     this.$http = $http
     this.apiUrl = apiUrl
     this.localStorageService = localStorageService
   }

   currentList = []
   origin = ''
   destination = ''

   setOrigin (from) {
     this.origin = from
   }

   setDestination (to) {
     this.destination = to
   }

   setCurrentList (aList) {
     this.$log.log(`FROM: ${this.origin} TO: ${this.destination}`)
     this.currentList = []

     for (let city of aList) {
       if (city.origin.toLowerCase() === this.origin.toLowerCase() &&
        city.destination.toLowerCase() === this.destination.toLowerCase()) {
         this.currentList.push(city)
       }
     }
   }

   getCurrentList () {
     return this.currentList
   }

 }
