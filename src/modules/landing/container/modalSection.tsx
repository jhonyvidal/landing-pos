import { useState } from "react";
import BaseButton from "../../../components/base/Button";
import { useForm } from "react-hook-form";
import { postCustomer } from "../../../service/modules/customer/customers";


function ModalContainer() {
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
    
    return(     
        <div
            data-aos="fade-right"
            className="col-span-12 lg:col-span-6 mt-4 space-y-6 px-4 item-center"
        >
            <p className="paragraph">
            Registra<span className="text-header-gradient"> Tus datos, Para obtener tus credenciales.</span>
            </p>
            <form  onSubmit={handleSubmit}>
                <div className="space-y-6">
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
                            // ref={inputRef}
                        />
                        <BaseButton  style="w-full px-5 py-4 bg-blue-gradient text-white text-base font-medium">
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
    )

}
export default ModalContainer;