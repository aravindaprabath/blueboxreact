import React from 'react';
import Button from '../buttons/Button';
import {InputSmall} from '../Inputs/Input.stories';

export default {
    title: 'Form/Subscription Form'
}

export const SubscriptionForm = (props) => {
    return (
        <div>
            <InputSmall/>
            <Button children='Subscribe'/>
        </div>
    )
}