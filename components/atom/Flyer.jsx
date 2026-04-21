
export default function Flyer({title,type}){

    if(!type) return <></>;

    function getTypeStyle(type){
        switch(type){
            case 'location':
                return "bg-blue-500 text-white"
            break;
            case 'achat':
                return "bg-green-500 text-white";
            break;
            case 'coup-de-coeur':
                return "bg-red-500 text-white";
            break;
            default:
                return "bg-yellow-500 text-white";
            break;
        }
    }
    return(
        <p className={`display: inline-block rounded-full  px-2 py-1 ${getTypeStyle(type)}`}>{title}</p>
    )
}