import React from 'react'
import { Form, Input } from 'semantic-ui-react'

export default (props) => {
  return (
    <Form.Input
      label={props.label}
      error={props.error ? { content: props.errorContent } : false}
    >
      <Input
        label={props.inputLabel}
        labelPosition="right"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </Form.Input>
  )
}
