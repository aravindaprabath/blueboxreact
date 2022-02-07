import React from "react";
import Header from "./Header";

export default {
    title: 'Form/Header',
    component: Header
}

const template = (args) => <Header {...args}/>;

export const MainHeader = template.bind({});
MainHeader.args = {
    userLogged: false,
}