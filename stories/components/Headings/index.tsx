import { Typography, TypographyTypeMap } from '@mui/material';
import React, { PropsWithChildren } from 'react';

/**
 * good example for overriding props, here the if we have a color for heading it will be picked up from the prop
 * but if we dont it will take from the desstructured prop.
 * prop has to be at the end else it will not work.
 *
 * props with children is interesting as well because otherwise we have to have two props for an interface
 * propswithchildren will give react.reactnode to it hence a children can be encapsulated this way.
 * child ren here is the heading name
 * also it will accept the typography props
 * @param props
 * @returns heading
 */
export const Heading1: React.FC<
    PropsWithChildren<TypographyTypeMap['props']>
> = (props) => (
    <Typography
        variant="h4"
        color="secondary.main"
        component={'h1'}
        {...props}
    />
);

export const Heading2: React.FC<
    PropsWithChildren<TypographyTypeMap['props']>
> = (props) => (
    <Typography
        variant="h5"
        color="secondary.main"
        component={'h2'}
        {...props}
    />
);


export const Heading3: React.FC<
    PropsWithChildren<TypographyTypeMap['props']>
> = (props) => (
    <Typography
        variant="h6"
        color="secondary.main"
        component={'h3'}
        {...props}
    />
);
export const Heading4: React.FC<
    PropsWithChildren<TypographyTypeMap['props']>
> = (props) => (
    <Typography
        variant="subtitle1"
        color="secondary.main"
        component={'h4'}
        {...props}
    />
);

export const _Heading3 = ({ name }: { name: string }) => (
    <Typography variant="h6" component="h3" color="secondary.main" pb={2}>
        {name}
    </Typography>
);
