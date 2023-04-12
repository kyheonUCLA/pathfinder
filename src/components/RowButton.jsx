
const RowButton = ({onClick})=> {
	const arrowDownPath = "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z";
	const arrowUpPath = "M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z";
	
	return (
		<div className="bg-fuchsia-500 flex flex-col justify-center ">
			<button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-t-lg border-2 border-white" onClick={onClick[0]}>
				<svg className="h-8 w-8" viewBox="0 0 16 16" fill="white">
					<path fillRule="evenodd" d={arrowUpPath} clipRule="evenodd" />
				</svg>
			</button>

			<button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-b-lg border-2 border-white" onClick={onClick[1]}>
				<svg className="h-8 w-8" viewBox="0 0 16 16" fill="white">
					<path fillRule="evenodd" d={arrowDownPath} clipRule="evenodd" />
				</svg>
			</button>
		</div>
	)

}

export default RowButton