const Card = (d) => {
	// console.log("---->", d.data.htmlCode[0]);
	// const emo = document.createTextNode(`${d.data.htmlCode[0]}`);
	const emojiUnicode = d.data.htmlCode[0].replace(/&#(\d+);/g, (match, dec) =>
		String.fromCodePoint(dec)
	);

	return (
		<div className="card">
			<p className="emoji">{emojiUnicode}</p>
			<div className="showcode">
				<abbr title="copy" style={{ textDecoration: "none" }}>
					&lt;/&gt;
				</abbr>
			</div>
			<div className="code">{d.data.htmlCode[0]}</div>
		</div>
	);
};

const Content = (props) => {
	// console.log(data);
	return (
		<div className="contentConatainer">
			{props.data.map((val, index) => {
				return <Card data={val} key={index} />;
			})}
		</div>
	);
};

export default Content;
