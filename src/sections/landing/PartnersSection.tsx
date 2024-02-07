

function PartnerSection() {
    return(
        // <section className="bg-partner relative max-w-full sm:mx-6 my-24 shadow sm:rounded-2xl overflow-hidden">
        <section className="bg-partner relative max-w-full sm:mx-6 mb-24 mt-24 shadow sm:rounded-2xl overflow-hidden">
          <div className="w-full px-6 sm:px-0 py-16 flex flex-col items-center justify-center space-y-4 text-center">
            <h3
              data-aos="flip-down"
              className="text-2xl text-neutral-800 font-semibold"
            >
              Nuestros Aliados
            </h3>
            <p data-aos="flip-down" className="paragraph">
              Mas de 15.000 empresas nos prefieren 
            </p>
            <div
              data-aos="fade-up"
              className="flex flex-wrap items-center justify-center"
            >
              {[
                "clever.png",
                "diamon-cutts.png",
                "swiss-finance.png",
                "gambio.png",
              ].map((img) => {
                return (
                  <img
                    src={require(`../../assets/img/partner/${img}`)}
                    className="sm:w-1/2 lg:w-72 mx-auto"
                    alt=""
                  />
                );
              })}
            </div>
          </div>
        </section>
    )
}
export default PartnerSection;