// I can copy and past this into any mobile or web based application for error checking
export const formatErrors = (errorList: any) => {
    const errorContent = Object.keys(errorList).map(key => ({
        key,
        value: errorList[key]
    }));

    const formattedErrors: Array<any> = errorContent.map(name => {
        return `${name.key.charAt(0).toUpperCase() + name.key.slice(1)} ${name.value.join(", ")}`
    })
    return formattedErrors.join(", ")
}