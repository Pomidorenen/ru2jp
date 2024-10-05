import dictionary from "../dictionary";
export default function Ru2jp(value: string): string {
    const handler = (value: string):string =>
    {
        const index:string = value.toUpperCase();
        return (dictionary[index])?dictionary[index]:value;
    }
    return value.split("").map(handler).join("");
}