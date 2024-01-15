import { Link, Outlet } from "@remix-run/react";
import { Search as SearchIcon } from "lucide-react";
import React from "react";
import CrueltyFreeIcon from "~/assets/cruelty-free.svg?react";
import footerLogo from "~/assets/logo-footer.svg";
import headerLogo from "~/assets/logo.svg";
import { IconButton } from "~/components/IconButton";

export default function Layout() {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}

function Header() {
	return (
		<header className="flex flex-col items-center justify-center bg-primary text-primary-text">
			<img src={headerLogo} alt="Book Souls logo" width={266} height={75} />
			<div className="relative mt-4 w-full">
				<nav>
					<ul className="flex flex-row items-center justify-center">
						<HeaderNavItem to="/">Home</HeaderNavItem>
						<HeaderNavSeparator />
						<HeaderNavItem to="/categories">Categories</HeaderNavItem>
						<HeaderNavSeparator />
						<HeaderNavItem to="/authors">Authors</HeaderNavItem>
						<HeaderNavSeparator />
						<HeaderNavItem to="/library">Library</HeaderNavItem>
					</ul>
				</nav>
				<IconButton className="absolute right-6 top-1/2 -translate-y-1/2">
					<SearchIcon />
				</IconButton>
			</div>
		</header>
	);
}

function HeaderNavSeparator() {
	return <div className="w-[100px] select-none text-center text-[8px] font-extralight">X</div>;
}

function HeaderNavItem({ to, children }: { to: string; children: React.ReactNode }) {
	return (
		<li>
			<Link
				to={to}
				className="
					relative select-none
					before:absolute before:bottom-0 before:right-1/2 before:h-px before:w-0 before:bg-primary-text before:transition-[width] before:duration-500 before:ease-[ease]
					after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-0 after:bg-primary-text after:transition-[width] after:duration-500 after:ease-[ease]
					hover:before:w-1/2
					hover:after:w-1/2
				"
			>
				{children}
			</Link>
		</li>
	);
}

function Footer() {
	return (
		<footer className="relative bg-primary px-6 pb-4 pt-7 text-primary-text">
			<div className="flex justify-between">
				<div className="flex w-[200px] flex-col items-center">
					<img src={footerLogo} alt="Book Souls logo" width={158.25} height={148.5} />
					<p className="text-center text-sm font-light">
						Get Engulphed and Explore a New Magical World
					</p>
				</div>
				<FooterNav className="mt-8" />
				<EmailContactForm className="mt-8" />
			</div>
			<p className="mt-12 font-light">Copyright © 2024 Book Souls Inc. All rights reserved.</p>
			<CrueltyFreeIcon className="absolute bottom-4 right-6" />
		</footer>
	);
}

function FooterNav({ className }: { className: string }) {
	return (
		<nav className={`flex flex-grow justify-center gap-20 ${className}`}>
			<section>
				<FooterSectionHeader>About</FooterSectionHeader>
				<ul>
					<FooterNavItem to="/about">About Us</FooterNavItem>
					<FooterNavItem to="/terms-and-privacy">Terms & Privacy</FooterNavItem>
				</ul>
			</section>
			<section>
				<FooterSectionHeader>Customer Care</FooterSectionHeader>
				<ul>
					<FooterNavItem to="/contact-us">Contact Us</FooterNavItem>
					<FooterNavItem to="/faq">FAQ</FooterNavItem>
				</ul>
			</section>
			<section>
				<FooterSectionHeader>Other</FooterSectionHeader>
				<ul>
					<FooterNavItem to="/about-ai">About AI</FooterNavItem>
				</ul>
			</section>
		</nav>
	);
}

function FooterSectionHeader({ children }: { children: React.ReactNode }) {
	return <h3 className="text-lg uppercase">{children}</h3>;
}

function FooterNavItem({ to, children }: { to: string; children: React.ReactNode }) {
	return (
		<li className="mt-2">
			<Link to={to} className="font-extralight hover:underline">
				{children}
			</Link>
		</li>
	);
}

function EmailContactForm({ className }: { className: string }) {
	return (
		<form className={className} onSubmit={(e) => e.preventDefault()}>
			<label htmlFor="email" className="mb-1 block text-lg uppercase">
				Stay in touch
			</label>
			<div
				className="
					flex border border-primary-text
					focus-within:outline focus-within:outline-offset-2 focus-within:outline-primary-text
				"
			>
				<input
					id="email"
					type="email"
					placeholder="Email..."
					className="
						h-10 bg-transparent px-2 py-1
						placeholder:text-primary-text/50
						focus:outline-none
					"
				/>
				<button className="w-8 bg-primary-text font-medium uppercase text-primary">Go</button>
			</div>
		</form>
	);
}
