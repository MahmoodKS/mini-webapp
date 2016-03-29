$(document).ready(function(){

  var products = [
    {
      name: 'T-Shirt',
      type: 'Clothes',
      price: '$10',
      description: 'An AbuSamaha trademark. Sizes: s, m, l, xl. Colors: blue, red, white, black.',
      weight: 4,
      color: 'red',
    },
    {
      name: 'TV',
      type: 'Electronics',
      price: '$500',
      description: 'Electronics An AbuSamaha trademark. Sizes: s, m, l, xl. Colors: blue, red, white, black.',
      weight: 100,
      color: 'green'
    },
    {
      name: 'Labtop',
      type: 'Electronics',
      price: '$1000',
      description: 'Labtop An AbuSamaha trademark. Sizes: s, m, l, xl. Colors: blue, red, white, black.',
      weight: 50,
      color: 'green'
    },
    {
      name: 'Cap',
      type: 'Clothes',
      price: '$5',
      description: ' Cap An AbuSamaha trademark. Sizes: s, m, l, xl. Colors: blue, red, white, black.',
      weight: 2,
      color: 'red'
    },
    {
      name: 'Charlie and the Chocolate Factory',
      type: 'Books',
      price: '$15',
      weight: 10,
      description: 'Charli An AbuSamaha trademark. Sizes: s, m, l, xl. Colors: blue, red, white, black.',
      color: 'brown'
    },
    {
      name: 'Need 4 Speed',
      type: 'Games',
      price: '$50',
      description: 'An AbuSamaha trademark. Sizes: s, m, l, xl. Colors: blue, red, white, black.',
      weight: 1,
      games: 'yellow'
    },
    {
      name: 'GTA V',
      type: 'Games',
      price: '$60',
      description: 'An AbuSamaha trademark. Sizes: s, m, l, xl. Colors: blue, red, white, black.',
      weight: 1,
      color: 'yellow'
    },
    {
      name: 'Table',
      type: 'Furniture',
      price: '$75',
      description: 'An AbuSamaha trademark. Sizes: s, m, l, xl. Colors: blue, red, white, black.',
      weight: 70,
      color: 'black'
    }
  ];
  var cart = {};
  var cartIndex = 0;
  var cartCapacity = 5;
  var edge = $('.products').innerWidth();
  var progressWidth = $('.visual-weight').innerWidth();

  var content = function(price, img){
    if(!price)//required
    return "no content!";
    if(!img)//optional, default to x.png
    img = 'x.png';

    return '<span class="product">'+
    '<center><img src="' + img + '" alt="" /></center>'+
    '<center><p class="price">' + price + '</p></center>'+
    '<div class="transparent"></div>'+
    '</span>';
  };

  var typeSpan = function(){
    return '<div class="progress-of-type">5</div>'
  }

  products.forEach(function(value, key){
    $('.items').append(content(value.price));
  });

  $('.product').css({width: edge*0.2, height: edge*0.2});
  $('.transparent').css({marginTop: -edge*0.2});

  $('.product').on('click',function(e){
    var index = $(this).parent().children().index($(this));
    var description = products[index].description;
    $('.description').html(description);
  });

  $('.product').on('dblclick',function(e){
    if(cartIndex >= cartCapacity)//if cart is full in terms of count, just return
    {
      // TODO: take weight into consideration
      return;
    }
    var index = $(this).parent().children().index($(this));
    var product = products[index];
    // TODO: add according to type
    var productType = product.type;
    /*
    Type: Color
    1. Clothes: red;
    2. Electronics: green
    3. Books: yellow
    4. Games: black;
    5. Furniture: brown
    ///////////
    each time we dblclick, we check the type of the product, if the cart has this type previously, we just push to it, else we create this type and push to
    cart = {
    elec: [
    1, 2
      ],
      clothers: [
      1, 2
    ],
    }
    */
switch (productType) {
  case 'Clothes':
  if(!cart.clothes)
  {
    cart.clothes = [];
  }
  cart.clothes.push(index);
  break;
  case 'Electronics':
  if(!cart.electronics)
  {
    cart.electronics = [];
  }
  cart.electronics.push(index);
  break;
  case 'Books':
  if(!cart.books)
  {
    cart.books = [];
  }
  cart.books.push(index);
  break;
  case 'Games':
  if(!cart.games)
  {
    cart.games = [];
  }
  cart.games.push(index);
  break;
  case 'Furniture':
  if(!cart.furniture)
  {
    cart.furniture = [];
  }
  cart.furniture.push(index);
  break;
}
$('.visual-weight').append(typeSpan);
var $thisTypeSpan = $('.visual-weight').children()[cartIndex];
$($thisTypeSpan).css({backgroundColor: product.color});
if(!cartIndex)
$($thisTypeSpan).css({borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px'});
else if(cartIndex == (cartCapacity-1))
$($thisTypeSpan).css({borderTopRightRadius: '10px', borderBottomRightRadius: '10px'});
//add to card as html
$('.progress-of-type').css({width: (progressWidth/cartCapacity)+'px' });
cartIndex++;
console.log(cart);
});

$('.product').hover(function(){
  $($(this).children()[2]).css({opacity: 0.5});
});

$('.product').mouseleave(function(){
  $($(this).children()[2]).css({opacity: 0.0});
});

});
