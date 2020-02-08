window.onload = function() {
  var owQuotes = [
    "I have the simplest tastes. I am always satisfied with the best.",
    "One of the many lessons that one learns in prison is, that things are what they are and will be what they will be.",
    "The only thing to do with good advice is to pass it on. It is never of any use to oneself.",
    "Man is least himself when he talks in his own person. Give him a mask, and he will tell you the truth.",
    "Experience is simply the name we give our mistakes.",
    "Always forgive your enemies - nothing annoys them so much.",
    "Selfishness is not living as one wishes to live, it is asking others to live as one wishes to live.",
    "Keep love in your heart. A life without it is like a sunless garden when the flowers are dead."
  ];

  const btn = document.getElementById("next");
  const tweetBtn = document.getElementById("tweet-quote");
  var tweet="https://twitter.com/intent/tweet?text="+owQuotes[0]+" --Oscar Wilde"
  btn.onclick = function() {
    document.getElementById("text").innerHTML =
      owQuotes[Math.floor(Math.random() * owQuotes.length)];
      var quoteToTweet=document.getElementById("text").innerHTML;
       tweet = "https://twitter.com/intent/tweet?text="+quoteToTweet+" --Oscar Wilde"

      

     


  };
  tweetBtn.onclick=function(){
    document.getElementById("tweet-quote").href=tweet
  }
};
