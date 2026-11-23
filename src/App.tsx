import './App.css';

const burgers = [
  {
    id: 1,
    name: 'Burger with Lettuce',
    description: 'Smoky BBQ sauce over a juicy beef patty bold, sweet, and irresistibly tasty.',
    price: 95,
    rating: 4,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRYABOBZNDA7p1kCB9fJisTzbYwHpIYG2r0is6TNqdNQ&s=10',
  },
  {
    id: 2,
    name: 'Teriyaki Burger',
    description: 'Savory beef patty coated in delicious teriyaki sauce wonderfully sweet, savory, and full of flavor.',
    price: 85,
    rating: 3,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgxSv76_3d4__bXrCFLvkIdkPVCuFVB0q3pSsvkLJSaQ&s=10',
  },
  {
    id: 3,
    name: 'Cheese Burger',
    description: 'Juicy beef patty with perfectly melted cheese, classic, and always satisfying.',
    price: 95,
    rating: 5,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHmXi18ws8vNJxwV-PyIDrqsZ3shJczekQHjMWnWVRIw&s=10',
  },
   {
    id: 4,
    name: 'Bacon Burger',
    description: 'Savory beef patty stacked with crispy bacon and melted cheese, smoky, and simply mouthwatering',
    price: 99,
    rating: 5,
    image:
      'https://d3bjzufjcawald.cloudfront.net/public/web/2024-03-06/65e82d1f2017d/Menu_Burgers_500x500_BurgerMcDo-500.jpg',
  },
];

export default function App() {
  return (
    <>
      <header className="header">
        <a className="brand" href="#top" aria-label="Tasty Burger home">
          <span className="brand-mark" aria-hidden="true">🍔</span>
          <span> TASTY BURGER </span>
        </a>
        <nav className="navigation" aria-label="Main navigation">
          <a href="#about">ABOUT</a>
          <a href="#menu">OUR MENU</a>
          <a href="#shop">SHOP</a>
          <a href="#contact">CONTACT</a>
          <button className="cart-button" type="button" aria-label="Shopping cart, 2 items">
            <span aria-hidden="true">&#128722;</span>
          </button>
        </nav>
      </header>

      <main className="burger-page" id="top">
        <h1>Our Crazy Burgers</h1>
        <p className="main-subtitle">Savor every bite of our handcrafted burgers made with fresh, quality ingredients., juicy patties, and delicious toppings, crafted just to make your day better!!🍔</p>
        <div className="burger-list" id="menu">
          {burgers.map((burger) => (
            <div key={burger.id} className="burger-card">
              <img src={burger.image} alt={burger.name} className="burger-image" />
              <div className="burger-info">
                <div className="rating-row">
                  <span className="burger-rating">
                        {'★'.repeat(burger.rating)}{'☆'.repeat(5 - burger.rating)}
                  </span>
                </div>
                <h2>{burger.name}</h2>
                <p style={{ flexGrow: 1 }}>{burger.description}</p>
                <div className="burger-meta">
                  <span className="burger-price">${burger.price.toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}