import BaseButton from "../../components/base/Button";
import BaseSection from "../../components/base/Section";
import { useForm } from 'react-hook-form';
import { postCustomer } from "../../service/modules/customer/customers";
import { useState } from "react";
import type {MaskitoOptions} from '@maskito/core';
import {useMaskito} from '@maskito/react';


const digitsOnlyMask: MaskitoOptions = {
    mask: [
        ...Array(3).fill(/\d/),
        ' ',
        ...Array(3).fill(/\d/),
        ' ',
        ...Array(2).fill(/\d/),
        ' ',
        ...Array(2).fill(/\d/),
    ]
};

function ContactSection() {
    const inputRef = useMaskito({options: digitsOnlyMask});

    const [responseSuccess, setResponseSuccess] = useState<boolean>(false);
    const [responseError, setResponseError] = useState<boolean>(false);

    const {register, formState: {errors}, reset, getValues} = useForm({
     mode: "onChange"
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

        const { name, phone, email, message } = getValues();
        const formDataContact = { name, phone, email, message }
        console.log(formDataContact);
        
        event.preventDefault();
        const responseData = await postCustomer(formDataContact);
      
        if (responseData.status === 201) {
          setResponseSuccess(true);
          setTimeout(() => {
            setResponseSuccess(false);
          }, 3000);
        }else{
          setResponseError(true);
          setTimeout(() => {
            setResponseError(false);
          }, 3000);
        }
        reset();
      };
      

    return(
        <section className="w-full my-0">
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
                En pocos minutos<br className="hidden sm:block" />
                Puedes probar Drovi
                </h2>
                <p className="paragraph">
                Registra<span className="text-header-gradient"> Tus datos, obtendras una prueba gratuita por 15 dias</span>
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-6 lg:pr-12">
                            <label >Nombre</label>
                            <input
                                style={{ marginTop: '3px', marginBottom:'10px' }}
                                type="text" 
                                minLength={5}
                                className="w-full px-2 py-4 sm:py-3 rounded-lg sm:rounded-md text-sm focus:outline-none border border-[#AAAAAA] placeholder-[#888]"
                                placeholder="Ingresa tu nombre"
                                required
                                {...register('name', {required: true})}
                            />
                            <label >Negocio</label>
                            <input
                                style={{ marginTop: '3px', marginBottom:'10px'}}
                                type="text"
                                className="w-full px-2 py-4 sm:py-3 rounded-lg sm:rounded-md text-sm focus:outline-none border border-[#AAAAAA] placeholder-[#888]"
                                placeholder="Ingresa tu negocio"
                                required
                                {...register('message', {required: true})}
                            />
                            <label >Email</label>
                            <input
                                style={{ marginTop: '3px', marginBottom:'10px'}}
                                type="email"
                                className="w-full px-2 py-4 sm:py-3 rounded-lg sm:rounded-md text-sm focus:outline-none border border-[#AAAAAA] placeholder-[#888]"
                                placeholder="Ingresa tu correo"
                                required
                                {...register('email', {required: true})}
                            />
                            <label >Teléfono</label>
                            <input
                                style={{ marginTop: '3px', marginBottom:'10px'}}
                                minLength={13}
                                type="text"
                                className="w-full px-2 py-4 sm:py-3 rounded-lg sm:rounded-md text-sm focus:outline-none border border-[#AAAAAA] placeholder-[#888]"
                                placeholder="Ingresa tu teléfono"
                                required
                                {...register('phone', {required: true})}
                                ref={inputRef}
                            />
                            <BaseButton style="w-full px-5 py-4 bg-blue-gradient text-white text-base font-medium">
                                COMENZAR AHORA
                            </BaseButton>
                            <div className="items-center">
                                {responseSuccess &&
                                    <span className="text-header-gradient">Tus datos, fueron recibidos exitosamente a tu correo te enviaremos el link</span>
                                }
                                {responseError &&
                                    <span className="text-header-red ">Ha occurido un error</span>
                                }
                            </div>
                    </div>
                </form>
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
export default ContactSection;