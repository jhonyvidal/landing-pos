import BaseButton from "../../components/base/Button";
import BaseSection from "../../components/base/Section";
import LandingListItem from "../../components/landing/ListItem";

function CartOnlineSection() {

    return(
        <section className="w-full my-36">
        <BaseSection data-aos="fade-down">
        <div className="col-span-12 lg:col-span-7">
            <div className="w-full">
            <img
                src={require("../../assets/img/nefa-cc.webp")}
                className="w-[95%]"
                alt=""
            />
            </div>
        </div>
        <div className="col-span-12 lg:col-span-5 space-y-6 px-4 sm:px-6 mt-20">
            <h2 className="text-4xl font-semibold">
            Venta{" "}
            <span className="text-header-gradient">Online</span> Actualizate
            </h2>
            <p className="paragraph">
            Recibe pedidos a través de nuestros canales de venta en línea:
            </p>
            <ul className="space-y-4 sm:space-y-2">
            <LandingListItem title="Menu en linea">
                {" "}
            </LandingListItem>
            <LandingListItem title="Carta Por QR">
                {" "}
            </LandingListItem>
            <LandingListItem title="Api para integraciones"> </LandingListItem>
            </ul>
            <BaseButton style="w-full sm:max-w-[240px] px-10 py-4 bg-inherit text-gradient border border-[#0c66ee] text-base">
             Pruebalo Gratis
            </BaseButton>
        </div>
        </BaseSection>
        </section>
    )
}
export default CartOnlineSection;