import Navbar from "./navbar";


export default function Landing() {
    return (
        <>
            <Navbar />
            <div className="w-[100vw] bg-slate-700 overflow-x-hidden flex flex-col items-center justify-center">
            <div>
            <div style={{ width: '100vw', height: '90vh' ,zIndex:'0'}}>
                <iframe
                    src="https://www.youtube-nocookie.com/embed/tEpz6Ci-deE?autoplay=1&loop=1&mute=1&controls=0"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    className="w-full h-full fixed top-0"
                ></iframe>
            </div>
            </div>
            <div className="w-full bg-slate-700 flex relative justify-start">
                <img
                    src="https://i.pinimg.com/564x/55/f3/c0/55f3c0f679e95f443b6cdaaca0006e9d.jpg"
                    alt=""
                    className="w-[40%] mt-2 rounded-3xl ml-5"
                ></img>
            
                <div className="flex flex-col w-[40%] h-[80%] m-auto z-3">
                    <div id="d2" className="flex flex-col h-[80%] pb-8 items-center justify-center text-white w-full  rounded-3xl bg-slate-800" style={{ opacity: '0.85' }}>
                        <h1 className="p-4 pb-1 text-[120px] font-bold">
                            Dapper
                        </h1>
                        <h2 className="p-8 pt-0 text-4xl text-center">
                            An Indian brand committed to giving you the best products delivered at your doorstep
                        </h2>
                        <button className="p-4 pl-7 pr-7 rounded-full bg-slate-950 text-2xl text-slate-200">
                            Contact us
                        </button>
                        <div className="w-[60%] flex mt-10 justify-evenly">
                            <button className="p-2 w-[100px] bg-slate-300 font-semibold text-slate-700 text-2xl rounded-full">His</button>
                            <button className="p-2 w-[100px] bg-slate-300 font-semibold text-slate-700 text-2xl rounded-full">Hers</button>
                            <button className="p-2 w-[100px] bg-slate-300 font-semibold text-slate-700 text-2xl rounded-full">Kids</button>
                        </div>
                    </div>   
            </div>
            
        </div>
        <div className="w-[90%] flex items-center mt-6 justify-center relative ">
            <span className="absolute text-gray-600 text-[60px] pb-[14%] font-serif font-bold">The clothing for the people who run the game</span>
            <img src="https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="" className="rounded-2xl p-5"></img>

    </div>
        
        </div>
        </>
    );
}
