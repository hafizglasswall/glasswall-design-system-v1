import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { expect } from '@storybook/jest';
import { FormLabelSelect } from '.';
import { formItems } from '../../constants/cleanFIlesFormItems';
import { SelectChangeEvent } from '@mui/material';
import { within } from '@storybook/testing-library';

export default {
    title: 'Components/Form/FormDropdownElement',
    component: FormLabelSelect,
    args: {
        isLoading: true,
        options: [
            { label: 'front office files', value: 'front office files ' },
            { label: 'back office files', value: 'back office files' },
            { label: 'intel files', value: 'intel files' },
        ],
        label: formItems.sourceContainer.name,
        required: false,
        placeholder: formItems.sourceContainer.placeHolder,
        size: 'small',
        error: false,
        errorMsg: 'Error Occurred',
    },
    argTypes: {
        size: { control: 'radio', options: ['small', 'medium'] },
        value: {
            control: false,
        },
        options: { if: { arg: 'isLoading', truthy: false } },
    },
} as ComponentMeta<typeof FormLabelSelect>;

export const FormDropdownElement: ComponentStory<typeof FormLabelSelect> = (
    args
) => {
    const [localValue, setLocalValue] = useState<string>('');
    const handleInputChange = (event: SelectChangeEvent) => {
        setLocalValue(event.target.value);
    };
    return (
        <FormLabelSelect
            {...args}
            value={localValue}
            handleInputChange={handleInputChange}
        />
    );
};

FormDropdownElement.play = async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const FormTextBox = canvas.getByText('Select source container');
    expect(FormTextBox).toBeInTheDocument();
};
