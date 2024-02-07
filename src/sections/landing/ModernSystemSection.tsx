import BaseButton from "../../components/base/Button";

function ModernSystemSection() {

    const openWP = () => {
        window.open("https://api.whatsapp.com/send?phone=+573135959528", "_blank");
    }
    
    return(
        // <section className="bg-trading-tools relative max-w-full sm:mx-4 my-20 py-16 shadow rounded-2xl overflow-hidden">
        <section className="bg-trading-tools relative max-w-full sm:mx-4 mb-24 mt-24 py-16 shadow rounded-2xl overflow-hidden">
        <div className="relative max-w-screen-xl px-4 sm:px-2 mx-auto grid grid-cols-12 gap-x-6">
        <div className="col-span-12 lg:col-span-6 sm:hidden">
            <div className="w-full sm:mt-20 xl:mt-0">
            <img
                src={require(`../../assets/img/advanced-trading-tools.webp`)}
                className="w-full"
                alt=""
            />
            </div>
        </div>
        <div
            data-aos="fade-right"
            className="col-span-12 lg:col-span-6 space-y-8 sm:space-y-6 px-4 sm:px-6 mt-8"
        >
            <h2 className="text-4xl font-semibold">
            Un Sistema {" "}
            <span className="text-header-gradient">Moderno</span>
            </h2>
            <div className="space-y-2">
            <h4 className="text-lg font-medium">
                Simple y Sencillo
            </h4>
            <p className="paragraph text-sm xl:text-base">
                Ofrecemos una interfaz moderna, amigable y fácil de usar
            </p>
            </div>
            <div className="space-y-2">
            <h4 className="text-lg font-medium">
                Flexible
            </h4>
            <p className="paragraph text-sm xl:text-base">
                Somos Multi Dispositivo Windows, MAC o Linux, 100% Responsive.
            </p>
            </div>
            <div className="space-y-2">
            <h4 className="text-lg font-medium">On-line</h4>
            <p className="paragraph text-sm xl:text-base">
            ¡No tienes que instalar ningún programa! Ingresa desde cualquier lugar, en cualquier momento y mediante cualquier dispositivo
            Disponible 24/7.
            </p>
            </div>
            <div className="space-y-2">
            <h4 className="text-lg font-medium">Negocio en movimiento</h4>
            <p className="paragraph text-sm xl:text-base">
            Nuestro POS móvil te permite vender donde quieras, cuando quieras
            </p>
            </div>
            <div className="flex flex-col sm:flex-row">
            <BaseButton  onClick={openWP} style="px-10 py-4 bg-inherit text-gradient border border-[#4A8FF6] text-base">
                Empezar Ahora
            </BaseButton>
            <BaseButton style="bg-inherit text-[#4A8FF6] px-10 py-4 text-center underline rounded-full hover:shadow-none">
                Ver Más
            </BaseButton>
            </div>
        </div>
        <div
            data-aos="fade-left"
            className="col-span-12 lg:col-span-6 hidden sm:block"
        >
            <div className="w-full sm:mt-20 xl:mt-0">
            <img
                src={require(`../../assets/img/advanced-trading-tools.webp`)}
                className="w-full"
                alt=""
            />
            </div>
        </div>
        </div>
        </section>
    )
}
export default ModernSystemSection;