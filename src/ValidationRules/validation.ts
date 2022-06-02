export const requiredField = (field: string) => {
  return field ? undefined : 'Field is required'
}


export const maxLengthCreator = (maxLength: number) => (field: string) => {
  return field && field.length > maxLength ? `Max length is ${maxLength} symbols` : undefined
}