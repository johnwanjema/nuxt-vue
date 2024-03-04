import Vue from 'vue'
import moment from 'moment'

export default () => {

    Vue.filter('filterDate', function (myDate) {
        return new Date(myDate).toDateString();
      });

}