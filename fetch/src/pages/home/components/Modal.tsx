import type {CardType} from "../../../types/card/index.types.ts";
import {Input, Modal} from "antd";
import {useState} from "react";


const AddModal = ({
                      handleCancel,
                      isModalOpen,
                      setCard
                }:{
                    handleCancel:()=>void,
                    isModalOpen:boolean,
                    setCard?:React.Dispatch<React.SetStateAction<CardType[] | undefined>>
                }) => {
    const [title,setTitle] = useState<string>("");
    const [company,setCompany] = useState<string>("");
    const [purchase,setPurchase] = useState<number>(0);
    const [lastDividend,setLastDividend] = useState<number>(0);
    const [industry,setIndustry] = useState<string>("");
    const [marketCup,setMarketCup] = useState<number>(0);
    const [imageurl,setImage] = useState<string>("");



    const handleAddCard = async() => {
        const res = await fetch("http://localhost:5183/api/stock/create",{
            method:'POST',
            body:JSON.stringify({
                title,
                company,
                purchase,
                lastDividend,
                industry,
                marketCup,
                imageurl
            })
        });
        const data = await res.json();
        setCard?.((prev) => [...prev || [],data])

    }

    const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const file = e.target.files?.[0];

        if(file) {
            setImage(`uploads/${file.name}`)
        }
    }

    return (
        <Modal
            title="Basic Modal"
            closable={{'aria-label': 'Custom Close Button'}}
            open={isModalOpen}
            onOk={handleAddCard}
            onCancel={handleCancel}
        >
            <label>Title</label>
            <Input placeholder="enter title" value={title} onChange={(e) => setTitle(e.target.value)}/>

            <label>company</label>
            <Input placeholder="enter company" value={company} onChange={(e) => setCompany(e.target.value)}/>

            <label>purchase</label>
            <Input placeholder="enter purchase" value={purchase}
                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPurchase(Number(e.target.value))}/>

            <label>lastDividend</label>
            <Input placeholder="enter lastDividend" value={lastDividend}
                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastDividend(Number(e.target.value))}/>

            <label>Industry</label>
            <Input placeholder="enter Industry" value={industry}
                   onChange={(e) => setIndustry(e.target.value)}/>

            <label>marketCup</label>
            <Input placeholder="enter marketCup" value={marketCup}
                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMarketCup(Number(e.target.value))}/>

            <label>imageurl</label>
            <input
                placeholder="select image"
                type = "file"
                accept="image/*"
                onChange={handleFileChange}
            />

        </Modal>
    )
}

export default AddModal;