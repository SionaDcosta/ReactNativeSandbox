// CategoryCard.test.js

import React from 'react';
import { render, screen } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import CategoryCard from '../CategoryCard';

describe('CategoryCard Component', () => {
  const imgUrl = 'https://example.com/image.jpg';
  const title = 'Example Title';

  it('renders correctly', () => {
    const tree = renderer.create(<CategoryCard imgUrl={imgUrl} title={title} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders CategoryCard component', () => {
    render(<CategoryCard imgUrl={imgUrl} title={title} />);
    // Check if the component renders
    expect(screen.getByTestId('category-card')).toBeDefined();
    
    // Check if the image is rendered with correct source
    const imageElement = screen.getByTestId('category-card-image');
    expect(imageElement).toBeDefined();
    expect(imageElement.props.source.uri).toBe(imgUrl);
    
    // Check if the title text is rendered correctly
    const titleElement = screen.getByTestId('category-card-title');
    expect(titleElement).toBeDefined();
    expect(titleElement.props.children).toBe(title);
  });

  it('renders CategoryCard component without onPress prop', () => {
    render(<CategoryCard imgUrl={imgUrl} title={title} />);

    // Check if the component renders
    expect(screen.getByTestId('category-card')).toBeDefined();
    
    // Check if the image is rendered with correct source
    const imageElement = screen.getByTestId('category-card-image');
    expect(imageElement).toBeDefined();
    expect(imageElement.props.source.uri).toBe(imgUrl);
    
    // Check if the title text is rendered correctly
    const titleElement = screen.getByTestId('category-card-title');
    expect(titleElement).toBeDefined();
    expect(titleElement.props.children).toBe(title);
  });

});
