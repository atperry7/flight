/**
 * @Author: Anthony Perry
 * @Date:   2017-07-18T21:22:53-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: search.service.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-19T09:13:07-05:00
 */
 export class SearchService {
   constructor ($http, apiUrl, localStorageService, $stateParams, $log, $interval, $state) {
     'ngInject'
     this.$log = $log
     this.$stateParams = $stateParams
     this.$http = $http
     this.apiUrl = apiUrl
     this.localStorageService = localStorageService
     this.$interval = $interval
     this.$state = $state
   }

   currentList = []
   intervals = []
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

   createLiveReload () {
     this.intervals.push(this.$interval(() => {
       this.$log.log('Reload Fired')
       this.$state.reload('search', {to: this.destination, from: this.origin})
     }, 30000))
   }

   clearIntervalList () {
     for (let interval of this.intervals) {
       this.$interval.cancel(interval)
     }
   }

 }
