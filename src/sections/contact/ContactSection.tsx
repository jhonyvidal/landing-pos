import BaseButton from "../../components/base/Button";
import BaseSection from "../../components/base/Section";
import { useForm } from 'react-hook-form';
import { postCustomer } from "../../service/modules/customer/customers";
import { useState } from "react";
import type {MaskitoOptions} from '@maskito/core';
import {useMaskito} from '@maskito/react';
import Loading from "../../components/base/Loading";


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
    const [isloading, setIsloading] = useState<boolean>(false);
    

    const {register, formState: {errors}, reset, getValues} = useForm({
     mode: "onChange"
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        setIsloading(true);
        const { name, phone, email, message } = getValues();
        console.log(phone);
        event.preventDefault();
        const responseData = await postCustomer({ nombre:name, telefono: phone, correo: email, negocio:message});
      
        if (responseData.status === 200) {
          setIsloading(false);
          setResponseSuccess(true);
        }else{
          setIsloading(false);
          setResponseError(true);
          setTimeout(() => {
            setResponseError(false);
          }, 3000);
        }
        reset();
      };

    if(isloading){
        return(
            <Loading/>
        )
    }
      

    return(
        <section className="w-full mb-24">
            <BaseSection>
            <div className="header-padding col-span-12 lg:col-span-6 sm:hidden mb-8">
                <div className="w-full">
                <img
                    src={require("../../assets/img/faq_img.png")}
                    className="mt-4 sm:-mt-4"
                    alt=""
                />
                </div>
            </div>
            <div
                data-aos="fade-right"
                className="header-padding col-span-12 lg:col-span-6 mt-4 xl:mt-20 space-y-6 px-4"
            >
                <h2 className="text-4xl font-semibold sm:pr-8 xl:pr-12">
                En pocos minutos<br className="hidden sm:block" />
                Puedes tener tu Demo
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
                                type="number"
                                className="w-full px-2 py-4 sm:py-3 rounded-lg sm:rounded-md text-sm focus:outline-none border border-[#AAAAAA] placeholder-[#888]"
                                placeholder="Ingresa tu teléfono"
                                required
                                {...register('phone', {required: true})}
                                // ref={inputRef}
                            />
                            <BaseButton style="w-full px-5 py-4 bg-blue-gradient text-white text-base font-medium">
                                COMENZAR AHORA
                            </BaseButton>
                            <div className="items-center">
                                {responseSuccess &&
                                    <span className="text-header-gradient">our data has been received successfully. We have contact soon.</span>
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
                className="header-padding col-span-12 lg:col-span-6 hidden sm:block"
                v-bind="$attrs"
            >
                <div className="w-full mt-10">
                <img
                    src={require("../../assets/img/faq_img.png")}
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