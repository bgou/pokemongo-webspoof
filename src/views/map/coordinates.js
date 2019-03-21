import React from 'react'
import { action } from 'mobx'
import { observer } from 'mobx-react'

import userLocation from '../../models/user-location.js'

const handleChange = (idx) => action(({ target: { value } }) => {
  userLocation[idx] = parseFloat(value)
})

const formatValue = (coordinate) => {
  return parseFloat(`${coordinate}`).toFixed(6)
}

const Coordinates = observer(() =>
  <div className='clearfix coordinates'>
    { [ 'lat', 'lng' ].map((direction, idx) =>
      <div key={ idx } className='pull-xs-left'>
        <div className='input-group'>
          <span className='input-group-addon' id='basic-addon1'>
            { direction }
          </span>
          <input
            type='text'
            className='form-control'
            placeholder={ formatValue(direction) }
            aria-describedby='basic-addon1'
            value={ formatValue(userLocation[idx]) }
            onChange={ handleChange(idx) } />
        </div>
      </div>
    ) }
  </div>
)

export default Coordinates
