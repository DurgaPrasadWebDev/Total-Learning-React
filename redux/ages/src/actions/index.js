export const AGE_UP = () =>
{
    console.log('hai');
    return {type:'AGE_UP'}
}

export const AGE_DOWN = () =>
{
    return {type:'AGE_DOWN'}
}

export const DELETE_AGE = (id) =>
{
    return {type:'DELETE_AGE',key:id}
}