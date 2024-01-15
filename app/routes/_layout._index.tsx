import { faker } from "@faker-js/faker";
import placeholder from "~/assets/placeholder.jpeg";
import Read from "~/assets/read.svg?react";

function createBook() {
	return {
		id: faker.number.int(),
		name: faker.commerce.productName(),
	};
}

const featuredBooks = faker.helpers.multiple(createBook, { count: 8 });

type Book = ReturnType<typeof createBook>;

export default function Page() {
	return (
		<>
			<section className="flex flex-col items-center bg-primary text-primary-text">
				<h1 className="mt-12 text-center text-6xl font-thin uppercase">Get Engulfed</h1>
				<Read className="mt-20" />
				<div className="line-gradient" />
			</section>
			<section className="flex flex-col items-center bg-primary-text p-8 text-primary">
				<h1 className="text-center text-7xl font-medium uppercase">Featured Books</h1>
				<p className="mt-2 text-7xl font-bold text-primary/20">X</p>
				<div className="mt-6 grid grid-cols-4 gap-8">
					{featuredBooks.map((book) => (
						<FeaturedBook key={book.id} book={book} />
					))}
				</div>
			</section>
		</>
	);
}

function FeaturedBook({ book }: { book: Book }) {
	return (
		<div className="w-[250px]">
			<img
				src={placeholder}
				alt={`The book ${book.name}`}
				width={250}
				height={350}
				className="h-[350px] w-[250px] rounded-xl object-cover shadow-md"
			/>
			<p className="mt-2 text-center text-xl">{book.name}</p>
		</div>
	);
}
