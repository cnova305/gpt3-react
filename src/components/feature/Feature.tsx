import React from 'react';
import './Feature.css'

interface FeatureProps {
  title: string;
  text?: string;
}

const Feature = ({
  title = '',
  text = '',
  ...props
}: FeatureProps) => {
  return (
    <div className='gpt3__features-container__feature'>
      <div className='gpt3__features-container__feature-title'>
        <div />
          <h1>{title}</h1>
        </div>
        <div className='gpt3__features-container__feature-text'>
          <p>{text}</p>
        </div>
    </div>
  )
}

export default Feature