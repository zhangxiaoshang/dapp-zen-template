import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import BaseTemplate from './BaseTemplate'
import { mockBaseTemplateProps } from './BaseTemplate.mocks'

describe('BaseTemplate', () => {
  it('show be render with props', () => {
    // ARRANGE
    const { simpleTextProp } = mockBaseTemplateProps.basic
    const { asFragment, getByText } = render(
      <BaseTemplate simpleTextProp={simpleTextProp} />,
    )

    // ACT

    // ASSERT
    expect(getByText(simpleTextProp)).toBeDefined()
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="_BaseTemplate_a15a96"
        >
          Hello World
        </div>
      </DocumentFragment>
    `)
  })
})
