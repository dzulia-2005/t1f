import {Card, Button, Input} from 'antd';
import {useEffect, useState} from "react";
import type {CardType} from "../../../types/card/index.types.ts";
import AddModal from "../components/Modal.tsx"
const { Meta } = Card;



const Home = () => {
    const [card,setCard] = useState<CardType[]>();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState<string>("");

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const dataFetch = async() => {
        const data = await fetch("http://localhost:5183/api/stock")
        const response = await data.json();

        setCard(response);
    }

    const deleteCard = async(id:number) => {
        await fetch(`http://localhost:5183/api/stock/delete/${id}`,{
            method: "DELETE",
        })

        setCard((x)=>x?.filter((x=>x.id !== id)))
    }

    useEffect(() => {
        dataFetch();
    }, []);


    const handleFilter = card?.filter((item)=>(
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    ));

    return (
        <div className="flex flex-wrap gap-15 justify-center sm:justify-start">
            <Input onChange={(event)=>setSearchTerm(event.target.value)} value={searchTerm}/>
            {handleFilter?.map((x) => (
                <Card
                    key={x.id}
                    hoverable
                    style={{ width: 240  }}
                    cover={<img alt="example" src={`http://localhost:5183/${x.imageUrl}`} />}
                >
                    <Meta title={x.title} />
                    <div className="flex gap-2 pt-5">

                        <span>
                            <Button type="primary" danger onClick={() => deleteCard(x.id)}>
                              Delete
                            </Button>
                        </span>

                        <span>
                            <Button type="primary" onClick={showModal}>
                                Add
                            </Button>
                            <AddModal setCard={setCard}  isModalOpen={isModalOpen} handleCancel={handleCancel}/>
                        </span>

                    </div>
                </Card>
            ))}
        </div>
    )
}

export default Home;