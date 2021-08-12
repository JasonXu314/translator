import axios from 'axios';
import { NextPage } from 'next/types';
import { useEffect, useMemo, useState } from 'react';

const Index: NextPage = () => {
	const [inputLang, setInputLang] = useState<Langs>('ina');
	const outputLang = useMemo(() => (inputLang === 'eng' ? 'ina' : 'eng'), [inputLang]);
	const [input, setInput] = useState<string>('');
	const [output, setOutput] = useState<string>('');

	useEffect(() => {
		if (input.trim().length > 0) {
			const { token, cancel } = axios.CancelToken.source();

			const timeout = setTimeout(() => {
				setOutput('Loading Translation...');
				axios
					.get(`https://interlinguatranslator${inputLang}to${outputLang}.herokuapp.com/?text=${input}`, {
						cancelToken: token
					})
					.then((res) => {
						setOutput(res.data);
					});
			}, 500);

			return () => {
				cancel();
				clearTimeout(timeout);
			};
		}
	}, [input, inputLang, outputLang]);

	return (
		<div>
			<button
				onClick={() => {
					setInputLang(inputLang === 'eng' ? 'ina' : 'eng');
					setInput(output);
					setOutput('');
				}}>
				Change Language
			</button>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<div>
					<h4 style={{ margin: '0.25em 1em' }}>{inputLang}</h4>
					<textarea rows={6} cols={64} value={input} onChange={(evt) => setInput(evt.target.value)} />
				</div>
				<div>
					<h4 style={{ margin: '0.25em 1em' }}>{outputLang}</h4>
					<textarea rows={6} cols={64} value={output} readOnly />
				</div>
			</div>
		</div>
	);
};

export default Index;
