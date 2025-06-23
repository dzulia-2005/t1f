import {Button, Card, Input} from 'antd';
import {useGetCards} from "../../react-query/query/card";
import {useState} from "react";
import {useDeleteCard} from "../../react-query/mutation/card";
import {NavLink} from "react-router-dom";

const { Meta } = Card;

export const Home = () => {
    const [searchTerm,setSearchTerm] = useState<string>("");
    const {data} = useGetCards()

    const FilterCards = data?.filter((card)=>(
        card.Title.toLowerCase().includes(searchTerm.toLowerCase())
    ))

    const {mutate} = useDeleteCard()

    const handleDelete = (id:number) => {
       return mutate(id)
    }

    return (
       <>
           <Input
               onChange={(e)=>setSearchTerm(e.target.value)}
               className="pb-5"
           />
           <div className="flex gap-5 pt-2">
               {
                   FilterCards?.map((card)=>(
                       <Card
                           key={card.id}
                           hoverable
                           style={{ width: 240 }}
                           cover={<img alt="example" src={`http://localhost:5183/${card.ImageUrl}`} />}
                       >
                           <Meta title={card.Title}  />
                           <div className="flex items-center justify-between">
                               <Button onClick={()=>handleDelete(card.id)} danger >Delete</Button>
                               <NavLink to={`/update-card/${card.id}`}>
                                   <Button>EditCard</Button>
                               </NavLink>
                           </div>
                       </Card>
                   ))
               }
           </div>
       </>
    )
}

export default Home;