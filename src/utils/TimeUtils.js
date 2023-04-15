export const TimeUtils = function() 
{
    const getTime = (
        options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        }
    ) => {
        return new Date().toLocaleDateString(undefined, options);
    }

    return {
        getTime
    }
}();