// import { ACTION_TYPE, ValidateName } from "../../pages/clean-files/useCleanFiles";

/**
 * 
 * @param value 
 * @param cb set state callback for common input
 * @param rule 
 */
// function validateInputs(value = '', cb, rule, name): boolean {
//     console.log('validateInputs', value, name)
//     const result = rule(value);
//     if (result.error) {
//         console.log('triggering dispatch', result);
//         cb({
//             type: ACTION_TYPE.SET_COMMON_INPUT_ERROR,
//             payload: {
//                 name: name,
//                 error: result.error,
//                 errorMessage: result.message,
//             }
//         })
//         // cb(prev => ({ ...prev, [name]: { value, error: true, message: result.message } }))
//     }
//     return result.error

// }
// function commonRule(value: string = ''): ValidateName | void {
//     console.log('commonRule', value)
//     if (value.length < 1) return {
//         error: true,
//         message: 'Please enter a job name'
//     }
//     return {
//         error: false,
//         message: ''
//     }
// }

export const formItems = {
    jobName: {
        ariaLabel: 'job name required',
        name: 'Job name',
        statePropName: 'jobName',
        placeHolder: 'Enter job name',
        tooltipText: 'This nickname will help you find the report later.',
        tooltipButtonTitle: 'about job name',
        required: true,
        // rule: commonRule,
        // validate: function (value, cb) {
        //     return validateInputs(value, cb, this.rule, this.statePropName)
        // }
    },
    storageUrl: {
        ariaLabel: 'storage url required',
        name: 'Azure storage connection string',
        placeHolder: 'Paste in a URL or select a location',
        required: true,
        // rule: function (validated: boolean): ValidateName {
        //     if (validated) return {
        //         error: true,
        //         message: 'Please choose a valid storage Url'
        //     }
        //     return { error: false, message: '' }
        // },
        // validate: function (value, cb) {
        //     console.log('validate value', value)
        //     const result = this.rule(value);
        //     if (result.error) {
        //         cb({
        //             type: ACTION_TYPE.SET_STORAGEURL_ERROR,
        //             payload: {
        //                 errorMsg: 'Please select a valid storage URL'
        //             }
        //         })
        //         // cb(prev => ({ ...prev, value, error: true, errorMsg: result.message }));
        //     }
        //     return result.error;
        // }
    },
    displayName: {
        name: "Display name",
        placeHolder: "Enter display name for storage location",
        tooltipText: "This name will display on your list of reports to help you locate the cleaning.",
        tooltipButtonTitle: 'about display name',
        required: false,
    },
    sourceContainer: {
        name: "Source container",
        placeHolder: "Select source container",
        required: false,
        // rule: function (value: string = '', containers = []) {
        //     console.log('soruce container rule', value, containers)
        //     if (!containers.includes(value)) {
        //         return {
        //             error: true,
        //             message: 'Please select a container'
        //         }
        //     }
        //     return {
        //         error: false,
        //         message: ''
        //     }
        // },
        // validate: function (value: string = '', containers = [], cb) {
        //     const result = this.rule(value, containers);
        //     console.log('result for available containers', result)
        //     if (result?.error) {
        //         cb({
        //             type: ACTION_TYPE.SET_SELECTED_CONTAINER_ERROR,
        //             payload: {
        //                 name: value,
        //                 error: true,
        //                 errorMessage: 'Please select the available container'
        //             }
        //         })
        //     }
        //     return result.error;
        // }
    },
    auditLogContainer: {
        statePropName: 'auditLogContainer',
        ariaLabel: 'audit log container required',
        name: "Audit log container",
        placeHolder: "Enter audit log container name (ex. sourcename-log)",
        tooltipText: "We'll save metadata information about the job in this cloud storage location.",
        tooltipButtonTitle: 'about audit container',
        required: true,
        // rule: commonRule,
        // validate: function (value, cb) {
        //     return validateInputs(value, cb, this.rule, this.statePropName)
        // }
    },
    cleanTargetContainer: {
        statePropName: 'cleanTargetContainer',
        ariaLabel: 'clean target container required',
        name: "Clean target container",
        placeHolder: "Enter target container name (ex. sourcename-clean)",
        tooltipText: "We'll save clean versions of your source files in this cloud storage location.",
        tooltipButtonTitle: 'about clean target container',
        required: true,
        // rule: commonRule,
        // validate: function (value, cb) {
        //     return validateInputs(value, cb, this.rule, this.statePropName)
        // }
    }
}



const cleanFilesFormNameAndStatePropMap = new Map();
cleanFilesFormNameAndStatePropMap.set(formItems.jobName.name, formItems.jobName.statePropName);
cleanFilesFormNameAndStatePropMap.set(formItems.auditLogContainer.name, formItems.auditLogContainer.statePropName);
cleanFilesFormNameAndStatePropMap.set(formItems.cleanTargetContainer.name, formItems.cleanTargetContainer.statePropName);
export { cleanFilesFormNameAndStatePropMap };
