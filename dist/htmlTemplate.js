/* eslint-disable */
import strTemplate from './strTemplate'

function htmlTemplate(id, val, split) {
  var ele = document.getElementById(id);
  ele.innerHTML = strTemplate(ele.innerHTML, val, split);
}

export default htmlTemplate
