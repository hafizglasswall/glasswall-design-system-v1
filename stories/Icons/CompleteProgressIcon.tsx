import { CheckCircleOutlineRounded } from '@mui/icons-material';
import { Icon } from '@mui/material';

export const CompletedProgressIcon = ({
    isComplete
}: {
        isComplete: boolean;
}) => {
    if (!isComplete) return null;
    return (
        <Icon
            titleAccess='Complete icon'
            fontSize="large"
            component={CheckCircleOutlineRounded}
            sx={{
                color: '#4DD9ED',
            }}
        />
    );
};
