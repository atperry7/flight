/**
 * @Author: Anthony Perry
 * @Date:   2017-07-17T10:56:55-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: app.run.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-17T14:27:07-05:00
 */

import { Visualizer } from '@uirouter/visualizer'

export const run =
  ($uiRouter) => {
    'ngInject'
    $uiRouter.plugin(Visualizer)
  }
