import Head from 'next/head';
import Link from 'next/link';
import { NextPage } from 'next/types';
import { useState } from 'react';
import styles from '../sass/Index.module.scss';

const Index: NextPage = () => {
	const [open, setOpen] = useState<boolean[]>([false, false, false, false, false, false]);

	return (
		<div className={styles.main}>
			<Head>
				<title>Online Interlingua-English Translator | FAQ</title>
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
				<h1><b>Frequently Asked Questions</b></h1>
			</div>

			<br></br>

			<div className={styles.information}>
				<tr>
					<td valign="top">
						<button type="button" className={styles.collapsible} onClick={() => setOpen(open.map((v, i) => (i === 0 ? !v : v)))}>
							What is interlingua?
						</button>
						<div className={styles.content + (open[0] ? ' ' + styles.shown : '')}>
							<br></br>
							Interlingua (ISO 639 language codes ia, ina) is a naturalistic planned Italic international auxiliary language (IAL), developed between
							1937 and 1951 by the International Auxiliary Language Association (IALA). Its vocabulary and grammar are derived from a wide range of
							western European natural languages. Interlingua was developed to combine a simple, mostly regular grammar with a vocabulary common to
							English, French, Italian, Spanish and Portuguese. These characteristics make it especially easy to learn for those whose native languages
							were sources of Interlingua&apos;s vocabulary and grammar. Interlingua can also be used as a rapid introduction to many natural languages.
							Written Interlingua is largely comprehensible to the hundreds of millions of people who speak Romance languages.
							<br></br> <br></br>
						</div>

						<button type="button" className={styles.collapsible} onClick={() => setOpen(open.map((v, i) => (i === 1 ? !v : v)))}>
							What is the purpose of the Interlingua Corpus Project?
						</button>
						<div className={styles.content + (open[1] ? ' ' + styles.shown : '')}>
							<br></br>
							The goal of the Interlingua Corpus Project is to aggregate a large collection of Interlingua sentences as a community resource. The
							sentences in this corpus, including matched pairs of Interlingua-English sentences, are automatically collected from public websites and
							documents using a web crawler. The emphasis of this project is on sentences because sentences provide vocabulary in context and represent
							the grammar as used in various styles of writing. This collection of Interlingua sentences will provide a foundation for a variety of uses
							including enumeration of Interlingua&apos;s core vocabulary and development of comprehensive frequency dictionaries for language learners,
							corpus linguistics studies, and for the development of computational linguistics resources such as language models and machine translation
							tools for Interlingua.
							<br></br> <br></br>
						</div>

						<button type="button" className={styles.collapsible} onClick={() => setOpen(open.map((v, i) => (i === 2 ? !v : v)))}>
							Is there a translator between English and Interlingua?
						</button>
						<div className={styles.content + (open[2] ? ' ' + styles.shown : '')}>
							<br></br>
							Yes, there is! You can find a link to it, as well as source code, in the &quot;more resources&quot; tab.
							<br></br> <br></br>
						</div>

						<button type="button" className={styles.collapsible} onClick={() => setOpen(open.map((v, i) => (i === 3 ? !v : v)))}>
							What was the process of this project?
						</button>
						<div className={styles.content + (open[3] ? ' ' + styles.shown : '')}>
							<br></br>
							Written by Jason Ding on August 14th, 2021<br></br> <br></br>I perform all work on this research project. I am directly supervised by Dr.
							Todd Mockler, a Principal Investigator at the Danforth Science Center.<br></br> <br></br>
							The project was started in May of 2020 when I was an incoming junior in high school. The final goal of the project was to create an
							Interlingua-English Translator.<br></br> <br></br>I came into the project with no knowledge of either Interlingua or Neural Networks.
							However, I devised and followed a plan to make the translator come to life.<br></br> <br></br>
							The project has three main phases.<br></br> <br></br>
							First, I needed to construct a large collection of Interlingua sentences by creating a web crawler program to automatically extract data
							from the Internet. In order to do this, I learned how to created a web crawler (i.e., a computer program that automatically searches
							through the Internet) that extracts any sentences written in Interlingua in both the HTML and the website&apos;s downloadable documents. I
							taught myself to use various Python modules, such as BeautifulSoup, requests, and os, while also learning and inventing techniques to do
							tasks such as accurately separating sentences from paragraphs. The final version of my web crawler program visited 6,373,297 websites and
							collected over 1,200,000 unique Interlingua sentences.<br></br> <br></br>
							Second, I needed to collect as many matched pairs of Interlingua-English sentences as I could. To do this, I created a parallel sentence
							extractor program. The program would take as input a pair of texts that are near translations of each other and output the individual pairs
							of parallel sentences between the two texts. For example, I have used my program to extract parallel sentences from the Bible and the Book
							of Mormon. The key challenge to the program was identifying and rectifying edge cases that cause false positives and negatives, such as
							when one of the parallel texts skips a certain sentence and the other doesn’t. Thus far, I have used my program to extract over 80,000
							parallel English-Interlingua sentences. (As a note, the link to the Interlingua Corpus Project which contains the data collected from these
							first two steps for free can be found below in the &quot;More Resources&quot; section)<br></br> <br></br>
							Third, I used the data gathered from the first two steps to train a neural machine translation (NMT) system, or more specifically, a
							recurrent neural network (RNN) translator, that can translate between English and Interlingua. I self-taught myself how to use PyTorch and
							CUDA, and I learned to use git and terminal shell commands, Jupyter, HTML, Google Colab, deploy Python at Heroku, utilize Google and
							Dropbox API, and connect to remote servers all from scratch.<br></br> <br></br>
							After around 16 months of work in August of 2021, I was able to release both the first version of the translator and the Interlingua
							corpus.
							<br></br> <br></br>
						</div>

						<button type="button" className={styles.collapsible} onClick={() => setOpen(open.map((v, i) => (i === 4 ? !v : v)))}>
							I have a question/suggestion. Who can I contact?
						</button>
						<div className={styles.content + (open[4] ? ' ' + styles.shown : '')}>
							<br></br>
							Please contact <a href="mailto:interlinguacorpus@gmail.com">interlinguacorpus@gmail.com</a> or{' '}
							<a href="mailto:jasonding@berkeley.com">jasonding@berkeley.com</a> for questions and suggestions.
							<br></br> <br></br>
						</div>

						<button type="button" className={styles.collapsible} onClick={() => setOpen(open.map((v, i) => (i === 5 ? !v : v)))}>
							Can I use the data provided by the Interlingua Corpus Project?
						</button>
						<div className={styles.content + (open[5] ? ' ' + styles.shown : '')}>
							<br></br>
							The data collected in the corpus and the translator projects can be used for free by anyone. The data from the projects can also be used
							for anything. However, it is requested that credits or links to the project pages are given.
							<br></br> <br></br>
						</div>
					</td>
				</tr>

				<tr>
					<td valign="top" align="justify">
						<hr></hr>
						Please email <a href="mailto:interlinguacorpus@gmail.com">interlinguacorpus@gmail.com</a> for questions and suggestions.
					</td>
				</tr>
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
