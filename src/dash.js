import React from 'react';

import moment from "moment"

function Dash(props) {
  let {time} = props
  return (
    <div className="App">
  <hi>{moment(time).format('hh : mm : s a')}</hi>
    </div>
  );
}

export default Dash;