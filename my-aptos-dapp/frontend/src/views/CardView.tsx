import React, { useState } from 'react';
import styled from 'styled-components';

import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";
import img4 from "../../images/img4.png";
import img5 from "../../images/img5.png";

import { useWallet } from "@aptos-labs/wallet-adapter-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Col, Input, Button } from "antd";
import { ABI } from "../abi";
import { useAlert } from "../hooks/alertProvider";
import { provider } from "../utils/consts";
import { Buy } from "../utils/types";

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

type BuyInputProps = {
    setBuyTransactionInProgress: React.Dispatch<React.SetStateAction<boolean>>;
    buys: Buy[];
    setBuys: React.Dispatch<React.SetStateAction<Buy[]>>;
};

// Card component
const Card: React.FC<{ card: CardData } & BuyInputProps > = ({ card, setBuyTransactionInProgress, buys, setBuys }) => {
    const [isHovered, setIsHovered] = useState(false);
    const { account, network, signAndSubmitTransaction } = useWallet();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [artistAddress, setArtistAddress] = useState<string>("");
    const { setSuccessAlertHash } = useAlert();



    const onBuy = async () => {
      // check for connected account
      if (!account) return;

      console.log("buying art");
      setBuyTransactionInProgress(true);
      // hold the latest task.task_id from our local state
  
      // build a newTaskToPush objct into our local state
      const newBuy = {
        address: account.address,
        completed: false,
        artist_addr: account.address,
      };
  
      try {
        // sign and submit transaction to chain
        const response = await signAndSubmitTransaction({
          type: "entry_function_payload",
          function: `${ABI.address}::ArtMarketplace::buy_art`,
          type_arguments: [],
          arguments: [artistAddress],
        });
        // wait for transaction
        await provider.waitForTransaction(response.hash);
        setSuccessAlertHash(response.hash, network?.name);
        // Create a new array based on current state:
        const newBuys = [...buys];
  
        // Add item to the tasks array
        newBuys.push(newBuy);
        // Set state
        setBuys(newBuys);
        // clear input text
        // setNewTask("");
      } catch (error: unknown) {
        console.log("error", error);
      } finally {
        setBuyTransactionInProgress(false);
      }
    };
  
    return (
      <CardWrapper
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && (
          <BuyButton onClick={onBuy}>
            Buy Now
            </BuyButton>
        )}
        <CardImage src={card.imageUrl} alt={card.title} />
        <CardTitle>{card.title}</CardTitle>
        <CardDescription>{card.description}</CardDescription>
      </CardWrapper>
    );
  };

// CardList component to render multiple cards
const CardList: React.FC<{ cards: CardData[] } & BuyInputProps> = ({ cards, setBuyTransactionInProgress, buys, setBuys }) => {
  return (
    <CardContainer>
      {cards.map((card) => (
        <Card key={card.id} card={card} setBuyTransactionInProgress={setBuyTransactionInProgress} buys={buys} setBuys={setBuys}/>
      ))}
    </CardContainer>
  );
};

// Example usage of CardList component
const App: React.FC<{ cards: CardData[] } & BuyInputProps> = ({ cards, setBuyTransactionInProgress, buys, setBuys }) => {
  return (
    <div>
      <h1>Art for sale</h1>
      <CardList cards={cards} setBuyTransactionInProgress={setBuyTransactionInProgress} buys={buys} setBuys={setBuys} />
    </div>
  );
};

export default App;
