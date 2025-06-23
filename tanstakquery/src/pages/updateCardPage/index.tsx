import {Button, Input} from "antd";
import {type ChangeEvent, useState} from "react";
import {useUpdateCard} from "../../react-query/mutation/card";
import {useParams} from "react-router-dom";

const UpdateCardPage = () => {
    const {id} = useParams<{id:string}>();

    const [formData,setFormData] = useState({
        Title: "",
        Company: "",
        Purchase: 0,
        LastDividend: 0,
        Industry: "",
        MarketCap: 0,
        ImageUrl: ""
    })


    const handleFileChange = (e:ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const file = e.target.files?.[0];
        if(file){
            setFormData((prev)=>({...prev, imageUrl:`uploads/${file}`}))
        }

    }

    const {mutate} = useUpdateCard();

    const handleUpdateSubmit = () => {
        if(!id) return console.error("id is not found");
        mutate({
            id,
            payload: {
                Title:formData?.Title,
                Company:formData?.Company,
                Purchase:formData?.Purchase,
                LastDividend:formData?.LastDividend,
                Industry:formData?.Industry,
                MarketCap:formData?.MarketCap,
                ImageUrl:formData?.ImageUrl,
            }
        });
    };

    return (
        <div className="flex items-center justify-center ">
            <form onSubmit={handleUpdateSubmit}>

                <div>
                    <label htmlFor="title">Title</label>
                    <Input
                        value={formData.Title}
                        onChange={(e)=>setFormData((prev)=>({...prev,Title: e.target.value}))}
                    />
                </div>

                <div>
                    <label htmlFor="company">company</label>
                    <Input
                        value={formData.Company}
                        onChange={(e)=>setFormData((prev)=>({...prev,Company: e.target.value}))}
                    />
                </div>

                <div>
                    <label htmlFor="purchase">purchase</label>
                    <Input
                        value={formData.Purchase}
                        onChange={(e)=>setFormData((prev)=>({...prev,Purchase:Number(e.target.value)}))}
                    />
                </div>

                <div>
                    <label htmlFor="lastdividend">lastdividend</label>
                    <Input
                        value={formData.LastDividend}
                        onChange={(e)=>setFormData((prev)=>({...prev,LastDividend: Number(e.target.value)}))}
                    />
                </div>

                <div>
                    <label htmlFor="industry">industry</label>
                    <Input
                        value={formData.Industry}
                        onChange={(e)=>setFormData((prev)=>({...prev,Industry: e.target.value}))}
                    />
                </div>

                <div>
                    <label htmlFor="marketCup">marketCup</label>
                    <Input
                        value={formData.MarketCap}
                        onChange={(e)=>setFormData((prev)=>({...prev,MarketCap:Number(e.target.value)}))}
                    />
                </div>


                <div>
                    <input
                        placeholder="select image"
                        type="file"
                        accept="image/*"
                        className="h-[40px] bg-[#6495ed] rounded-xl my-5 text-[#ffff] pl-5 pt-2 w-10rem"
                        onChange={handleFileChange}
                    />
                </div>

                <div className="flex justify-center">
                    <Button
                        type="primary"
                        onClick={handleUpdateSubmit}
                    >create</Button>
                </div>

            </form>
        </div>

    )
}

export default UpdateCardPage