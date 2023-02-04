const products = [
  {
    name: 'Cupcake 1',
    image: '/images/Cupcake-1.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor ipsum lectus, eget viverra neque semper at. In ac sodales leo, eget bibendum dolor. Donec accumsan erat sed lorem suscipit viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat.',
    category: 'Cake',
    price: 80.88,
    countInStock: 15,
    rating: 2.5,
    numberReviews: 10,
  },
  {
    name: 'Cupcake 2',
    image: '/images/Cupcake-2.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor ipsum lectus, eget viverra neque semper at. In ac sodales leo, eget bibendum dolor. Donec accumsan erat sed lorem suscipit viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat.',
    category: 'Cake',
    price: 80.88,
    countInStock: 10,
    rating: 3.5,
    numberReviews: 10,
  },
  {
    name: 'Cupcake 2',
    image: '/images/Cupcake-3.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor ipsum lectus, eget viverra neque semper at. In ac sodales leo, eget bibendum dolor. Donec accumsan erat sed lorem suscipit viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat.',
    category: 'Cake',
    price: 80.88,
    countInStock: 0,
    rating: 4.5,
    numberReviews: 6,
  },
  {
    name: 'Cupcake 3',
    image: '/images/Cupcake-4.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor ipsum lectus, eget viverra neque semper at. In ac sodales leo, eget bibendum dolor. Donec accumsan erat sed lorem suscipit viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat.',
    category: 'Cake',
    price: 80.88,
    countInStock: 8,
    rating: 4,
    numberReviews: 180,
  },
  {
    name: 'Cupcake 4',
    image: '/images/Cupcake-5.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor ipsum lectus, eget viverra neque semper at. In ac sodales leo, eget bibendum dolor. Donec accumsan erat sed lorem suscipit viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat.',
    category: 'Cake',
    price: 30.88,
    countInStock: 8,
    rating: 3.5,
    numberReviews: 0,
  },
  {
    name: 'Cupcake 5',
    image: '/images/Cupcake-6.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor ipsum lectus, eget viverra neque semper at. In ac sodales leo, eget bibendum dolor. Donec accumsan erat sed lorem suscipit viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat.',
    category: 'Cake',
    price: 50.88,
    countInStock: 3,
    rating: 4,
    numberReviews: 14,
  },
  {
    name: 'Cake 1',
    image: '/images/Cake-1.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor ipsum lectus, eget viverra neque semper at. In ac sodales leo, eget bibendum dolor. Donec accumsan erat sed lorem suscipit viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat.',
    category: 'Cake',
    price: 50.88,
    countInStock: 3,
    rating: 4,
    numberReviews: 14,
  },
  {
    name: 'Cake 2',
    image: '/images/Cake-2.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor ipsum lectus, eget viverra neque semper at. In ac sodales leo, eget bibendum dolor. Donec accumsan erat sed lorem suscipit viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat.',
    category: 'Cake',
    price: 50.88,
    countInStock: 3,
    rating: 4,
    numberReviews: 14,
  },
  {
    name: 'Cake 3',
    image: '/images/Cake-3.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor ipsum lectus, eget viverra neque semper at. In ac sodales leo, eget bibendum dolor. Donec accumsan erat sed lorem suscipit viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat.',
    category: 'Cake',
    price: 50.88,
    countInStock: 3,
    rating: 4,
    numberReviews: 14,
  },
  {
    name: 'Cake 4',
    image: '/images/Cake-4.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor ipsum lectus, eget viverra neque semper at. In ac sodales leo, eget bibendum dolor. Donec accumsan erat sed lorem suscipit viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat.',
    category: 'Cake',
    price: 50.88,
    countInStock: 3,
    rating: 4,
    numberReviews: 14,
  },
  {
    name: 'Cake 5',
    image: '/images/Cake-5.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor ipsum lectus, eget viverra neque semper at. In ac sodales leo, eget bibendum dolor. Donec accumsan erat sed lorem suscipit viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat.',
    category: 'Cake',
    price: 50.88,
    countInStock: 3,
    rating: 4,
    numberReviews: 14,
  },
  {
    name: 'Cake 6',
    image: '/images/Cake-6.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor ipsum lectus, eget viverra neque semper at. In ac sodales leo, eget bibendum dolor. Donec accumsan erat sed lorem suscipit viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat.',
    category: 'Cake',
    price: 50.88,
    countInStock: 3,
    rating: 4,
    numberReviews: 14,
  },
  {
    name: 'Cake 7',
    image: '/images/Cake-7.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor ipsum lectus, eget viverra neque semper at. In ac sodales leo, eget bibendum dolor. Donec accumsan erat sed lorem suscipit viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat.',
    category: 'Cake',
    price: 50.88,
    countInStock: 3,
    rating: 4,
    numberReviews: 14,
  },
  {
    name: 'Cake 8',
    image: '/images/Cake-8.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor ipsum lectus, eget viverra neque semper at. In ac sodales leo, eget bibendum dolor. Donec accumsan erat sed lorem suscipit viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat.',
    category: 'Cake',
    price: 50.88,
    countInStock: 3,
    rating: 4,
    numberReviews: 14,
  },
];

export default products;
