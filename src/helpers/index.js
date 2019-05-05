import titleize from 'titleize';

export const rentalType = isShared => isShared ?  'shared' :  'entire';

export const doUpperCase = value => !!value ? titleize(value) : '';