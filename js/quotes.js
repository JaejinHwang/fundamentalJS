const quoteList = [
    {
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "That which does not kill us makes us stronger.",
        author: "Friedrich Nietzsche",
    },
    {
        quote: "Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.",
        author: "Bernard M. Baruch",
    },
    {
        quote: "We must not allow other people’s limited perceptions to define us.",
        author: "Virginia Satir",
    },
    {
        quote: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt",
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
    },
    {
        quote: "This above all: to thine own self be true.",
        author: "William Shakespeare",
    },
    {
        quote: "If you cannot do great things, do small things in a great way.",
        author: "Napoleon Hill",
    },
    {
        quote: "If opportunity doesn’t knock, build a door.",
        author: "Milton Berle",
    },
    {
        quote: "Wise men speak because they have something to say; fools because they have to say something.",
        author: "Plato",
    },
];

const quoteSpace = document.querySelector("#quotes span:first-child");
const authorSpace = document.querySelector("#quotes span:last-child");

const serendipityQuote = quoteList[Math.floor(Math.random() * quoteList.length)];

quoteSpace.innerText = serendipityQuote.quote;
authorSpace.innerText = serendipityQuote.author;