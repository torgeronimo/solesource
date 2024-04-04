import { Nav, Hero, CustomerReviews, PopularProduct, Services, SpecialOffer, SuperQuality, Footer, Subscribe } from './sections';

const App = () => (
  <main className="relative">
    <Nav></Nav>
    {/* <section className="xl:padding-1 wide:padding-r padding-b">  */}
    <section className=""> 
      <Hero></Hero>
    </section>
    <section className="padding">
      <PopularProduct></PopularProduct>
    </section>
    <section className="padding">
      <SuperQuality></SuperQuality>
    </section>
    <section className="padding-x py-10">
      <Services></Services>
    </section>
    <section className="padding">
      <SpecialOffer></SpecialOffer>
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReviews></CustomerReviews>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe></Subscribe>
    </section>
    <section className="padding-x padding-t pb-8 bg-black">
      <Footer></Footer>
    </section>
  </main>
)

export default App;