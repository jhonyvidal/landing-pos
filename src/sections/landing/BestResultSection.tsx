import BaseButton from "../../components/base/Button";
import BaseSection from "../../components/base/Section";
import LandingExchange from "../../components/landing/Exchange";


function BestResultSection() {

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
        <section className="w-full my-24">
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
                className="col-span-12 lg:col-span-6 mt-4 xl:mt-20 space-y-6 px-4"
            >
                <h2 className="text-4xl font-semibold sm:pr-8 xl:pr-12">
                Obtienes <br className="hidden sm:block" />
                Mejores Resultados
                </h2>
                <p className="paragraph">
                Registra<span className="text-header-gradient"> Ventas, Gastos, Stock e Insumos</span>
                </p>
                <div className="space-y-6 lg:pr-12">
                <LandingExchange
                    title="Amount"
                    name="amount"
                    type="number"
                    defaultValue="5.000"
                    exchangeSelected={currencySelected}
                    exchanges={currencies}
                />
                <LandingExchange
                    title="Get"
                    name="get"
                    type="number"
                    defaultValue="0.10901"
                    exchangeSelected={cryptoSelected}
                    exchanges={cryptocurrencies}
                />
                <BaseButton style="w-full px-5 py-4 bg-blue-gradient text-white text-base font-medium">
                   Comprar Aquí
                </BaseButton>
                </div>
            </div>
            <div
                data-aos="fade-left"
                className="col-span-12 lg:col-span-6 hidden sm:block"
                v-bind="$attrs"
            >
                <div className="w-full">
                <img
                    src={require("../../assets/img/buy-and-trade.webp")}
                    className="mt-4 sm:-mt-4"
                    alt=""
                />
                </div>
            </div>
            </BaseSection>
        </section>
    )
}
export default BestResultSection;