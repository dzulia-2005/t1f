import {Input} from "antd";
import {useState} from "react";
import {useCreateCardMutation} from "../../query/mutation/card";
import {useNavigate} from "react-router-dom";

const CreateCardPage = () => {
    const [data,setData] = useState({
        Title:'',
        Company:'',
        Purchase:0,
        LastDividend:0,
        Industry:'',
        MarketCap:0,
        ImageUrl:''
    });
    const navigate = useNavigate();

    const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const file = e.target.files?.[0]
        if(file){
            setData((prev)=>({...prev, ImageUrl: `uploads/${file.name}`}));
        }
    }

    const {mutate} = useCreateCardMutation()

    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
       e.preventDefault()
        mutate({
           Title:data.Title,
           Company:data.Company,
           Purchase:data.Purchase,
           LastDividend:data.LastDividend,
           Industry:data.Industry,
           MarketCap:data.MarketCap,
            ImageUrl:data.ImageUrl ,
       },{
            onSuccess:()=>{
                navigate("/")
            }
        })
    }

    return (
        <div className="flex justify-center items-center">

            <form onSubmit={onSubmit}>

                <div>
                    <label>Title</label>
                    <Input
                        placeholder={"Title"}
                        value={data.Title}
                        onChange={(e)=>setData((prev)=>({...prev,Title: e.target.value}))}
                    />
                </div>

                <div>
                    <label>Company</label>
                    <Input
                        placeholder={"Company"}
                        value={data.Company}
                        onChange={(e)=>setData((prev)=>({...prev,Company: e.target.value}))}
                    />
                </div>

                <div>
                    <label>Purchase</label>
                    <Input
                        placeholder={"Purchase"}
                        value={data.Purchase}
                        onChange={(e)=>setData((prev)=>({...prev,Purchase: Number(e.target.value)}))}
                    />
                </div>

                <div>
                    <label>LastDividend</label>
                    <Input
                        placeholder={"LastDividend"}
                        value={data.LastDividend}
                        onChange={(e)=>setData((prev)=>({...prev,LastDividend: Number(e.target.value)}))}
                    />
                </div>

                <div>
                    <label>Industry</label>
                    <Input
                        placeholder={"Industry"}
                        value={data.Industry}
                        onChange={(e)=>setData((prev)=>({...prev,Industry: e.target.value}))}
                    />
                </div>

                <div>
                    <label>MarketCap</label>
                    <Input
                        placeholder={"MarketCap"}
                        value={data.MarketCap}
                        onChange={(e)=>setData((prev)=>({...prev,MarketCap:Number(e.target.value)}))}
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

                <div className="flex justify-center ">
                    <button type="submit">Submit</button>
                </div>

            </form>
        </div>
    )
}

export default CreateCardPage;