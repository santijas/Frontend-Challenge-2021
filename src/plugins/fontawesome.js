import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faTh, faList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faSearch)
library.add(faList)
library.add(faTh)


Vue.component('font-awesome-icon', FontAwesomeIcon)
