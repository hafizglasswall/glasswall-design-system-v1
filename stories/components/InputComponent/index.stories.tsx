import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { InputComponent } from './';

export default {
    title: 'Components/Icons/InputComponent',
    component: InputComponent,
    args: {
        label: 'inputElement',
        placeholder: 'Enter job name',
        size: 'small',
    },
    argTypes: {
        size: { control: 'radio', options: ['small', 'medium'] },
    },
} as ComponentMeta<typeof InputComponent>;

const Template: ComponentStory<typeof InputComponent> = (args) => {
    const [localValue, setLocalValue] = useState<string>('');
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        setLocalValue(event.target.value);
    };
    return (
        <InputComponent
            {...args}
            value={localValue}
            handleInputChange={handleInputChange}
        />
    );
};

export const InputElement = Template.bind({});
// InputElement.args = {
//     label: 'inputElement',
//     value: localValue,
//     placeholder: 'Enter job name',
//     size: 'small',
// };
