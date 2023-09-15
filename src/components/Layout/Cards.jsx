import React from "react";
import { useState, useEffect } from "react";
import CardData from "../api/cards.json";

function Cards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    return setCards(CardData);
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3  grid-cols-1 gap-x-4 my-10">
        {cards.length &&
          cards.map((card, index) => (
            <div className="bg-white p-10 rounded-lg shadow-md flex flex-col items-center justify-center md:hover:scale-105">
              <img
                className="w-[150px] h-[150px] mb-4"
                src={card.image}
                alt=""
              ></img>
              <h2 className="text-lg font-semibold text-primary-brand-color">
                {card.title}
              </h2>
              <p className="text-sm text-gray-800"> {card.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
export default Cards;
