import React from "react";
import Card from "./Card";
import { withDesign } from 'storybook-addon-designs'

export default {
    title: 'Cards/Card',
    components:Card,
    decorators: [withDesign],
}

const template = (args)=><Card {...args}/>

export const PictureCard = template.bind({});
PictureCard.args = {

}

PictureCard.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/Ypj5QIMe8gCMIzovvAr03i/Tech-Blog-component-collection?node-id=205%3A291',
    },
}