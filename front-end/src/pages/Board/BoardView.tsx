import { Card } from "../../components/card";

export function BoardView() {
	return (
		<div className="flex h-screen w-screen border-blue-100 gap-8 border-8">
			<div className="flex-shrink-0 w-24 border-red-200 border-2">
				<h2>barra lateral</h2>
			</div>
			<div className="flex-1 flex items-start flex-col gap-10 mt-10   border-black">
				<div className=" flex  flex-col text-left">
					<p className="text-4xl font-bold">PROJETO VHS</p>
					<p className="text-[#5A5A65]">Lorem, ipsum dolor.</p>
				</div>
				<div id="cards" className="flex  p-20 h-[800px] rounded-2xl  gap-28  border-yellow-500 bg-[#F8F8F8]">
					<div>
						<h3 className="mb-6 bg-[#E1E4E8] rounded-2xl text-center text-[16px] w-24 p-1">BACKLOG</h3>
						<div id="backlog" className="flex flex-col gap-4">
							<Card
								imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtGy-jQ7O3ptA4Qa7tm-L2mLkp-PQq61jFzA&s"
								title="Cavalo"
								description="uma bostiaushduyguiagfuYFGIUGIAUGHUHUIAJGHighiugtafgoaUYFGHUIHGTQUIEHWIOGTWJIHWIKUYT78a"
							/>
							<Card
								imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtGy-jQ7O3ptA4Qa7tm-L2mLkp-PQq61jFzA&s"
								title="Cavalo"
								description="uma bostiaushduyguiagfuYFGIUGIAUGHUHUIAJGHighiugtafgoaUYFGHUIHGTQUIEHWIOGTWJIHWIKUYT78a"
							/>
						</div>
					</div>

					<div>
						<h3 className="mb-6 bg-[#F0E7F6] rounded-2xl text-center text-[16px] w-24 p-1" >A FAZER</h3>
						<div id="aFazer"className="flex flex-col gap-4">
							<Card
								imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtGy-jQ7O3ptA4Qa7tm-L2mLkp-PQq61jFzA&s"
								title="Cavalo"
								description="uma bostiaushduyguiagfuYFGIUGIAUGHUHUIAJGHighiugtafgoaUYFGHUIHGTQUIEHWIOGTWJIHWIKUYT78a"
							/>
						</div>
					</div>
					<div>
						<h3 className="mb-6 bg-[#FFDCE0] rounded-2xl text-center text-[16px] w-24 p-1" >FAZENDO</h3>
						<div id="fazendo" className="flex flex-col gap-4">
							<Card
								imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtGy-jQ7O3ptA4Qa7tm-L2mLkp-PQq61jFzA&s"
								title="Cavalo"
								description="uma bostiaushduyguiagfuYFGIUGIAUGHUHUIAJGHighiugtafgoaUYFGHUIHGTQUIEHWIOGTWJIHWIKUYT78a"
							/>
							<Card
								imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtGy-jQ7O3ptA4Qa7tm-L2mLkp-PQq61jFzA&s"
								title="Cavalo"
								description="uma bostiaushduyguiagfuYFGIUGIAUGHUHUIAJGHighiugtafgoaUYFGHUIHGTQUIEHWIOGTWJIHWIKUYT78a"
							/>
							<Card
								imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtGy-jQ7O3ptA4Qa7tm-L2mLkp-PQq61jFzA&s"
								title="Cavalo"
								description="uma bostiaushduyguiagfuYFGIUGIAUGHUHUIAJGHighiugtafgoaUYFGHUIHGTQUIEHWIOGTWJIHWIKUYT78a"
							/>
						</div>
					</div>
					<div>
						<h3 className="mb-6 bg-[#CBDFD8] rounded-2xl text-center text-[16px] w-24 p-1" >FEITO</h3>
						<div id="feito" className="flex flex-col gap-4">
							<Card
								imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtGy-jQ7O3ptA4Qa7tm-L2mLkp-PQq61jFzA&s"
								title="Cavalo"
								description="uma bostiaushduyguiagfuYFGIUGIAUGHUHUIAJGHighiugtafgoaUYFGHUIHGTQUIEHWIOGTWJIHWIKUYT78a"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
