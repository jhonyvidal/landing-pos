import LandingListItem from "../../components/landing/ListItem";

function TicketSection() {
    return(
        // <section className="w-full my-24">
        <section className="w-full mb-24">
            <div className="relative max-w-screen-xl px-8 mx-auto grid grid-cols-12 gap-x-6">
            <div data-aos="fade-right" className="col-span-12 lg:col-span-6">
                <div className="w-full">
                <img
                    src={require("../../assets/img/industry-leading-security.webp")}
                    className="w-full"
                    alt=""
                />
                </div>
            </div>
            <div
                data-aos="fade-left"
                className="col-span-12 lg:col-span-5 space-y-8 sm:space-y-6 mt-8 xl:px-8"
            >
                <h2 className="text-4xl font-semibold">
                Servicio Unico
                </h2>
                <ul className="space-y-8 sm:space-y-4">
                <LandingListItem title="SERVICIO EFICIENTE">
                    <p className="text-sm text-gray-700 leading-relaxed">
                    Carga pedidos y emite comandas en segundos
                    </p>
                </LandingListItem>
                <LandingListItem title="MEJORES RESULTADOS">
                    <p className="text-sm text-gray-700 leading-relaxed">
                    Registra ventas, gastos y stock
                    </p>
                </LandingListItem>
                <LandingListItem title="INFORMACIÓN">
                    <p className="text-sm text-gray-700 leading-relaxed">
                    Obtén información clave para tomar decisiones acertadas.
                    </p>
                </LandingListItem>
                </ul>
            </div>
            </div>
        </section>
    )
}
export default TicketSection;