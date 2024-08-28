import Footer from "../components/Footer";
import Header from "../components/Header";
import Pricing from "../components/Pricing";

const PricingPage = () => {
  return (
    <>
        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
          <Header/>
          <Pricing/>
          <Footer />
        </div>
    </>
  )
}

export default PricingPage
