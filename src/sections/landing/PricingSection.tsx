import LandingStep from "../../components/landing/Step";

function PricingSection() {

    const steps = [
        {
          img: "sign-up.png",
          title: "Plan Inicial",
          price:"$ 39.900",
          descriptions:[
            "Usuarios Ilimitados",
            "Roles",
            "Ventas",
            "Gastos",
            "Productos",
            "Promociones",
            "Propinas",
            "Carta QR",
          ]
        },
        {
          img: "fund.png",
          title: "Plan Avanzado",
          price:"$ 89.900",
          descriptions:[
            "Incluye plan inicial más",
            "Informes",
            "Graficas",
            "Informes Financieros",
            "Soporte 24/7",
            "Ajustes Personalizados",
          ]
        },
        {
          img: "buy-crypto.png",
          title: "Plan Pro",
          price:"$ 119.900",
          descriptions:[
            "Incluye plan inicial más",
            "Facturacion Electronica",
            "Multiples Cajas",
            "Informes Financieros",
            "Desarrollo personalizado",
          ]
        },
      ];

    return(
        // <section className="bg-trading-tools relative max-w-full sm:mx-4 xl:mx-10 my-24 shadow sm:rounded-2xl overflow-hidden" id="pricingSection">
        <section className="bg-trading-tools relative max-w-full sm:mx-4 xl:mx-10 mb-24 mt-24 shadow sm:rounded-2xl overflow-hidden" id="pricingSection">
          <div className="w-full py-16 flex flex-col items-center">
          <h2
              data-aos="flip-down"
              className="text-3xl sm:text-4xl font-semibold text-center"
          >
              <span className="text-header-gradient">Desde $40.000</span><br></br>
              Empieza en pocos minutos 
              
          </h2>
          <div
              data-aos="fade-up"
              className="relative w-full flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 px-4 xl:px-10 mt-16 sm:mt-8"
          >
              {steps.map((step) => {
              return <LandingStep step={step} />;
              })}
              <img
              src={require("../../assets/img/getting-started/arrow.png")}
              className="hidden lg:inline-block absolute top-32 left-64 xl:left-[22rem] w-24 xl:w-[9.5rem]"
              alt=""
              />
              <img
              src={require("../../assets/img/getting-started/arrow.png")}
              className="hidden lg:inline-block absolute top-32 right-64 xl:right-[22rem] w-24 xl:w-[9.5rem]"
              alt=""
              />
          </div>
          </div>
        </section>
    )
}
export default PricingSection;