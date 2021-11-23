import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
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
				<title>Online Interlingua-English Translator</title>
				<link
					rel="stylesheet"
					href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
					integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu"
					crossOrigin="anonymous"></link>
				<script
					src="http://code.jquery.com/jquery-3.3.1.js"
					integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
					crossOrigin="anonymous"></script>
				<script
					src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"
					integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd"
					crossOrigin="anonymous"></script>
				<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
				
				<meta
					name="description"
					content="Interlingua translator provides Interlingua vocabulary and grammar in context for language learners and linguistic analyses."
				/>
				<meta property="og:url" content="https://interlingua-translator.vercel.app/" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Online Interlingua-English Translator" />
				<meta
					property="og:description"
					content="Interlingua translator provides Interlingua vocabulary and grammar in context for language learners and linguistic analyses."
				/>
				<meta property="og:image" content="http://www.interlinguacorpus.org/Interlingua%20Translator%20Logo%20Big.png" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content="interlingua-translator.vercel.app" />
				<meta property="twitter:url" content="https://interlingua-translator.vercel.app/" />
				<meta name="twitter:title" content="Online Interlingua-English Translator" />
				<meta
					name="twitter:description"
					content="Interlingua translator provides Interlingua vocabulary and grammar in context for language learners and linguistic analyses."
				/>
				<meta name="twitter:image" content="http://www.interlinguacorpus.org/Interlingua%20Translator%20Logo%20Big.png" />
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
			<nav className={styles.navbar}>
				<div className={styles.container}>
					<div className={styles['navbar-header']}>
						<a href="/" className={styles.brand}>
							<img
								src="https://www.interlinguacorpus.org/Interlingua%20Translator%20Logo%20Big.png"
								alt="Interlingua Corpus Project Logo"
								width="95.5px"
								height="50px"
							/>
						</a>
					</div>

					<ul className="nav navbar-nav">
						<li>
							<Link href="/">
								<a> Interlingua-English Translator </a>
							</Link>
						</li>
						<li>
							<Link href="/faq">
								<a> FAQ </a>
							</Link>
						</li>
						<li>
							<Link href="/more-resources">
								<a> More Resources </a>
							</Link>
						</li>
						<li>
							<Link href="/creators">
								<a> Creators </a>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
			<div className={styles.welcome}>
				<h1><b>More Resources</b></h1>
			</div>
			
			<div className={styles.information}>
				<div className={styles['more-resources']}>
					<h4>Interlingua Corpus Project</h4>
					Created by Jason Ding with the help of his mentor, Todd Mockler, the Interlingua Corpus Project has a collection of over 1.2 million quality-controlled Interlingua sentences scraped from an individually-designed 
					web crawler that has visited over 6 million relevant websites, while also providing over 80,000 parallel Interlingua-English sentences and other useful data.<br></br> <br></br>
						&nbsp;&nbsp;&nbsp;<a href="http://www.interlinguacorpus.org/" className={styles['special-a']}><i className={styles["icon-book"]}></i> Link to the Interlingua Corpus Project</a>
					<br></br>

					<hr></hr>

					<h4>Google Colab Interlingua Translator</h4>
						Created by Jason Ding with the help of his mentor, Todd Mockler, the first online, public, and free and 
						open source Interlingua and English translator was created. This translator uses the strongest Interlingua-English 
						translator model there is to translate in both directions between English and Interlinuga.<br></br> <br></br>

						The model has scored a BLEU score of 42.45 going from English to Interlingua and a 42.54 going from
						Interlingua to English, both of which are "high quality translation" according to one of <a href="https://cloud.google.com/translate/automl/docs/evaluate" className={styles["special-a"]}>Google's
						articles.</a><br></br> <br></br>
						&nbsp;&nbsp;&nbsp;<a href="https://colab.research.google.com/drive/1SFewmDos1Z-Gq9z6OB9tgxaBsNdZvaT3?usp=sharing" className={styles["special-a"]}><i className={styles["icon-google"]}></i> Link to the Google Colab Interlingua-English Translator</a>
					<br></br>

					<hr></hr>

					<h4>Source Code</h4>
						All source code and code used in all of the projects will be posted in the following GitHub account.<br></br> <br></br>
						&nbsp;&nbsp;&nbsp;<a href="https://github.com/JasonDing9" className={styles["special-a"]}><i className={styles["icon-github"]}></i> Link to the GitHub account</a>
				</div>

				<hr></hr>
			</div>

			<div className={styles['viewer-counts']}>
				<hr></hr>

				<div>
					Please email <a href="mailto:interlinguacorpus@gmail.com" className={styles["special-a"]}>interlinguacorpus@gmail.com</a> for questions and suggestions.
				</div>

				<div className={styles.regular}>
					This site has been visited{' '}
					<img src="https://hitwebcounter.com/counter/counter.php?page=7856187&style=0008&nbdigits=3&type=page&initCount=0" alt="web counter" /> times
				</div>
				<div>
					<p><a href="https://github.com/JasonXu314/translator" className={styles["special-a"]}>
						<i className={styles['icon-github']}></i> See how this site was made</a> <br></br>
					<a href="https://colab.research.google.com/drive/1SFewmDos1Z-Gq9z6OB9tgxaBsNdZvaT3?usp=sharing" className={styles["special-a"]}> 
						<i className={styles['icon-google']}></i> See the Google Colab source code for the translator</a></p>
				</div>
			</div>
		</div>
	);
};

export default Index;
