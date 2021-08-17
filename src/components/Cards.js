import "../styles/cards.scss";
import Stories from "./Stories";
import Card from "./Card";
import React from 'react';

function Cards() {
  const commentsOne = [
    {
      user: "Kabali",
      text: "Woah dude, this is awesome! 🔥",
      id: 1,
    },
    {
      user: "Ragupathi",
      text: "Like!",
      id: 2,
    },
    {
      user: "Rajenderan",
      text: "Niceeeee!",
      id: 3,
    },
  ];

  const commentsTwo = [
    {
      user: "Durai Kannu",
      text: "Amazing content, keep it up!",
      id: 4,
    },
  ];

  const commentsThree = [
    {
      user: "Ramesh",
      text: "Love this!",
      id: 5,
    },
  ];

  return (
    <div className="cards">
      <Stories />

      <Card
        accountName="john cena"
        storyBorder={true}
        image="https://picsum.photos/800/900"
        comments={commentsOne}
        likedByText="dadatlacak"
        likedByNumber={89}
        hours={16}
      />
      <Card
        accountName="i am legend"
        image="https://picsum.photos/800"
        comments={commentsTwo}
        likedByText="therealadamsavage"
        likedByNumber={47}
        hours={12}
      />
      <Card
        accountName="Tentacle"
        storyBorder={true}
        image="https://picsum.photos/800/1000"
        comments={commentsThree}
        likedByText="mapvault"
        likedByNumber={90}
        hours={4}
      />
    </div>
  );
}

export default Cards;
