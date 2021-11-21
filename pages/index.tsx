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
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
 				<script src="https://kit.fontawesome.com/a076d05399.js" 
				 	crossOrigin="anonymous"></script>
				<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" />

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
				<h1><b>Online Interlingua-English Translator</b></h1>
				Welcome to the first online, public, and free and open source Interlingua and English translator! Input your text in the left text box and the
				translated sentence will be shown in the right text box. Click the &quot;Change Language&quot; button below to change the translator&apos;s
				direction.
			</div>
			<div className={styles['lang-row']}>
				<h4 className={styles.lang}>{inputLang === 'eng' ? 'English' : 'Interlingua'}</h4>
				<h4 className={styles.lang}>{outputLang === 'eng' ? 'English' : 'Interlingua'}</h4>
			</div>
			<div className={styles['control-row']}>
				<textarea rows={8} cols={96} value={input} maxLength={999} onChange={(evt) => setInput(evt.target.value)} />
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
				<textarea rows={8} cols={96} value={output} readOnly />
			</div>
			<br></br>

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
					<p><i className={styles['icon-github']}></i><a
						href="https://github.com/JasonXu314/translator"> See how this site was made</a></p>
				</div>
			</div>
		</div>
	);
};

export default Index;
