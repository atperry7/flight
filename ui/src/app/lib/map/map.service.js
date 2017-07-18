/**
 * @Author: Anthony Perry
 * @Date:   2017-07-17T10:29:30-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: map.service.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-18T15:32:42-05:00
 */

export class MapService {
  constructor ($http, apiUrl, $log) {
    'ngInject'
    this.$http = $http
    this.apiUrl = apiUrl
    this.$log = $log
  }

  origin = {}
  destination = {}

  setOrigin (starting) {
    this.origin = starting
  }

  setDestination (ending) {
    this.destination = ending
  }

  getOrigin () {
    return this.origin
  }

  getDestination () {
    return this.destination
  }

  getMarkerByCityName (name) {
    return this.$http({
      method: 'GET',
      url: `${this.apiUrl}/location/name`,
      params: { name: name }
    }).then((response) => {
      if (response.data !== undefined) {
        return response.data
      }
      return false
    }, (response) => {
      return false
    })
      // .get(`${this.apiUrl}/location/name`, { params: { name } })
      // .then(result => result.data)
  }
}
