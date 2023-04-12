

const ColButton = ({onClick}) => {
	const arrowRightPath = "M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z";
	const arrowLeftPath = "M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z";
	return (
		<div className="bg-gray-300 flex-none flex justify-center">
			<button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-l-lg border-2 border-white" onClick={onClick[0]}>
				<svg className="h-8 w-8" viewBox="0 0 16 16" fill="white">
					<path fillRule="evenodd" d={arrowLeftPath} clipRule="evenodd" />
				</svg>
			</button>

			<button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r-lg border-2 border-white" onClick={onClick[1]}>
				<svg className=" h-8 w-8" viewBox="0 0 16 16" fill="white">
					<path fillRule="evenodd" d={arrowRightPath} clipRule="evenodd" />
				</svg>
			</button>
		</div>	
	)
}

export default ColButton