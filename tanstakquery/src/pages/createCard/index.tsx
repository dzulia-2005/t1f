import {Button, Input} from "antd";
import {useState} from "react";
import {useCreateCard} from "../../react-query/mutation/card";

export const CreateCard = () => {
    const [formData, setFormData] = useState({
        Title: "",
        Company: "",
        Purchase: 0,
        LastDividend: 0,
        Industry: "",
        MarketCap: 0,
        ImageUrl: ""
    });

    const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const file = e.target.files?.[0];
        if(file){
            setFormData((prev)=>({...prev, imageUrl: `uploads/${file.name}`}));
        }
    }

    const {mutate} = useCreateCard();

    const handleCreateCard = () => {
        mutate({
            Title:formData?.Title,
            Company:formData?.Company,
            Purchase:formData?.Purchase,
            LastDividend:formData?.LastDividend,
            Industry:formData?.Industry,
            MarketCap:formData?.MarketCap,
            ImageUrl:formData?.ImageUrl,
        })
    }

    return (
        <div className="flex items-center justify-center ">
            <form onSubmit={handleCreateCard}>
                <div>
                    <label htmlFor="title">Title</label>
                    <Input
                        placeholder="Title"
                        value={formData.Title}
                        onChange={(e)=>setFormData((prev)=>({...prev,Title: e.target.value}))}
                    />
                </div>
                <div>
                    <label htmlFor="company">company</label>
                    <Input
                        placeholder="company"
                        value={formData.Company}
                        onChange={(e)=>setFormData((prev)=>({...prev,Company:e.target.value}))}
                    />
                </div>
                <div>
                    <label htmlFor="purchase">purchase</label>
                    <Input
                        placeholder="purchase"
                        type="number"
                        value={formData.Purchase}
                        onChange={(e)=>setFormData((prev)=>({...prev,Purchase:Number(e.target.value)}))}
                    />
                </div>
                <div>
                    <label htmlFor="lastdividend">lastdividend</label>
                    <Input
                        placeholder="lastdividend"
                        value={formData.LastDividend}
                        onChange={(e)=>setFormData((prev)=>({...prev,LastDividend:Number(e.target.value)}))}
                    />
                </div>
                <div>
                    <label htmlFor="industry">industry</label>
                    <Input
                        placeholder="industry"
                        value={formData.Industry}
                        onChange={(e)=>setFormData((prev)=>({...prev,Industry: e.target.value}))}
                    />
                </div>

                <div>
                    <label htmlFor="title">marketCup</label>
                    <Input
                        placeholder="marketCup"
                        value={formData.MarketCap}
                        onChange={(e)=>setFormData((prev)=>({...prev,MarketCap: Number(e.target.value)}))}
                    />
                </div>
                <div>
                    <input
                        placeholder="select image"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="h-[40px] bg-[#6495ed] rounded-xl my-5 text-[#ffff] pl-5 pt-2 w-10rem"
                    />
                </div>

                <div className="flex justify-center">
                   <Button onClick={handleCreateCard} type="primary">create</Button>
                </div>

            </form>
        </div>
    )
}

export default CreateCard