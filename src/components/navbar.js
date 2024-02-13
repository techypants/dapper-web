export default function Navbar(){
    return(
        <div className="overflow-x-hidden  p-2 bg-slate-500 flex items-center justify-between fixed w-full rounded-b-3xl z-50">
            <div className="border-[1px] bg-slate-300 border-white flex gap-5 text-2xl font-semibold p-2 rounded-3xl ml-5 pl-10 pr-10">
                <div className="">Home</div>
                <div>Products</div>
                <div>Contact</div>
            </div>

            <div className="text-white text-6xl font-bold font-[Helvetica Neue]">
                DAPPER
            </div>

            <div className="flex bg-black rounded-full">
                <div className="bg-black text-white rounded-full p-5 pr-2 flex items-center justify-center text-2xl font-semibold">Your cart</div>
                <div className="bg-white text-3xl p-4 rounded-full ">🛒</div>
            </div>
        </div>
    )

}