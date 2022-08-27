const quotes = [
    {
      quote: "He is richest who is content with the least.",
      author: "Socrates",
    },
    {
      quote: "Do not do to others what angers you if done to you by others.",
      author: "Socrates",
    },
    {
      quote: "Get not your friends by bare compliments, but by giving them sensible tokens of your love.",
      author: "Socrates",
    },
    {
      quote: "Think not those faithful who praise all your words and actions; but those who kindly reprove your faults.",
      author: "Socrates",
    },
    {
      quote: "If a man is proud of his wealth, he should not be praised until it is known how he employs it.",
      author: "Socrates",
    },
    {
      quote: "The unexamined life is not worth living.",
      author: "Socrates",
    },    
    {
      quote: "True knowledge exists in knowing that you know nothing.",
      author: "Socrates",
    },
    {
      quote: "Convictions are the more dangerous enemy of truth than lies.",
      author: "Friedrich Nietzsche",
    },
    {
      quote: "One repays a teacher badly if one always remains nothing but a pupil.",
      author: "Friedrich Nietzsche",
    },
    {
      quote: "The real world is much smaller than the imaginary.",
      author: "Friedrich Nietzsche",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;