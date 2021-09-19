import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [denotes, setDenotes] = useState("");

  var emojiDictionary = {
    "🍇": "Grapes",
    "🍈": "Melon",
    "🍉": "Watermelon",
    "🍊": "Tangerine",
    "🍋": "Lemon",
    "🍌": "Banana",
    "🍍": "Pineapple",
    "🥭": "Mango",
    "🍎": "Red Apple",
    "🍏": "Green Apple",
    "🍐": "Pear",
    "🍑": "Peach",
    "🍒": "Cherries",
    "🍓": "Strawberry",
    "🥝": "Kiwi Fruit",
    "🍅": "Tomato",
    "🥞": "Pancakes",
    "🧇": "Waffle",
    "🧀": "Cheese Wedge",
    "🍖": "Meat on Bone",
    "🍗": "Poultry Leg",
    "🥩": "Cut of Meat",
    "🥓": "Bacon",
    "🍔": "Hamburger",
    "🍟": "French Fries",
    "🍕": "Pizza",
    "🌭": "Hot Dog",
    "🥪": "Sandwich",
    "🌮": "Taco",
    "🌯": "Burrito",
    "🥙": "Stuffed Flatbread",
    "🧆": "Falafel",
    "🥚": "Egg",
    "🍳": "Cooking",
    "🥘": "Shallow Pan of Food",
    "🍲": "Pot of Food",
    "🥣": "Bowl with Spoon",
    "🥗": "Green Salad",
    "🍿": "Popcorn",
    "🧈": "Butter",
    "🧂": "Salt",
    "🥫": "Canned Food",
    "🍱": "Bento Box",
    "🍘": "Rice Cracker",
    "🍙": "Rice Ball",
    "🍚": "Cooked Rice",
    "🍛": "Curry Rice",
    "🍜": "Steaming Bowl",
    "🍝": "Spaghetti",
    "🍠": "Roasted Sweet Potato",
    "🍢": "Oden",
    "🍣": "Sushi",
    "🍤": "Fried Shrimp",
    "🍥": "Fish Cake with Swirl",
    "🥮": "Moon Cake",
    "🍡": "Dango",
    "🥟": "Dumpling",
    "🥠": "Fortune Cookie",
    "🥡": "Takeout Box",
    "🦪": "Oyster",
    "🍦": "Soft Ice Cream",
    "🍧": "Shaved Ice",
    "🍨": "Ice Cream",
    "🍩": "Doughnut",
    "🍪": "Cookie",
    "🎂": "Birthday Cake",
    "🍰": "Shortcake",
    "🧁": "Cupcake",
    "🥧": "Pie",
    "🍫": "Chocolate Bar",
    "🍬": "Candy",
    "🍭": "Lollipop",
    "🍮": "Custard",
    "🍯": "Honey Pot"
  };

  var emojiWeKnow = Object.keys(emojiDictionary);

  function inputChangeHandler(event) {
    var userEmojiInput = event.target.value;
    var denotes = emojiDictionary[userEmojiInput];
    setDenotes(denotes);
  }

  function emojiClickHandler(emoji) {
    var denotes = emojiDictionary[emoji];
    setDenotes(denotes);
  }
  return (
    <div className="App">
      <h1>Food Emoji Dictionary</h1>
      <h2>Select/Enter a Food Emoji</h2>
      <input
        onChange={inputChangeHandler}
        placeholder={"Enter Your Emoji"}
        style={{ width: "80%", height: "3rem", fontSize: "2rem" }}
      ></input>
      <div
        style={{
          margin: "1rem",
          padding: "1rem",
          fontSize: "2rem",
          backgroundColor: "gray",
          color: "#bad80a",
          border: "1px solid"
        }}
      >
        Denotes : {denotes}
      </div>
      <h2>Click on you choice :</h2>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            key={emoji}
            style={{ padding: "1rem", fontSize: "2.5rem", cursor: "pointer" }}
            onClick={() => emojiClickHandler(emoji)}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
