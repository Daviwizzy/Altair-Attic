// src/CarouselComponent.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import CarouselComponent from './CarouselComponent';

test('renders carousel with correct items', () => {
    render(<CarouselComponent />);
    const titles = [
        "Homeowners and Real Estate Developers",
        "Businesses and Enterprises",
        "Tech Enthusiasts and Professionals",
        "General Consumers"
    ];
    titles.forEach(title => {
        const element = screen.getByText(title);
        expect(element).toBeInTheDocument();
    });
});

test('carousel items contain correct descriptions', () => {
    render(<CarouselComponent />);
    const descriptions = [
        "Looking for smart home automation solutions to enhance security, convenience, and energy efficiency.",
        "In need of custom software development, IoT solutions, and embedded systems to optimize operations and innovate their product offerings.",
        "Seeking to acquire new IT skills and stay updated with the latest technological advancements.",
        "Interested in high-quality merchandise that complements their tech-savvy lifestyle."
    ];
    descriptions.forEach(description => {
        const element = screen.getByText(description);
        expect(element).toBeInTheDocument();
    });
});
