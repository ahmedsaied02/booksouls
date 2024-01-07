import { Link, Outlet } from "@remix-run/react";
import { Search as SearchIcon } from "lucide-react";
import LogoHeader from "~/assets/logo.header.svg?react";

export default function Layout() {
	return (
		<>
			<header className="flex flex-col items-center justify-center bg-primary text-primary-text">
				<LogoHeader />
				<div className="relative mt-4 w-full">
					<nav>
						<ul className="flex flex-row items-center justify-center">
							<NavItem to="/">Home</NavItem>
							<NavSeparator />
							<NavItem to="/categories">Categories</NavItem>
							<NavSeparator />
							<NavItem to="/authors">Authors</NavItem>
							<NavSeparator />
							<NavItem to="/library">Library</NavItem>
						</ul>
					</nav>
					<SearchButton className="absolute bottom-0 right-8 top-0" />
				</div>
			</header>
			<main>
				<Outlet />
			</main>
			<footer></footer>
		</>
	);
}

function NavSeparator() {
	return <div className="w-[100px] select-none text-center text-xs font-extralight">X</div>;
}

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
	return (
		<li
			className={`
				relative select-none
				before:absolute before:bottom-0 before:right-1/2 before:h-px before:w-0 before:bg-primary-text before:transition-[width] before:duration-500 before:ease-[ease]
				after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-0 after:bg-primary-text after:transition-[width] after:duration-500 after:ease-[ease]
				hover:before:w-1/2
				hover:after:w-1/2
      		`}
		>
			<Link to={to}>{children}</Link>
		</li>
	);
}

function SearchButton({ className }: { className?: string }) {
	// TODO: Implement search
	return (
		<button className={className}>
			<SearchIcon />
		</button>
	);
}
