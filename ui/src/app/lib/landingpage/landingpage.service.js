/**
 * @Author: Anthony Perry
 * @Date:   2017-07-17T14:36:57-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: landingpage.service.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-19T09:04:00-05:00
 */

 export class LandingPageService {
   constructor ($http, apiUrl, localStorageService, $interval, $state, $log) {
     'ngInject'
     this.$http = $http
     this.apiUrl = apiUrl
     this.localStorageService = localStorageService
     this.$interval = $interval
     this.$state = $state
     this.$log = $log
   }

   intervals = []

   createLiveReload () {
     this.intervals.push(this.$interval(() => {
       this.$log.log('Reload Fired')
       this.$state.reload()
     }, 30000))
   }

   clearIntervalList () {
     for (let interval of this.intervals) {
       this.$interval.cancel(interval)
     }
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
