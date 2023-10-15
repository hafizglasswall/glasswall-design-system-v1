import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DoDisturbAltIcon from '@mui/icons-material/DoDisturbAlt';
import React from 'react';
import { REPORT_STATUS } from '../../constants/reportStatuses';
export const StatusIcon = ({ status }: { status: REPORT_STATUS }) => {
    const titleAccess = `${status} status icon`;
    if (status === REPORT_STATUS.COMPLETE) {
        return (
            <CheckCircleOutlineIcon color="primary" titleAccess={titleAccess} />
        );
    }
    if (status === REPORT_STATUS.IN_QUEUE) {
        return <AccessTimeIcon htmlColor="#FF9800" titleAccess={titleAccess} />;
    }
    if (status === REPORT_STATUS.STOPPED) {
        return <DoDisturbAltIcon color="error" titleAccess={titleAccess} />;
    }
    if (status === REPORT_STATUS.IN_PROGRESS) {
        return <AutorenewIcon color="secondary" titleAccess={titleAccess} />;
    }
    if (status === REPORT_STATUS.FAILED) {
        return <CancelOutlinedIcon color='error' titleAccess={titleAccess} />
    }
    return null;
};
