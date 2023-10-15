import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { expect } from '@storybook/jest';
import { FormInput } from '.';
import { formItems } from '../../constants/cleanFIlesFormItems';
import { within } from '@storybook/testing-library';

export default {
    title: 'Components/Form/FormInputElement',
    component: FormInput,
    args: {
        label: formItems.jobName.name,
        ariaLabel: formItems.jobName.ariaLabel,
        tooltipTitle: formItems.jobName.tooltipText,
        tooltipButtonTitle: formItems.jobName.tooltipButtonTitle,
        placeholder: formItems.jobName.placeHolder,
        required: formItems.jobName.required,
        disabled: false,
        size: 'small',
        error: false,
        errorMsg: 'Error Occurred',
    },
    argTypes: {
        size: { control: 'radio', options: ['small', 'medium'] },
        tooltipButtonTitle: {
            control: false,
        },
        value: {
            control: false,
        },
    },
} as ComponentMeta<typeof FormInput>;

export const FormInputElement: ComponentStory<typeof FormInput> = (args) => {
    const [localValue, setLocalValue] = useState<string>('');
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocalValue(event.target.value);
    };
    return (
        <FormInput
            {...args}
            value={localValue}
            handleInputChange={handleInputChange}
        />
    );
};

FormInputElement.play = async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    const FormTextBox = canvas.getByRole('textbox', { name: /Job name/i });

    expect(FormTextBox).toBeInTheDocument();
};
