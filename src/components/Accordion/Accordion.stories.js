import React from "react";
import Accordion from "./Accordion";

export default {
    title:'Form/Accordion',
    component:Accordion
}

const template = (args)=><Accordion {...args}/>


export const DefaultAccordion = template.bind({});
DefaultAccordion.args = {
    active:true
};