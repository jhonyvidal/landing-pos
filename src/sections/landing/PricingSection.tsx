import LandingStep from "../../components/landing/Step";

function PricingSection() {

    const steps = [
        {
          img: "sign-up.png",
          title: "Plan Inicial",
          price:"$ 59.900",
          description1:
            "Hasta 5 Usuarios",
          description2:
            "Clientes Ilimitados",
          description3:
            "Proveedores Ilimitados",
          description4:
            "Ventas Ilimitadas",
          description5:
            "Turnos Ilimitados",
        },
        {
          img: "fund.png",
          title: "Plan Avanzado",
          price:"$ 89.900",
          description1:
            "Hasta 10 Usuarios",
          description2:
            "Clientes Ilimitados",
          description3:
            "Proveedores Ilimitados",
          description4:
            "Ventas Ilimitadas",
          description5:
            "Turnos Ilimitados",
        },
        {
          img: "buy-crypto.png",
          title: "Plan Pro",
          price:"$ 120.000",
          description1:
            "Hasta Ilimitados",
          description2:
            "Clientes Ilimitados",
          description3:
            "Proveedores Ilimitados",
          description4:
            "Ventas Ilimitadas",
          description5:
            "Turnos Ilimitados",
        },
      ];

    return(
        <section className="bg-trading-tools relative max-w-full sm:mx-4 xl:mx-10 my-24 shadow sm:rounded-2xl overflow-hidden">
        <div className="w-full py-16 flex flex-col items-center">
        <h2
            data-aos="flip-down"
            className="text-3xl sm:text-4xl font-semibold text-center"
        >
            <span className="text-header-gradient">Desde $59.900</span><br></br>
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