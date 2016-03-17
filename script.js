$(document).ready(function(){
  var products = [
    {
      name: 'T-Shirt',
      type: 'Clothes',
      price: '$10',
      description: 'An AbuSamaha trademark. Sizes: s, m, l, xl. Colors: blue, red, white, black.',
      weight: 4,
    },
    {
      name: 'TV',
      type: 'Electronics',
      price: '$500',
      description: 'An AbuSamaha trademark. Sizes: s, m, l, xl. Colors: blue, red, white, black.',
      weight: 100,
    },
    {
      name: 'Labtop',
      type: 'Electronics',
      price: '$1000',
      description: 'An AbuSamaha trademark. Sizes: s, m, l, xl. Colors: blue, red, white, black.',
      weight: 50,
    },
    {
      name: 'Cap',
      type: 'Clothes',
      price: '$5',
      description: 'An AbuSamaha trademark. Sizes: s, m, l, xl. Colors: blue, red, white, black.',
      weight: 2,
    },
    {
      name: 'Charlie and the Chocolate Factory',
      type: 'Books',
      price: '$15',
      weight: 10,
      description: 'An AbuSamaha trademark. Sizes: s, m, l, xl. Colors: blue, red, white, black.',
    },
    {
      name: 'Need 4 Speed',
      type: 'Games',
      price: '$50',
      description: 'An AbuSamaha trademark. Sizes: s, m, l, xl. Colors: blue, red, white, black.',
      weight: 1,
    },
    {
      name: 'GTA V',
      type: 'Games',
      price: '$60',
      description: 'An AbuSamaha trademark. Sizes: s, m, l, xl. Colors: blue, red, white, black.',
      weight: 1,
    },
    {
      name: 'Table',
      type: 'Furniture',
      price: '$75',
      description: 'An AbuSamaha trademark. Sizes: s, m, l, xl. Colors: blue, red, white, black.',
      weight: 70,
    }
  ];

  products.forEach(function(value, key){
    $('.items').append('<span class="product"><img src="" alt="" /><span class="transparent"></span><p class="price">'+value.price+'</p></span>');
  });

  $('.product').on('click',function(e){
    console.log('hi');
  });

  //
  // <span class="product">
  //   <img src="" alt="" />
  //   <span class="transparent"></span>
  //   <p class="price"></p>
  // </span>

});
