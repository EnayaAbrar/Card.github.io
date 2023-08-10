const quotes = [
    {
        saying: "The world can be an insane place to live in. However, sanity can be brought in with friends. When there is loyalty and sincerity in their bonds, they make life easier for us to deal with"
    },
    {
        saying: "It is easier to lie than to be truthful. Only true friends would want to be honest with you. This is because they care for you and trust you enough to help you out for your good."
    },
    {
        saying: "Friendship isn’t about being inseparable, but about being separated and knowing nothing will change"
    },
    {
        saying: "Some people are worth melting for"
    },
    {
        saying: "Well, maybe sometimes it’s easier to be mad at the people you trust. Because you know they’ll always love you, no matter what"
    }
];

const quoteContainer = document.getElementById('quote-container');
const quoteImg = document.getElementById('quote-img');
const quoteText = document.getElementById('quote');

function generateRandomQuote() {
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[quoteIndex];

    quoteText.textContent = randomQuote.saying;
    quoteImg.src = `images/image${quoteIndex + 1}.png`;
}

const newQuoteBtn = document.getElementById('new-quote-btn');
newQuoteBtn.addEventListener('click', generateRandomQuote);

generateRandomQuote();
