import { Link } from "@remix-run/react";
import AboutIcon from "~/assets/about.svg?react";
import HeaderLogo from "~/assets/logo.svg?react";
import placeholder from "~/assets/placeholder.jpeg";

export default function About() {
	return (
		<>
			<div className="bg-primary-text ">
				<div className="absolute left-[80px] top-[50px] z-10 flex h-[620px] w-[1050px] flex-col items-center bg-secondary">
					<h1 className="py-5 text-4xl text-primary-text ">About Book Souls</h1>
				</div>
				<div className="absolute right-[80px] top-0 h-full w-[500px] bg-primary">
					<Link to="/">
						<HeaderLogo className="absolute right-6 top-0 z-20  w-40"></HeaderLogo>
					</Link>
					<div>
						<h1>Meet The Creators</h1>
						<div className="absolute z-30 grid h-full grid-cols-2 justify-center">
							<Creator to="#" source={placeholder}></Creator>
							<Creator to="#" source={placeholder}></Creator>
							<Creator to="#" source={placeholder}></Creator>
							<Creator to="#" source={placeholder}></Creator>
							<Creator to="#" source={placeholder}></Creator>
							<Creator to="#" source={placeholder}></Creator>
						</div>
					</div>
					<AboutIcon className="absolute bottom-0 right-0 z-20  w-96 "></AboutIcon>
				</div>
			</div>
		</>
	);
}
function Creator({ to, source }: { to: string; source: string }) {
	return (
		<li>
			<Link to={to} className="rounded-full bg-primary-text ">
				<img
					src={source}
					alt="creator"
					width={80}
					height={80}
					className="h-[80px] w-[80px] rounded-full"
				/>
			</Link>
		</li>
	);
}
