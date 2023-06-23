import Input from '../ui-kit/Input.tsx'
import TextArea from '../ui-kit/TextArea.tsx'
import useFormHandler from '../custom-hooks/useFormHandler.tsx'
import '../css/new-artist-form.css'
import React from 'react'

export default function ArtistForm(props: { legend: any; onSubmit: any; formInputs: any }) {
  const { legend, onSubmit, formInputs } = props

  const { inputs, handleChange } = useFormHandler(formInputs)

  return <div>
    <form onSubmit={onSubmit}>
      <legend>{legend}</legend>
      <fieldset className='quad'>
        <Input
          label='Name'
          name='name'
          value={inputs.name}
          onChange={handleChange}
          required
        />
        <Input
          label='Style'
          name='style'
          value={inputs.style}
          onChange={handleChange}
          required
        />
        <Input
          label='Email'
          name='email'
          type='email'
          value={inputs.email}
          onChange={handleChange}
          required
        />
        <Input
          label='Phone'
          name='phone'
          pattern='\d{3}-\d{3}-\d{4}'
          value={inputs.phone}
          onChange={handleChange}
          required
        />
      </fieldset>
      <TextArea
        label='Bio'
        name='bio'
        value={inputs.bio}
        onChange={handleChange}
        required
        rows={5}
      />
      <Input
        label='Profile Image'
        name='image'
        value={inputs.image}
        onChange={handleChange}
      />
      <button className="btn btn-light" type='submit'>Submit</button>
    </form>
  </div>
}