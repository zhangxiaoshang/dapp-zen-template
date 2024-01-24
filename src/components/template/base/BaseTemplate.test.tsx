import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import BaseTemplate from './BaseTemplate'
import { mockBaseTemplateProps } from './BaseTemplate.mocks'

describe('BaseTemplate', () => {
  it('show be render with props', () => {
    // ARRANGE
    const { simpleTextProp } = mockBaseTemplateProps.basic
    const { getByText } = render(
      <BaseTemplate simpleTextProp={simpleTextProp} />,
    )

    // ACT

    // ASSERT
    expect(getByText(simpleTextProp)).toBeDefined()
  })
})
