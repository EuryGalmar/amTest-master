import React from 'react'

export const Input = ({title, defaultValue}) => {
  return (
    <div class="omrs-input-group">
				<label class="omrs-input-filled">
				<p className='label'>{title}</p>
				<input type="text"
              defaultValue={defaultValue}/>
				</label>
			</div>
  )
}

