import Button from "@/components/atom/Button";
import Flyer from "@/components/atom/Flyer";
import {Items} from "@/data/data";
import ContentCard from "@/components/section/content-card";

export default function Page() {
    //On veut récupérer que les coups de coeur
   /* const onlyLiked = Items.filter(el => el.like) //
    return (
        <main>
            <h1>Hello</h1>
            <Button title={"Démo Arthur"} myFunc={() => alert("Hello World  ")}/>
            {onlyLiked.length > 0 ? <h2>Les coups de coeur</h2> : <h2>Aucun coup de coeur</h2>}
            {onlyLiked.map(function(item){
                return(
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                        <p>{item.price}</p>
                        <p>{item.complement}</p>
                        <Flyer title={item.Buy ? "Vente" : "Location"} type={item.Buy ? "achat" : "location"}/>     
                    </div>
                )
            })}
            <Flyer title={"test"} myFunc={()=> alert("COup de coeur ")}/>
        </main>
    )*/
    //on veux récupérer tout les biens achetables
       //const onlyBuy = Items.filter(el => el.Buy) //
       const onlyLike = Items//.filter(el => el.Buy); ///*.filter(el => el.like);*/// 
    return (
        <main>
            <div className={" grid grid-cols-2 gap-4 px-35 py-10 flex space-between bg-immo-secondary"}>
                    <div>
                        <ul>
                            <li className="mb-4">
                        <p className="font-bold text-4xl">Trouvez votre bien immobilier idéal en France</p>
                        </li>
                        
                        <li className="mb-4">
                        <p>Découvrez notre sélection exclusive de propriétés avec l'accompagnement d'experts locaux.</p>
                        </li>
                        
                        <li className="mb-4">
                        <h1>Hello</h1>
                        </li>
                        </ul>
                    </div>
                    <img className="rounded-lg" src="images/image-test.jpg"/>
                    
                  
                    
            </div>
            
            <Button title={"Démo Arthur"} myFunc={() => alert("Hello World  ")}/>
            
            {onlyLike.length > 0 ? <h2 className="flex justify-center">Les coups de coeur</h2> : <h2>Aucun coup de coeur</h2>}
           
            <div className={" grid grid-cols-3 gap-4 px-35 flex space-between"}>
                {onlyLike.map(function(item){
                    const thumbImage = item.images.find(el => el.thumb)
                    return(
                        <ContentCard
                            key={item.id}
                            name={item.name}
                            price={item.price}
                            complement={item.complement}
                            imgSrc={thumbImage.src}
                            id={item.id}
                            Buy={item.Buy}
                            like={item.like}
                            bedroom={item.Bedroom}
                            bathroom={item.Bathroom}
                            surface={item.Surface}

                        />
                    )
                })}
            </div>
            

            
        </main>
         
    )
}