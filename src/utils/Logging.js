import { TimeUtils } from "./TimeUtils";

export const Logging = function()
{
    
    const info = (text, ...args) => {
        let content = `[${TimeUtils.getTime()}] [INFO]: ${text}`;
        args.forEach((element) => {
            content +=` ${element.toString()}`;
        });
        console.log(content);
    }   

    const warn = (text, ...args) => {
        let content = `[${TimeUtils.getTime()}] [WARN]: ${text}`;
        args.forEach((element) => {
            content +=` ${element.toString()}`;
        });
        console.log(content);
    }

    return {
        info,
        warn
    }
}();