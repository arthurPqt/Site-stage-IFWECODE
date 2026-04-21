export default function EnCons({energetic, GesEmisison, energeticValue, GesEmissionValue}) {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <div> 
                <h2 className="font-bold mb-2">Consomation énergétique (DPE)</h2>
            <div className="grid grid-cols-7 text-center font-bold ">
                <div className="flex items-center text-white">
                    <p className={`w-full bg-energy-A px-1 mx-1 rounded-l-lg ${energetic === 'A' ? 'h-6 rounded-lg shadow-sm' : 'h-2 my-auto'}`}>{energetic === 'A' ? 'A' : ''}</p>
                </div>
                <div className="flex items-center">
                    <p className={`w-full bg-energy-B px-1 mx-1 ${energetic === 'B' ? 'h-6 rounded-lg shadow-sm' : 'h-2 my-auto'}`}>{energetic === 'B' ? 'B' : ''}</p>
                </div>
                <div className="flex items-center">
                    <p className={`w-full bg-energy-C px-1 mx-1 ${energetic === 'C' ? 'h-6 rounded-lg shadow-sm' : 'h-2 my-auto'}`}>{energetic === 'C' ? 'C' : ''}</p>
                </div>
                <div className="flex items-center">
                    <p className={`w-full bg-energy-D px-1 mx-1 ${energetic === 'D' ? 'h-6 rounded-lg shadow-sm' : 'h-2 my-auto'}`}>{energetic === 'D' ? 'D' : ''}</p>
                </div>
                <div className="flex items-center">
                    <p className={`w-full bg-energy-E px-1 mx-1 ${energetic === 'E' ? 'h-6 rounded-lg shadow-sm' : 'h-2 my-auto'}`}>{energetic === 'E' ? 'E' : ''}</p>
                </div>
                <div className="flex items-center">
                    <p className={`w-full bg-energy-F px-1 mx-1 ${energetic === 'F' ? 'h-6 rounded-lg shadow-sm' : 'h-2 my-auto'}`}>{energetic === 'F' ? 'F' : ''}</p>
                </div>
                <div className="flex items-center">
                    <p className={`w-full bg-energy-G px-1 mx-1 rounded-r-lg ${energetic === 'G' ? 'h-6 rounded-lg shadow-sm' : 'h-2 my-auto'}`}>{energetic === 'G' ? 'G' : ''}</p>
                </div>
            </div>
            <p className="text-center font-semibold pt-4">{energeticValue} kWh/m²/an</p>
            </div> 
            <div>
                <h2 className="font-bold mb-2">Émissions de GES</h2>
            <div className="grid grid-cols-7 text-center font-bold ">
                <div className="flex items-center">
                    <p className={`w-full bg-GES-A px-1 mx-1 rounded-l-lg ${GesEmisison === 'A' ? 'h-6 rounded-lg shadow-sm' : 'h-2 my-auto'}`}>{GesEmisison === 'A' ? 'A' : ''}</p>
                </div>
                <div className="flex items-center">
                    <p className={`w-full bg-GES-B px-1 mx-1 ${GesEmisison === 'B' ? 'h-6 rounded-lg shadow-sm' : 'h-2 my-auto'}`}>{GesEmisison === 'B' ? 'B' : ''}</p>
                </div>
                <div className="flex items-center">
                    <p className={`w-full bg-GES-C px-1 mx-1 ${GesEmisison === 'C' ? 'h-6 rounded-lg shadow-sm' : 'h-2 my-auto'}`}>{GesEmisison === 'C' ? 'C' : ''}</p>
                </div>
                <div className="flex items-center">
                    <p className={`w-full bg-GES-D px-1 mx-1 ${GesEmisison === 'D' ? 'h-6 rounded-lg shadow-sm' : 'h-2 my-auto'}`}>{GesEmisison === 'D' ? 'D' : ''}</p>
                </div>
                <div className="flex items-center text-white">
                    <p className={`w-full bg-GES-E px-1 mx-1 ${GesEmisison === 'E' ? 'h-6 rounded-lg shadow-sm' : 'h-2 my-auto'}`}>{GesEmisison === 'E' ? 'E' : ''}</p>
                </div>
                <div className="flex items-center text-white">
                    <p className={`w-full bg-GES-F px-1 mx-1 ${GesEmisison === 'F' ? 'h-6 rounded-lg shadow-sm' : 'h-2 my-auto'}`}>{GesEmisison === 'F' ? 'F' : ''}</p>
                </div>
                <div className="flex items-center text-white">
                    <p className={`w-full bg-GES-G px-1 mx-1 rounded-r-lg ${GesEmisison === 'G' ? 'h-6 rounded-lg shadow-sm' : 'h-2 my-auto'}`}>{GesEmisison === 'G' ? 'G' : ''}</p>
                </div>
            </div>
            <p className="text-center font-semibold pt-4">{GesEmissionValue} CO2/m²/an</p>
            </div>
        </div> 
    )
}