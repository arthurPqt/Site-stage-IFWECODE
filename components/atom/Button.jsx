export default function Button({title,icon,type = 'primary'}){

    //Type : outline
    if(type === 'outline'){
        return(
            <button className={"bg-white text-immo-primary px-4 py-4 rounded-lg w-auto hover:bg-red-400 flex gap-x-2 items-center justify-center"}>
                {icon && icon}
                {title}
            </button>
        )
    }

    //Type : secondary
    if(type === 'secondary'){
        return(
            <button className={"bg-transparent text-white border border-white  px-4 py-4 rounded-lg w-auto hover:bg-red-600 flex gap-x-2 items-center justify-center"}>
                {icon && icon}
                {title}
            </button>
        )
    }
    
    //Type : conseiller-0
    if(type === 'conseiller0'){
        return(
            <button className={"bg-immo-primary text-white px-2 py-1 rounded-lg w-full hover:bg-red-600 flex gap-x-2 items-center justify-center"}>
                {icon && icon}
                {title}
            </button>
        )
    }

    //Type : conseiller-1
    if(type === 'conseiller1'){
        return(
            <button className={"bg-transparent text-immo-primary border-3 border-immo-primary  px-2 py-1 rounded-lg w-full hover:bg-red-400 flex gap-x-2 items-center justify-center"}>
                {icon && icon}
                {title}
            </button>
        )
    }

    //Type : conseiller-2
    if(type === 'conseiller2'){
        return(
            <button className={"bg-transparent text-black border-3 border-gray-300  px-2 py-1 rounded-lg w-full hover:bg-gray-300 flex gap-x-2 items-center justify-center"}>
                {icon && icon}
                {title}
            </button>
        )
    }
    //Type : filterSubmit
    if(type === 'form'){
        return (
        <button className={"bg-immo-primary text-white px-6 py-3 rounded-lg w-auto hover:bg-red-600 flex gap-x-2 items-center justify-center"}>
            {icon && icon}
            {title}
        </button>
        )
    }

    
    //Type : blogOutline
    if(type === 'blogOutline'){
        return(
            <button className={"bg-white text-immo-primary px-4 py-4 rounded-lg w-full hover:bg-red-400 flex gap-x-2 font-semibold items-center justify-center"}>
                {icon && icon}
                {title}
            </button>
        )
    }

    //default 
    return(
        <button className={"bg-immo-primary text-white px-2 py-1 rounded-lg w-full hover:bg-red-600 flex gap-x-2 items-center justify-center"}>
            {icon && icon}
            {title}
        </button>
    )
}