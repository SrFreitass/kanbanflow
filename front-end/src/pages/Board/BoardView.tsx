import { Card } from "../../components/card";

export function BoardView() {
	return (
		<div className="flex h-screen w-screen border-blue-100 gap-8 border-8">
			<div className="flex-shrink-0 w-24 border-red-200 border-2">
				<h2>barra lateral</h2>
			</div>
			<div className="flex-1 flex flex-col gap-10 mt-10  border-1 border-black">
				<div className=" flex flex-col text-left">
					<h1 className="">PROJETO VHS</h1>
					<p>Lorem, ipsum dolor.</p>
				</div>
				<div id="cards" className="flex p-5 h-[800px] rounded-2xl  gap-10 bg-[#F8F8F8]">
					<div>
						<h3>BACKLOG</h3>
						<div id="backlog">
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
						<h3>A FAZER</h3>
						<div id="aFazer">
							<Card
								imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtGy-jQ7O3ptA4Qa7tm-L2mLkp-PQq61jFzA&s"
								title="Cavalo"
								description="uma bostiaushduyguiagfuYFGIUGIAUGHUHUIAJGHighiugtafgoaUYFGHUIHGTQUIEHWIOGTWJIHWIKUYT78a"
							/>
						</div>
					</div>
					<div>
						<h3>FAZENDO</h3>
						<div id="aFazer">
							<Card
								imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtGy-jQ7O3ptA4Qa7tm-L2mLkp-PQq61jFzA&s"
								title="Cavalo"
								description="uma bostiaushduyguiagfuYFGIUGIAUGHUHUIAJGHighiugtafgoaUYFGHUIHGTQUIEHWIOGTWJIHWIKUYT78a"
							/>
						</div>
					</div>
					<div>
						<h3>FEITO</h3>
						<div id="aFazer">
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
