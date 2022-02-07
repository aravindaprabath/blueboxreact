import React from 'react';
import Button from './Button';
import Centerv from "../centerutlt/Centerv";
import { withDesign } from 'storybook-addon-designs'


export default {
    title: 'Form/Button',
    component: Button,
    decorators: [withDesign],
    args: {
        children: 'BUTTON'
    }
}


// arg mechanism
const TemplateLeft = (args) => <Button {...args} />
// button centered
const Template = (args) => <Centerv><Button  {...args} /></Centerv>

export const CenterAligned = Template.bind({});
CenterAligned.args = {
    variant: 'primary',
}

export const FullWidth = Template.bind({});
FullWidth.args = {
    variant: 'primary',
    fullWidthButton:true
}

// export const Secondary = Template.bind({});
// Secondary.args = {
//     variant: 'secondary',
// }
//
// export const Success = Template.bind({});
// Success.args = {
//     variant: 'success',
// }

export const LeftAligned = TemplateLeft.bind({})
LeftAligned.args = {
    variant: 'danger',
}

CenterAligned.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/Ypj5QIMe8gCMIzovvAr03i/Tech-Blog-component-collection?node-id=205%3A288',
    },
}

FullWidth.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/Ypj5QIMe8gCMIzovvAr03i/Tech-Blog-component-collection?node-id=312%3A8',
    },
}

