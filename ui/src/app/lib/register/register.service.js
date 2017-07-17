/**
 * @Author: Anthony Perry
 * @Date:   2017-07-17T16:47:42-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: register.service.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-17T16:14:50-05:00
 */
 export class RegisterService {
   constructor ($q, localStorageService, $http, $log, $state, apiUrl) {
     'ngInject'
     this.$q = $q
     this.localStorageService = localStorageService
     this.$http = $http
     this.$log = $log
     this.$state = $state
     this.apiUrl = apiUrl
   }

   errorMess = ''

   register (username, password, email, firstName, lastName, phoneNumber) {
     let userObject = { credentials: { username: username, password: password }, profile: { email: email } }
     let optionalInfo = { firstName: firstName, lastName: lastName, phone: phoneNumber }

     if (username === undefined || password === undefined || email === undefined) {
       this.errorMess = 'You are missing required fields.'
       return false
     }

     return this.$http({
       method: 'POST',
       url: `${this.apiUrl}/user/create`,
       params: optionalInfo,
       data: userObject
     }).then((response) => {
       if (response.data.username !== undefined) {
         this.localStorageService.set('currentUser', response.data)
         this.localStorageService.set('password', password)
         this.errorMess = ''
         return true
       }
       return false
     }, (response) => {
       return false
     })
   }

   errorMessage () {
     return this.errorMess
   }
 }
