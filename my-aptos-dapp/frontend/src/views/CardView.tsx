import React, { useState } from 'react';
import styled from 'styled-components';

import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";
import img4 from "../../images/img4.png";
import img5 from "../../images/img5.png";

// Define your card data structure
type CardData = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

// Sample card data
const cards: CardData[] = [
  {
    id: 1,
    title: 'Card 1',
    description: 'Price: 4 ATP',
    imageUrl: img1,
  },
  {
    id: 2,
    title: 'Card 2',
    description: 'Price: 3 ATP',
    imageUrl: img2,
  },
  {
    id: 3,
    title: 'Card 3',
    description: 'Price: 4 ATP',
    imageUrl: img3,
  },
  {
    id: 4,
    title: 'Card 4',
    description: 'Price: 4 ATP',
    imageUrl: img4,
  },
  {
    id: 5,
    title: 'Card 5',
    description: 'Price: 4 ATP',
    imageUrl: img5,
  },
  {
    id: 6,
    title: 'Card 6',
    description: 'Price: 4 ATP',
    imageUrl: img5,
  },
  {
    id: 7,
    title: 'Card 7',
    description: 'Price: 4 ATP',
    imageUrl: img5,
  },
  {
    id: 8,
    title: 'Card 8',
    description: 'Price: 4 ATP',
    imageUrl: img5,
  },
  
  
];

// Styled components for card layout
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 6px;
`;

const CardTitle = styled.h3`
  margin-top: 0;
`;

const CardDescription = styled.p`
  color: #FFFFFF;
`;

const BuyButton = styled.button`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const CardWrapper = styled.div`
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 10px;
  padding: 10px;
  position: relative; /* Ensure the button is positioned relative to the card wrapper */
  &:hover ${BuyButton} {
    opacity: 1;
  }
`;

// Card component
const Card: React.FC<{ card: CardData }> = ({ card }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <CardWrapper
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && (
          <BuyButton>Buy Now</BuyButton>
        )}
        <CardImage src={card.imageUrl} alt={card.title} />
        <CardTitle>{card.title}</CardTitle>
        <CardDescription>{card.description}</CardDescription>
      </CardWrapper>
    );
  };

// CardList component to render multiple cards
const CardList: React.FC<{ cards: CardData[] }> = ({ cards }) => {
  return (
    <CardContainer>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </CardContainer>
  );
};

// Example usage of CardList component
const App: React.FC = () => {
  return (
    <div>
      <h1>Art for sale</h1>
      <CardList cards={cards} />
    </div>
  );
};

export default App;
