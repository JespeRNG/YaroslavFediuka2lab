 function recognize(){
  var day = parseInt(document.getElementById("day").value);
  var month = parseInt(document.getElementById("month").value); 
  var img = document.getElementById("image");
  var des = document.getElementById("des");
  document.getElementById("div").style="";

  if((month == 1 && day <= 20) || (month == 12 && day >=22)) {
    alert("Capricorn");
    img.src="https://cdn.shopify.com/s/files/1/0519/7573/files/Zodiac_Symbols_Purple-10.png?v=1490217337";
    des.innerHTML="Capricorn is a sign that represents time and responsibility, and its representatives are traditional and often very serious by nature.";
  } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
    alert("aquarius");
    img.src="https://pcvarkr.hs.llnwd.net/v1/pnc/images/sign_aquarius.png";
    des.innerHTML="Aquarius-born are shy and quiet , but on the other hand they can be eccentric and energetic.";
  } else if((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    alert("pisces");
    img.src="https://cdn1.iconfinder.com/data/icons/zodiac-sign-1/92/pisces_zodiac_sign-512.png";
    des.innerHTML="Pisces are very friendly, so they often find themselves in a company of very different people.";
  } else if((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
    alert("aries");
    img.src="https://banner2.kisspng.com/20180712/qgl/kisspng-aries-2014-astrological-sign-zodiac-astrology-aries-sign-5b473134904c18.4179203515313923085911.jpg";
    des.innerHTML="As the first sign in the zodiac, the presence of Aries always marks the beginning of something energetic and turbulent.";
  } else if((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
    alert("taurus");
    img.src="https://cdn1.iconfinder.com/data/icons/zodiac-sign-1/92/taurus_zodiac_sign-512.png";
    des.innerHTML="Practical and well-grounded, Taurus is the sign that harvests the fruits of labor.";
  } else if((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
    alert("gemini");
    img.src="https://cdn1.iconfinder.com/data/icons/zodiac-sign-1/92/gemini_zodiac_sign-512.png";
    des.innerHTML="Expressive and quick-witted, Gemini represents two different personalities in one and you will never be sure which one you will face.";
  } else if((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
    alert("cancer");
    img.src="https://cdn1.iconfinder.com/data/icons/zodiac-sign-1/92/cancer_zodiac_sign-512.png";
    des.innerHTML="Deeply intuitive and sentimental, Cancer can be one of the most challenging zodiac signs to get to know.";
  } else if((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
    alert("leo");
    img.src="https://cdn1.iconfinder.com/data/icons/zodiac-sign-1/90/leo_zodiac_sign-512.png";
    des.innerHTML = "People born under the sign of Leo are natural born leaders.";
  } else if((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
    alert("virgo");
    img.src="https://cdn1.iconfinder.com/data/icons/zodiac-sign-1/92/virgo_zodiac_sign-512.png";
    des.innerHTML="People born under the sign of Libra are peaceful, fair, and they hate being alone.";
  } else if((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
    alert("libra");
    img.src="https://cdn1.iconfinder.com/data/icons/zodiac-sign-1/92/libra_zodiac_sign-512.png";
    des.innerHTML="";
  } else if((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
    alert("scorpio");
    img.src="https://cdn.shopify.com/s/files/1/0519/7573/files/Zodiac_Symbols_Purple-08.png?v=1490214922";
    des.innerHTML="Scorpio-born are passionate and assertive people.";
  } else if((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
    alert("sagittarius");
    img.src="https://cdn1.iconfinder.com/data/icons/zodiac-sign-1/92/sagittarius_zodiac_sign-512.png";
    des.innerHTML="Curious and energetic, Sagittarius is one of the biggest travelers among all zodiac signs.";
  }
}