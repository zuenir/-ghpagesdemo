import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

describe('Greet', () => {
   fit('renders correctly', () => {
      render(<Greet/>);
     const textElement = screen.getByText('Hello');
     expect(textElement).toBeInTheDocument();
  });
  
  describe('Nested', () => { 
    it('renders with a name', () => {
        render(<Greet name='zuenir'/>);
        const textElement = screen.getByText('Hello zuenir'); 
        expect(textElement).toBeInTheDocument();
     })
   })
  
});