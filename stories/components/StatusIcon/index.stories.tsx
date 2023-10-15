import {StatusIcon} from '.';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
export default {
    title: 'Components/Status Icon',
    component: StatusIcon,
    args : {
        status :'Stopped',
    },
    argTypes: {
        status: { control: "select", options: ["In progress","Stopped","Failed","In queue","Complete"] },
    },
    decorators:[
        (Story)=> (
            <div style={{textAlign: 'center', margin :'3em'}}><Story/></div>
        )
    ]
} as ComponentMeta<typeof StatusIcon>;

const Template:ComponentStory<typeof StatusIcon> =(args) => <StatusIcon {...args}/>


export const Status_Icon = Template.bind({});