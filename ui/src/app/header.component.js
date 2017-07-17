/**
 * @Author: Anthony Perry
 * @Date:   2017-07-17T13:06:46-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: header.component.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-17T13:08:39-05:00
 */

 import 'app/header.styles'
 import templateUrl from 'app/header.template'

 const controller =
   class FlightHeaderController {
     constructor ($log) {
       'ngInject'
       $log.log('ft-header is a go')
     }
   }

 export const flightHeader = {
   controller,
   templateUrl,
   controllerAs: 'header'
 }
