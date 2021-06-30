import { render, cleanup } from '@testing-library/react'
import React from 'react'
import HeroSection from '../HeroSection.js';

import '@testing-library/jest-dom/extend-expect'

afterEach(()=>{
  cleanup();
})

test('full app rendering/navigating', () => {
    const {getByTestId}=render(<HeroSection/>);
    const introEl=getByTestId("intro");
    const aboutEL=getByTestId("about");
    expect(introEl.textContent).toBe("A Picture is a poem without words.")
    expect(aboutEL.textContent).toBe("What are you waiting for?Go ahead...")
  
  })
  