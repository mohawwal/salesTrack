import { MessageCircle, Bell, DotSquareIcon } from "lucide-react";
import UpImg from "../assets/images/upImg.jpg";

export const RightBar = () => {
	const notificationMsg = [
		{
			icon: MessageCircle,
			subject: "You Are doing a great Job",
			time: "Just now",
		},
		{
			icon: Bell,
			subject: "New updates are available.",
			time: "50 minutes ago",
		},
		{
			icon: MessageCircle,
			subject: "You have a new message from Admin.",
			time: "Today 11:50pm",
		},
	];

	const activityMsg = [
		{
			profile: UpImg,
			subject: "Your order has been shipped.",
			time: "Just now",
		},
		{
			profile: UpImg,
			subject: "New user registered.",
			time: "Today 11:50pm",
		},
		{
			profile: UpImg,
			subject: "You have a pending task to complete.",
			time: "5 days ago",
		},
		{
			profile: UpImg,
			subject: "Admin added a new staff.",
			time: "Just now",
		},
		{
			profile: UpImg,
			subject: "New user registered.",
			time: "Today 11:50pm",
		},
		{
			profile: UpImg,
			subject: "You have a pending task to complete.",
			time: "5 days ago",
		},
	];

	const contacts = [
		{
			user: UpImg,
			name: "John Doe",
			status: "Active",
		},
		{
			user: UpImg,
			name: "Jane Smith",
			status: "Offline",
		},
		{
			user: UpImg,
			name: "Alice Johnson",
			status: "Active",
		},
		{
			user: UpImg,
			name: "John Doe",
			status: "Active",
		},
		{
			user: UpImg,
			name: "Jane Smith",
			status: "Offline",
		},
		{
			user: UpImg,
			name: "Alice Johnson",
			status: "Active",
		},
	];
	console.log(activityMsg.length);

	return (
		<div className="border-l-[1px] border-border h-full p-2">
			<div>
				<div>
					<span className="font-light text-[13.5px] flex justify-start gap-1 items-center py-1">
						<DotSquareIcon className="w-3" /> Notification
					</span>
					<div>
						{notificationMsg.map((msg, index) => (
							<div
								key={index}
								className="flex items-center space-x-2 mb-2"
							>
								<div className="w-[20px] h-[20px] rounded-full flex items-center justify-center">
									<msg.icon className="text-gray-600 w-[12px]" />
								</div>
								<div className="w-[80%] flex flex-col gap-[2px]">
									<span className="text-[12px] leading-tight">{msg.subject}</span>
									<div className="text-[10.8px] text-gray-500">{msg.time}</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="my-4">
					<span className="font-light text-[13.5px] flex justify-start gap-1 items-center py-1">
						<DotSquareIcon className="w-3" /> Activities
					</span>
					<div>
						{activityMsg.map((msg, index) => (
							<div
								key={index}
								className="flex"
							>
								<div className="flex justify-between gap-2 w-[100%]">
									<div className="w-[15%] flex flex-col items-center">
										<img
											src={UpImg}
											alt="profile"
											className="w-[30px] h-[30px] rounded-full"
										/>
										<div className="w-full h-full flex items-center justify-center">
											{index < activityMsg.length - 1 && (
												<div className="w-[1px] h-[100%] bg-gray-300"></div>
											)}
										</div>
									</div>
									<div className="w-[85%] h-[100%] flex flex-col items-start justify-start">
										<span className="text-[12px] leading-tight">{msg.subject}</span>
										<div className="text-[10.8px] text-gray-500">{msg.time}</div>
										<div className="w-[full] h-3"></div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="my-4 pb-3">
					<span className="font-light text-[13.5px] flex justify-start gap-1 items-center py-1">
						<DotSquareIcon className="w-3" /> Contacts
					</span>
					<div>
						{contacts.map((contact, index) => (
							<div
								key={index}
								className="flex items-center mb-1 w-[100%]"
							>
								<div className="w-[15%]">
									<img
										src={UpImg}
										alt="profile"
										className="w-[30px] h-[30px] rounded-full"
									/>
								</div>
								<div className="w-[85%]">
									<span className="text-[12px] leading-tight">{contact.name}</span>
									<div className="text-[10.8px] text-gray-500">
										{contact.status}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
