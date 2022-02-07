import React from "react";
import Input from "./Input";

export default {
    title: 'Form/Input',
    component: Input
}

export const InputSmall = () => <Input inputSize={'inputSmall'} labelText={'Small'}></Input>
export const InputMedium = () => <Input inputSize={'inputMedium'} labelText={'Medium'}></Input>
export const InputLarge = () => <Input inputSize={'inputLarge'} labelText={'Large'}></Input>

// renaming
InputSmall.storyName = 'Small Input'
