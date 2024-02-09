import { useState } from "react";
import BaseButton from "../../components/base/Button";
import BaseSection from "../../components/base/Section";
import LandingExchange from "../../components/landing/Exchange";
import Modal from "../../components/base/modal";
import ModalContainer from "../../modules/landing/container/modalSection";
import TypedComponent from "../../components/landing/Typed";


function BestResultSection() {

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };

    const currencies = [
        {
          img: "country-icon/eng.png",
          name: "USD",
        },
    ];

    const currencySelected = {
        img: "country-icon/eng.png",
        name: "USD",
    };

    const cryptoSelected = {
        img: "crypto-icon/bitcoin.png",
        name: "BTC",
    };

    const cryptocurrencies = [
        {
          img: "crypto-icon/bitcoin.png",
          name: "BTC",
        },
    ];
    

    return(
        // <section className="w-full my-24">
        <section className="mb-24 overflow-hidden">
            <BaseSection>
                <div className="col-span-12 lg:col-span-6 sm:hidden mb-8">
                    <div className="w-full">
                    <img
                        src={require("../../assets/img/buy-and-trade.webp")}
                        className="mt-4 sm:-mt-4"
                        alt=""
                    />
                    </div>
                </div>
                <div
                    data-aos="fade-right"
                    className="col-span-12 lg:col-span-6 mt-4 xl:mt-10 space-y-6 px-4"
                >
                    <h2 className="text-4xl font-semibold sm:pr-8 xl:pr-12">
                    Obtienes Mejores <br  />
                    <span className="text-header-gradient text-3xl md:text-4xl"><TypedComponent type={2}/></span> 
                    </h2>
                    <p className="paragraph">
                    Registra<span className="text-header-gradient"> Ventas, Gastos, Stock e Insumos</span>
                    </p>
                    <div className="space-y-6 lg:pr-12">
                    <p className="paragraph">  
                    Eleva la experiencia de compra con Drovi: Pagos rápidos, programas de fidelidad, y servicio personalizado.
                    </p>
                    <p className="paragraph"> 
                    Impulsa tu tienda con Drovi: Control total de inventario, promociones efectivas, y análisis de ventas.
                    </p>
                    <BaseButton onClick={openModal} style="w-full px-5 py-4 bg-blue-gradient text-white text-base font-medium">
                    Comprar Aquí
                    </BaseButton>
                    </div>
                </div>
                <div
                    data-aos="fade-left"
                    className="col-span-12 lg:col-span-6 hidden sm:block"
                    v-bind="$attrs"
                >
                    <div className="w-full mt-10">
                    <img
                        src={require("../../assets/img/sistema-pos.jpg")}
                        className="mt-4 sm:-mt-4 rounded-lg"
                        alt=""
                    />
                    </div>
                </div>
            </BaseSection>
            <Modal isOpen={modalOpen} onClose={closeModal}>
             <ModalContainer/>
            </Modal>
        </section>
    )
}
export default BestResultSection;