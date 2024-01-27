import React from "react";
import LandingListItem from "../../components/landing/ListItem";
import ListItemSingle from "./ListItemSingle";
import BaseButton from "../base/Button";

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
      <p className="text-sm text-gray-700 leading-relaxed ">
      <ListItemSingle title= {props.step.description1}/>
      <ListItemSingle title= {props.step.description2}/>
      <ListItemSingle title= {props.step.description3}/>
      <ListItemSingle title= {props.step.description4}/>
      <ListItemSingle title= {props.step.description5}/>
      </p> 
      <BaseButton style="w-full px-5 py-4 bg-blue-gradient text-white text-base font-medium">
          Comprar Aquí
      </BaseButton>
    </div>
    
  );
};

export default Step;
