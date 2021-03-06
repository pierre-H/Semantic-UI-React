import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const RevealStatesExamples = () => (
  <ExampleSection title='States'>
    <ComponentExample
      title='Active'
      description='An active reveal displays its hidden content.'
      examplePath='elements/Reveal/States/RevealExampleActive'
    />
    <ComponentExample
      title='Disabled'
      description='A disabled reveal will not animate when hovered.'
      examplePath='elements/Reveal/States/RevealExampleDisabled'
    />
  </ExampleSection>
)

export default RevealStatesExamples
