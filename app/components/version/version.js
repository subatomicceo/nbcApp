'use strict';

angular.module('nbcCommissary.version', [
  'nbcCommissary.version.interpolate-filter',
  'nbcCommissary.version.version-directive'
])

.value('version', '0.1');
