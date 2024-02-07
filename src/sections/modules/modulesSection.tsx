import BaseSection from "../../components/base/Section";
import BaseAccordion from "../../components/base/Accordion";

function ModulesSection() {

    const accordions = [
        {
          title: "Configuraciones",
          description:
            "Permite configurar la informacion de la empresa, de la factura, de los impuestos, de la propina, de las impresoras  y mucho más.",
        },
        {
          title: "Zonas",
          description:
            "Permite configurar las zonas y los precios de los domicios.",
        },
        {
          title: "Usuarios y Roles",
          description:
            "Permite crear, actualizar y asignar permisos a diferentes tipos de usuarios.",
        },
        {
          title: "Categorias?",
          description:
            "Permite crear las categorias de los productos e insumos.",
        },
        {
          title: "Productos e Insumos",
          description:
            "Permite la creacion, actualizacion, eliminacion y generacion de informes de productos.",
        },
        {
          title: "Clientes y Proveedores",
          description:
            "Permite crear, actualizar, eliminar clientes y proveedores",
        },
        {
          title: "Promociones",
          description:
            "Permite la creacion de promociones por categoria o por producto y fechas especificas.",
        },
        {
          title: "Turnos y Cajas",
          description:
            "Permite abrir y cerrar turno, cajas, generar informes y vista detallada de las ventas por turno.",
        },
        {
          title: "Ventas",
          description:
            "Permite crear, actualizar y eliminar ventas, permite adicionar productos a la venta por codigo o por busqueda, permite asignar domicilio y propina.",
        },
        {
          title: "Gastos",
          description:
            "Permite crear, actualizar y eliminar gastos, permite adicionar productos al gasto por codigo o por busqueda.",
        },
        {
          title: "Ordenes y Comandas",
          description:
            "Permite generar ordenes sencillas para las comandas, permite visualizar las comandas generar facturas, hacer cierre de pedido, asignar pedido a cocina, cerrar orden.",
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
                  src={require("../../assets/img/faq.webp")}
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
                más por menos
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold mb-10 sm:mb-6">
               Nuestros Modulos y servicios
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
export default ModulesSection;