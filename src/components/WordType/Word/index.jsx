import React from "react";

export default function Word(props) {
	return (
		<label className="word-type__word" htmlFor={props.htmlFor}>
			{props.typedWord
				? [
						props.letterGroups.map((letterGroup, index) => {
							let className =
								"word-type__letters word-type__letters--";
							className += letterGroup.isMatching
								? "correct"
								: "incorrect";

							return (
								<mark className={className} key={index}>
									{letterGroup.letters}
								</mark>
							);
						}),
						props.goalWord.slice(props.typedWord.length)
				  ]
				: props.goalWord}
		</label>
	);
}