import { Row } from 'antd'
import React from 'react'
import Story from '../Story'

const StoryList = () => {
  return (
        <Row gap={[28,32]}>
            <Story />
            <Story />
        </Row>
  )
}

export default StoryList
