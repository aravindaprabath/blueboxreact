import React from "react";
import CardGrid from "./CardGrid";

export default {
    title: 'Cards/CardGrid',
    component: CardGrid
}

// export const CardGriddefault = ()=> <CardGrid/>

const template = (args) => <CardGrid {...args} />

export const DefaultGrid = template.bind({});
DefaultGrid.args = {
    isActive: false
}
