var listings = [
	{ imgUrl: 'img/listings/1.jpg', address: 'Georgian Drive, Barrie', info:"RESIDENTIAL | 3+2 BED | 2 BATH", price: "$ 599,999"},
	{ imgUrl: 'img/listings/2.jpg', address: 'Georgian Drive, Barrie', info:"RESIDENTIAL | 3+2 BED | 2 BATH", price: "$ 599,999"},
	{ imgUrl: 'img/listings/3.jpg', address: 'Georgian Drive, Barrie', info:"RESIDENTIAL | 3+2 BED | 2 BATH", price: "$ 599,999"},
	{ imgUrl: 'img/listings/4.jpg', address: 'Georgian Drive, Barrie', info:"RESIDENTIAL | 3+2 BED | 2 BATH", price: "$ 599,999"},
	{ imgUrl: 'img/listings/5.jpg', address: 'Georgian Drive, Barrie', info:"RESIDENTIAL | 3+2 BED | 2 BATH", price: "$ 599,999"},
	{ imgUrl: 'img/listings/6.jpg', address: 'Georgian Drive, Barrie', info:"RESIDENTIAL | 3+2 BED | 2 BATH", price: "$ 599,999"},
	{ imgUrl: 'img/listings/7.jpg', address: 'Georgian Drive, Barrie', info:"RESIDENTIAL | 3+2 BED | 2 BATH", price: "$ 599,999"},
	{ imgUrl: 'img/listings/8.jpg', address: 'Georgian Drive, Barrie', info:"RESIDENTIAL | 3+2 BED | 2 BATH", price: "$ 599,999"},
	{ imgUrl: 'img/listings/9.jpg', address: 'Georgian Drive, Barrie', info:"RESIDENTIAL | 3+2 BED | 2 BATH", price: "$ 599,999"}
];


window.onload = function(){
  var insertDiv = document.getElementById("listings")
  var htmlContent = "";

  for(var i=0; i<listings.length; i+=1) {
		if(i%3 == 0) {
			htmlContent += '<div class="content">'
		}

		htmlContent += '<div class="card">'
		htmlContent += '<div class="card_side card_front" style="background-image: url(' + listings[i].imgUrl + ');">'
		htmlContent += '</div>'
		htmlContent += '<div class="card_side card_back">'
		htmlContent += '<div class="card_cta">'
		htmlContent += '<h2>' + listings[i].address + '</h2>'
		htmlContent += '<p>' + listings[i].info + '</p>'
		htmlContent += '<h3>' + listings[i].price + '</h3>'
		htmlContent += '</div>'
		htmlContent += '</div>'
		htmlContent += '</div>'

		if(i%3 == 2) {
			htmlContent += '</div>'
		}
	}
	
	// console.log(htmlContent)
	insertDiv.innerHTML = htmlContent;
}