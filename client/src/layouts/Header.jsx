import React from "react";

const Header = () => {
	return (
		<header className="h-10 flex justify-between align-bottom mr-24 ml-24">
			<h1 className="text-2xl font-extrabold font-cursive flex items-end">
				Dev Blog.
			</h1>
			<nav className="flex flex-row justify-between">
				<ul className="flex flex-row justify-between gap-10 ">
					<li className="h-full hover:underline">
						<a className="h-full flex items-center" href="/">
							Accueil
						</a>
					</li>
					<li className="h-full hover:underline">
						<a
							className="h-full flex items-center"
							href="/articles"
						>
							Articles
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
