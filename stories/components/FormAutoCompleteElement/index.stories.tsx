import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { expect } from '@storybook/jest';
import { AutoCompleteComponent } from '.';
import { formItems } from '../../constants/cleanFIlesFormItems';
import { within } from '@testing-library/react';

export default {
    title: 'Components/Form/AutoCompleteElement',
    component: AutoCompleteComponent,
    args: {
        isLoading: false,
        options: [
            { label: 'display name 1', value: 'display name 1 ' },
            { label: 'display name 2', value: 'display name 2' },
            { label: 'display name 3', value: 'display name 3' },
            { label: 'display name 4', value: 'display name 4' },
        ],
        ariaLabel: formItems.storageUrl.ariaLabel,
        label: formItems.storageUrl.name,
        required: false,
        placeholder: formItems.storageUrl.placeHolder,
        error: false,
        errorMsg: 'Error Occurred',
    },
    argTypes: {
        value: {
            control: false,
        },
        isLoading: {
            control: false,
        },
        ariaLabel: {
            table: {
                disable: true,
            },
        },
        placeholder: {
            table: {
                disable: true,
            },
        },
        options: { if: { arg: 'isLoading', truthy: false } },
    },
} as ComponentMeta<typeof AutoCompleteComponent>;

export const AutoCompleteElement: ComponentStory<
    typeof AutoCompleteComponent
> = (args) => {
    const [localValue, setLocalValue] = useState<string>('');
    const handleInputChange = (value: string) => {
        setLocalValue(value);
    };
    return (
        <AutoCompleteComponent
            {...args}
            value={localValue}
            handleInputChange={handleInputChange}
        />
    );
};

AutoCompleteElement.play = async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const FormTextBox = canvas.getByPlaceholderText(
        'Paste in a URL or select a location'
    );
    expect(FormTextBox).toBeInTheDocument();
};
