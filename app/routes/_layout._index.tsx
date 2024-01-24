import { faker } from "@faker-js/faker";
import { useLoaderData } from "@remix-run/react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import placeholder from "~/assets/placeholder.jpeg";
import Read from "~/assets/read.svg?react";
import { IconButton } from "~/components/IconButton";
import { LineGradient } from "~/components/LineGradient";

function createFakeBook() {
	return {
		id: faker.number.int(),
		name: faker.commerce.productName(),
		description: faker.commerce.productDescription(),
	};
}

type Book = ReturnType<typeof createFakeBook>;

export function loader() {
	return {
		featuredBooks: faker.helpers.multiple(createFakeBook, { count: 8 }),
	};
}

export default function Page() {
	const { featuredBooks } = useLoaderData<typeof loader>();
	return (
		<>
			<section className="flex flex-col items-center bg-primary text-primary-text">
				<h1 className="mt-12 text-center text-6xl font-thin uppercase">Get Engulfed</h1>
				<Read className="mt-20" />
				<LineGradient />
			</section>
			<section className="flex flex-col items-center bg-primary-text p-8 text-primary">
				<h1 className="text-center text-7xl font-medium uppercase">Featured Books</h1>
				<p className="mt-2 text-7xl font-bold text-primary/20">X</p>
				<div className="mt-6 grid grid-cols-4 gap-10">
					{featuredBooks.map((book) => (
						<FeaturedBook key={book.id} book={book} />
					))}
				</div>
			</section>
			<FeaturedBooksCarousel books={featuredBooks.slice(0, 4)} />
		</>
	);
}

function FeaturedBook({ book }: { book: Book }) {
	return (
		<div className="w-[200px]">
			<img
				src={placeholder}
				alt={`The book "${book.name}"`}
				width={200}
				height={300}
				className="h-[300px] w-[200px] rounded-xl object-cover shadow-md"
			/>
			<p className="mt-2 text-center text-xl">{book.name}</p>
		</div>
	);
}

function FeaturedBooksCarousel({ books }: { books: Book[] }) {
	const [ref, carousel] = useEmblaCarousel();
	const [index, setIndex] = React.useState(0);

	React.useEffect(() => {
		function onSelect() {
			if (!carousel) return;
			setIndex(carousel.selectedScrollSnap());
		}

		carousel?.on("select", onSelect);

		return () => {
			carousel?.off("select", onSelect);
		};
	}, [carousel]);

	return (
		<div className="relative">
			<div
				ref={ref}
				className="overflow-hidden bg-gradient-to-r from-primary to-secondary text-primary-text"
			>
				<div className="flex items-center">
					{books.map((book) => (
						<FeaturedBooksCarouselItem key={book.id} book={book} />
					))}
				</div>
				<div className="my-4 flex justify-center gap-4">
					{books.map((_, i) => (
						<FeaturedBooksCarouselIndicator key={i} active={i === index} />
					))}
				</div>
			</div>
			<IconButton
				disabled={index === 0}
				className="
					absolute left-6 top-1/2 -translate-y-1/2
					disabled:text-neutral-300/[38%] disabled:before:opacity-0
				"
				onClick={() => carousel?.scrollPrev()}
			>
				<ChevronLeftIcon />
			</IconButton>
			<IconButton
				disabled={index === books.length - 1}
				className="
					absolute right-6 top-1/2 -translate-y-1/2
					disabled:text-neutral-300/[38%] disabled:before:opacity-0
				"
				onClick={() => carousel?.scrollNext()}
			>
				<ChevronRightIcon />
			</IconButton>
		</div>
	);
}

function FeaturedBooksCarouselItem({ book }: { book: Book }) {
	return (
		<div key={book.id} className="flex flex-[0_0_100%] items-center justify-center gap-12 p-6">
			<img
				src={placeholder}
				alt={`The book "${book.name}"`}
				width={250}
				height={375}
				className="h-[375px] w-[250px] rounded-xl object-cover shadow-md"
			/>
			<div className="max-w-xl">
				<h1 className="text-3xl">{book.name}</h1>
				<p className="mt-2">{book.description}</p>
			</div>
		</div>
	);
}

function FeaturedBooksCarouselIndicator({ active }: { active: boolean }) {
	return (
		<span
			className={`h-2 w-2 rounded-full ${active ? "bg-primary-text" : "bg-primary-text/25"}`}
			aria-current={active}
		/>
	);
}
