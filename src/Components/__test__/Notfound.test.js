import { render, cleanup } from '@testing-library/react'
import React from 'react'
import HeroSection from '../Notfound.js';

import '@testing-library/jest-dom/extend-expect'

afterEach(()=>{
  cleanup();
})

test('full app rendering/navigating', () => {
    const {getByTestId}=render(<HeroSection/>);
    const introEl=getByTestId("intro");
    const aboutEL=getByTestId("about");
    expect(introEl.textContent).toBe("Picture Not Available ;(")
    expect(aboutEL.textContent).toBe("Search for anything else....")
  
  })
  