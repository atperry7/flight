/**
 * @Author: Anthony Perry
 * @Date:   2017-07-17T10:29:30-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: map.service.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-17T11:14:14-05:00
 */

export class MapService {
  constructor ($http, apiUrl) {
    'ngInject'
    this.$http = $http
    this.apiUrl = apiUrl
  }

  getMarkerByCityName (name) {
    return this.$http
      .get(`${this.apiUrl}/location/name`, { params: { name } })
      .then(result => result.data)
  }
}
