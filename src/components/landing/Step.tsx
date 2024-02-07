import React, { useState } from "react";
import LandingListItem from "../../components/landing/ListItem";
import ListItemSingle from "./ListItemSingle";
import BaseButton from "../base/Button";
import Modal from "../base/modal";
import ModalContainer from "../../modules/landing/container/modalSection";

const Step = (props: any) => {

  return (
    <div className="max-w-[280px] xl:max-w-[363px] space-y-6 sm:space-y-3 text-center">
      <img
        src={require(`../../assets/img/getting-started/${props.step.img}`)}
        className="max-w-[245px] mx-auto"
        alt=""
      />
     <h3 className="text-xl text-neutral-800 font-semibold">{props.step.title}</h3>
     <span className="text-header-gradient text-[2.5rem]">{props.step.price}</span>
      <p  className="text-header-gradient" style={{marginTop:'-15px'}}>Por mes</p>  

      <div className="text-sm text-gray-700 leading-relaxed marginList" >
          {props.step.descriptions.map((step:string) => {
            return <ListItemSingle title={step} />;
          })}
      </div> 

      <BaseButton style="w-full px-5 py-4 bg-blue-gradient text-white text-base font-medium">
          Comprar Aquí
      </BaseButton>
    
    </div>
    
  );
};

export default Step;
