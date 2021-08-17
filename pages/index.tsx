import axios from 'axios';
import { NextPage } from 'next/types';
import { useEffect, useMemo, useState } from 'react';

const Index: NextPage = () => {
	const [inputLang, setInputLang] = useState<Langs>('eng');
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
			<h1>Online Interlingua Translator</h1>

			<div className="welcome">
				Welcome to the first online, public, and free Interlingua and English translator! Input your text in the
				left text box and the translated sentence will be shown in the right text box. Click the "Change Language"
				button below to change the translator's direction.
			</div>

			<br></br>

			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<div>
					<h4 style={{ margin: '0.25em 0.25em' }}>{inputLang === 'eng' ? 'English' : 'Interlingua'}</h4>
					<textarea rows={9} cols={96} value={input} onChange={(evt) => setInput(evt.target.value)} />
				</div>
				<div>
					<h4 style={{ margin: '0.25em 0.25em' }}>{outputLang === 'eng' ? 'English' : 'Interlingua'}</h4>
					<textarea rows={9} cols={96} value={output} readOnly />
				</div>
			</div>

			<button
				onClick={() => {
					setInputLang(inputLang === 'eng' ? 'ina' : 'eng');
					setInput(output);
					setOutput('');
				}}>
				Change Language
			</button>

			<br></br>

			<h2>Information</h2>

			<div className="information">
				Interlingua is an international auxiliary language (IAL). IALs, such as Esperanto, are artificial languages 
	           that are constructed to simplify communication between speakers who do not share a common first language. 
	           Interlingua’s vocabulary and grammar are derived from a combination of different Romance languages. Therefore, 
	           many schools and universities teach Interlingua as a way of teaching other Romance languages more easily, and 
	           Interlingua has been embraced by parts of the scientific community.  <br></br>  <br></br>

				Despite its increasing popularity, Interlingua is not supported by online translation tools such as Google 
				Translate. The purpose of this research project is to bridge this gap, by creating the first computer program 
				that can translate text between English and Interlingua. The hope was that the translation tool would act as 
				a valuable educational resource to Interlingua learners, and it might spread awareness of Interlingua to a 
				broader audience. <br></br>
			</div>

			<br></br>

			<div className="content">
                    <div className="more_resources">
                        <h2>More Resources</h2>

                        <h4>Interlingua Corpus Project</h4>
                            Created by Jason Ding with the help of his mentor, Todd Mockler, the Interlingua Corpus Project has 
                            a collection of over 1.2 million quality-controlled Interlingua sentences scraped from an individually-designed 
                            web crawler that has visited over 6 million relevant websites, while also providing over 80,000 parallel 
                            Interlingua-English sentences and other useful data.

                            <br></br>
                            <a href="https://interlingua-translator.vercel.app/">Link to the Interlingua-English Translator</a>
                        <br></br>

                        <h4>Google Colab Interlingua Translator</h4>
                            Created by Jason Ding with the help of his mentor, Todd Mockler, the first online, public, and free 
                            Interlingua and English translator was created. This translator uses the strongest Interlingua-English 
                            translator model there is to translate in both directions between English and Interlinuga.
                            <br></br>

                            The model has scored a BLEU score of 42.45 going from English to Interlingua and a 42.54 going from
                            Interlingua to English, both of which are "high quality translation" according to one of <a href="https://cloud.google.com/translate/automl/docs/evaluate">Google's
                            articles.</a>
                            <br></br>
                            <a href="https://colab.research.google.com/drive/1SFewmDos1Z-Gq9z6OB9tgxaBsNdZvaT3?usp=sharing">Link to the Google Colab Interlingua-English Translator</a>
                        <br></br>

                        <h4>Source Code</h4>
                            All source code and code used in all of the projects will be posted in the following GitHub account.
                            <br></br>
                            <a href="https://github.com/JasonDing9">Link to the GitHub account</a>

                    </div>
            </div>
		</div>


	);
};

export default Index;
