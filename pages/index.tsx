import axios from 'axios';
import Head from 'next/head';
import { NextPage } from 'next/types';
import { useEffect, useMemo, useState } from 'react';
import Button from '../components/Button/Button';
import styles from '../sass/Index.module.scss';

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
					.get(`/api?text=${encodeURI(input)}&direction=${outputLang === 'ina' ? 1 : 0}`, {
						cancelToken: token
					})
					.then((res) => {
						setOutput(res.data);
					})
					.catch((err) => {
						console.error(err);
					});
			}, 500);

			return () => {
				cancel();
				clearTimeout(timeout);
			};
		}
	}, [input, inputLang, outputLang]);

	return (
		<div className={styles.main}>
			<Head>
				<link rel="icon" href="https://interlingua-translator.vercel.app/favicon.png" />
		
				<meta property="og:title" content="Interlingua Corpus Project" />
				<meta property="og:image" content="https://interlingua-translator.vercel.app/favicon.png" />
				<meta property="og:description" content="Welcome to the Interlingua Corpus Project! The goal of the Interlingua Corpus Project is to aggregate a large collection of Interlingua sentences as a community resource. The sentences in this corpus, including matched pairs of Interlingua-English sentences, are automatically collected from public websites and documents using a web crawler." />

				<title>Online Interlingua-English Translator</title>
				<meta
					name="description"
					content="Interlingua translator provides Interlingua vocabulary and grammar in context for language learners and linguistic analyses."
				/>
				<meta
					name="keywords"
					content="Interlingua, sentences, vocabulary, grammar, IALA, language, corpus, linguistics, international auxiliary language, IAL, romance languages, word, frequency, conlang, auxlang, constructed language, Esperanto, Ido, Interlingue, Occidental, Latino sine flexione"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="author" content="Jason Ding, Jason Xu" />
			</Head>
			<div className={styles.welcome}>
				<h1>Online Interlingua-English Translator</h1>
				Welcome to the first online, public, and free and open source Interlingua and English translator! Input your text in the left text box and the
				translated sentence will be shown in the right text box. Click the &quot;Change Language&quot; button below to change the translator&apos;s
				direction.
			</div>
			<div className={styles['lang-row']}>
				<h4 className={styles.lang}>{inputLang === 'eng' ? 'English' : 'Interlingua'}</h4>
				<h4 className={styles.lang}>{outputLang === 'eng' ? 'English' : 'Interlingua'}</h4>
			</div>
			<div className={styles['control-row']}>
				<textarea rows={12} cols={96} value={input} maxLength={999} onChange={(evt) => setInput(evt.target.value)} />
				<div className={styles['btn-container']}>
					<Button
						onClick={() => {
							setInputLang(inputLang === 'eng' ? 'ina' : 'eng');
							setInput(output);
							setOutput('');
						}}>
						<img src="/swap.svg" alt="Swap Languages" />
					</Button>
				</div>
				<textarea rows={12} cols={96} value={output} readOnly />
			</div>
			<br></br>
			<div className={styles.information}>
				<h2>Information</h2>
				Interlingua is an international auxiliary language (IAL). IALs, such as Esperanto, are artificial languages that are constructed to simplify
				communication between speakers who do not share a common first language. Interlingua’s vocabulary and grammar are derived from a combination of
				different Romance languages. Therefore, many schools and universities teach Interlingua as a way of teaching other Romance languages more easily,
				and Interlingua has been embraced by parts of the scientific community. <br></br> <br></br>
				Despite its increasing popularity, Interlingua is not supported by online translation tools such as Google Translate. The purpose of this research
				project is to bridge this gap, by creating the first computer program that can translate text between English and Interlingua. The hope was that
				the translation tool would act as a valuable educational resource to Interlingua learners, and it might spread awareness of Interlingua to a
				broader audience. <br></br>
			</div>
			<br></br>
			<div className={styles.information}>
				<h2>More Resources</h2>
				<div className={styles['more-resources']}>
					<h4>Interlingua Corpus Project</h4>
					Created by Jason Ding with the help of his mentor, Todd Mockler, the Interlingua Corpus Project has a collection of over 1.2 million
					quality-controlled Interlingua sentences scraped from an individually-designed web crawler that has visited over 6 million relevant websites,
					while also providing over 80,000 parallel Interlingua-English sentences and other useful data.
					<br></br>
					<a target="_blank" rel="noreferrer noopener" href="http://www.interlinguacorpus.org/">
						Link to the Interlingua Corpus Project
					</a>
					<br></br>
					<br></br>
					<h4>Google Colab Interlingua Translator</h4>
					Created by Jason Ding with the help of his mentor, Todd Mockler, the first online, public, and free Interlingua and English translator was
					created. This translator uses the strongest Interlingua-English translator model there is to translate in both directions between English and
					Interlinuga.
					<br></br>
					The model has scored a BLEU score of 42.45 going from English to Interlingua and a 42.54 going from Interlingua to English, both of which are
					&quot;high quality translation&quot; according to one of{' '}
					<a target="_blank" rel="noreferrer noopener" href="https://cloud.google.com/translate/automl/docs/evaluate">
						Google&apos;s articles.
					</a>
					<br></br>
					<a target="_blank" rel="noreferrer noopener" href="https://colab.research.google.com/drive/1SFewmDos1Z-Gq9z6OB9tgxaBsNdZvaT3?usp=sharing">
						Link to the Google Collab Interlingua-English Translator
					</a>
					<br></br>
					<br></br>
					<h4>Source Code</h4>
					All source code and code used in all of the projects will be posted in the following GitHub account.
					<br></br>
					<a target="_blank" rel="noreferrer noopener" href="https://github.com/JasonDing9">
						Link to the GitHub account
					</a>
				</div>
			</div>

			<br></br>
			<div className={styles.information}>
				<h2>Credits</h2>
				<div className={styles['more-resources']}>
					<ul>
						<h4>
							Jason Ding - <i>Lead Project Designer and Computational Linguistics Programmer</i>
						</h4>
						<ul>
							<li>Contact Email: jasonding@berkeley.edu</li>
							<li>Education: Current student at UC Berkeley (2021 - 2025)</li>
						</ul>
						<h4>
							Todd Mockler - <i>Mentor</i>
						</h4>
						<ul>
							<li>Contact Email: TMockler@danforthcenter.org</li>
							<li>About: Principal Investigator at the Donald Danforth Plant Science Center</li>
						</ul>
					</ul>
				</div>
			</div>

			<div className={styles['viewer-counts']}>
				<div className={styles.regular}>
					This site has been visited{' '}
					<img src="https://hitwebcounter.com/counter/counter.php?page=7856187&style=0008&nbdigits=3&type=page&initCount=0" alt="web counter" /> times
				</div>
				<div className={styles.unique}>
					This site has been visited by{' '}
					<img src="https://hitwebcounter.com/counter/counter.php?page=7856188&style=0008&nbdigits=3&type=ip&initCount=0" alt="web counter" /> people
				</div>
				<div>
					This website&apos;s source can be found{' '}
					<a href="https://github.com/JasonXu314/translator" target="_blank" rel="noreferrer noopener">
						here
					</a>
				</div>
			</div>
		</div>
	);
};

export default Index;
