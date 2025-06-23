import {Button, Card, Input} from 'antd';
import {useGetAll} from "../../query/query/card";
import {useState} from "react";
import {useDeleteCardMutation} from "../../query/mutation/card";
import {NavLink} from "react-router-dom";

const { Meta } = Card;

const Home = () => {
    const [searchTerm,setSearchTerm] = useState("")
    const {data} = useGetAll()

    const SearchCard = data?.filter((x)=>(
        x.title.toLowerCase().includes(searchTerm.toLowerCase())
    ))

    const {mutate} = useDeleteCardMutation();

    const handledelete = (id:string) => {
        mutate(Number(id))
    }

    return (
       <>
           <Input value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
           <div className="flex gap-5 py-3">

               {
                   SearchCard?.map((card)=>(
                       <Card
                           hoverable
                           style={{ width: 240 }}
                           cover={<img alt="example" src={`http://localhost:5183/${card.imageUrl}`} />}
                       >
                           <Meta title={card.title}/>
                           <div>
                               <Button onClick={()=>handledelete(String(card.id))}>delete</Button>
                               <NavLink to={`/update-card/${card.id}`}>
                                   <Button>Update</Button>
                               </NavLink>
                           </div>
                       </Card>
                   ))
               }

           </div></>
    )
}

export default Home