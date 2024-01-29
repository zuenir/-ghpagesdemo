import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

describe('Greet', () => {
   test('Greet renders correctly', () => {
      render(<Greet/>);
     const textElement = screen.getByText('Hello');
     expect(textElement).toBeInTheDocument();
  });
  
//   test('Greet renders with a name', () => {
//      render(<Greet name='zuenir'/>);
//      const textElement = screen.getByText('Hello zuenir'); 
//      expect(textElement).toBeInTheDocument();
//   });
});