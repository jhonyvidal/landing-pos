import BaseSection from "../../components/base/Section";
import BaseAccordion from "../../components/base/Accordion";

function FaqSection() {

    const accordions = [
        {
          title: "Porque deberia escoger Drovi?",
          description:
            "Con nuestro Drovi, transformamos la gestión de tu negocio en una experiencia eficiente y sin complicaciones. Ofrecemos herramientas poderosas que simplifican las operaciones diarias, potencian las ventas y proporcionan insights valiosos. Elije la excelencia, elige Drovi para impulsar tu negocio hacia el éxito.",
        },
        {
          title: "Como Empiezo a usar Drovi",
          description:
            "Es muy sencillo e intuituvo solo debes ingresar usuario, contraseña y nosostros nos encargamos del resto.",
        },
        {
          title: "Metodos de pago?",
          description:
            "Con Drovi puedes realizar ventas por cualquier medio de pago, Efectivo , Trajetas de debito credito y tranferencias.",
        },
        {
          title: "Como reportar un problema?",
          description:
            "Puedes comunicarte con nuestro canal de soporte 3135959528, se te asignara un ticket y en menos de los que imaginas tu problema estara resuelto.",
        },
        {
          title: "Es drovi un sistema confiable?",
          description:
            "Confía en nuestro Drovi, respaldado por una sólida reputación de innovación y compromiso con la excelencia. Garantizamos seguridad, fiabilidad y un soporte excepcional. Convierte tus desafíos en oportunidades y deja que nuestra tecnología confiable potencie tu negocio. La confianza se construye con resultados, y nosotros entregamos resultados excepcionales.",
        },
      ];

    return(
        <section className="w-full my-24">
          <BaseSection>
            <div
              data-aos="fade-right"
              data-aos-delay="150"
              className="col-span-12 lg:col-span-6"
            >
              <div className="w-full">
                <img
                  src={require("../../assets/img/faq_img.png")}
                  className="w-full"
                  alt=""
                />
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="150"
              className="col-span-12 lg:col-span-6 px-4 sm:px-6 mt-8"
            >
              <span className="text-base text-gradient font-semibold uppercase mb-4 sm:mb-2">
                Soporte
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold mb-10 sm:mb-6">
                Preguntas Frecuentes
              </h2>

              <ul className="shadow-box">
                {accordions.map((accordion: any) => {
                  return <BaseAccordion accordion={accordion} />;
                })}
              </ul>
            </div>
          </BaseSection>
        </section>
    )

}
export default FaqSection;