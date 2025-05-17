import Image from 'next/image';
import styles from '@/styles/page.module.css';
import Title from '@/components/Title';
import Section from '@/components/Section';
import Sources from '@/components/Sources';

export default function Home() {
	return (
		<div className={styles.page}>
			<Title />
			<div className={styles.textContainer}>
				<Section>
					<h1 className={styles.title}>
						I. Mise en bouche : pourquoi parler de commerce ?
					</h1>
					<p>
						Donc, nous voici. Nous voici devant cette étude au titre étonnant et
						peut-être incompris au premier abord. Pourquoi ce sujet ? Et bien, le
						commerce est ce qui nous forme quotidiennement, chaque heure, chaque minute,
						chaque seconde : une publicité par-ci, une annonce par-là, une innovation
						ici “mais ce n&apos;est pas gratuit !”, une offre d&apos;emploi d&apos;hier
						et même une offre ouvrière.
					</p>
					<br />
					<p>
						Nos relations envers l&apos;économie sont fortement présentes dans nos vies,
						vous le vivez, vous le marchez.
					</p>
				</Section>

				<div className={styles.image}>
					<Image
						src={'/images/greek-market.jpg'}
						alt=''
						fill
						style={{
							objectFit: 'cover',
						}}
					/>
				</div>
				<p className={styles.caption}>{'[Marché antique grec] : Inconnu'}</p>

				<Section>
					<h1 className={styles.title}>
						II. Une influence grecque sur le commerce arabe ?
					</h1>
					<p>
						Comment les procédés commerciaux des Grecs ont-ils façonné ceux des Arabes ?
					</p>
					<br />
					<p>
						Réponse courte : ils ne les ont pas ! Ou du moins, pas de la manière dont on
						pourrait s&apos;imaginer en lisant ce titre. En réalité, les Grecs ne sont
						pas allés dans les pays arabes afin de leur dire : “Bonjour, nous vous
						offrons nos services de vente !”. Cela est bien plus complexe et la réponse
						ne se situe pas entièrement dans cette étude, car elle ne couvre qu&apos;une
						partie découverte du monde de nos ancêtres. À défaut de pouvoir vous offrir
						une réponse détaillée digne d&apos;un doctorat, je vous propose une courte
						lecture durant laquelle nous mettrons en lien les similitudes concernant les
						procédés commerciaux entre ces deux peuples différents mais proches à la
						fois.
					</p>
				</Section>

				<div className={styles.image}>
					<Image
						src={'/images/greek-market-2.jpg'}
						alt=''
						fill
						style={{
							objectFit: 'cover',
						}}
					/>
				</div>
				<p className={styles.caption}>{"Œuvre générée par l'IA"}</p>

				<Section>
					<h1 className={styles.title}>
						III. Contexte historique et objectifs de l&apos;étude
					</h1>
					<p>
						Le commerce, ce concept qui s&apos;étend bien au-delà du transport des
						marchandises mais aussi d&apos;idées, de techniques, et parfois même de
						querelles, a joué un rôle clé dans les civilisations grecque et arabe. Les
						Grecs, dès la période archaïque (VIIIe-VIe siècle av. J.-C.), ont bâti un
						réseau commercial impressionnant en Méditerranée, tandis que les Arabes,
						actifs dès l&apos;Âge du Bronze (vers 3000 av. J.-C.) et entraînés par
						l&apos;expansion islamique au VIIe siècle apr. J.-C., ont étendu leurs
						échanges jusqu&apos;aux confins de l&apos;Asie et de l&apos;Europe. Cette
						étude vise à explorer comment les pratiques commerciales grecques ont pu
						façonner celles des Arabes, en examinant leurs navires, leurs routes, leurs
						partenaires, leurs produits et leurs innovations. Préparez-vous à naviguer
						entre deux mondes, avec peut-être une ou deux escales humoristiques pour
						alléger le voyage !
					</p>
				</Section>

				<div className={styles.image}>
					<Image
						src={'/images/Arab-pirate-dhow.jpg'}
						alt=''
						fill
						style={{
							objectFit: 'cover',
						}}
					/>
				</div>
				<p className={styles.caption}>&quot;Arab pirate dhow&quot; - Gorder Frickers</p>

				<Section>
					<h1 className={styles.title}>IV. Les Grecs et l&apos;art de commercer</h1>
					<p>
						<strong>A. Période et contexte</strong>
					</p>
					<p>
						Dès l&apos;époque archaïque (776/750-480 av. J.-C.), les Grecs ont vu naître
						leurs fameuses <i>polis</i>, ces cités-États qui furent la base de leur
						commerce dans la Méditerranée et la mer Noire. Cette expansion coloniale a
						posé les bases d'une riche activité commerciale maritime, portée par un
						relief qui rendait les voies terrestres impratiquables.
					</p>
					<br />
					<p>
						<strong>B. Types de navires</strong>
					</p>
					<p>
						Les Grecs ont misé sur des navires marchands robustes, construits en cyprès
						ou en pin, avec des coques pontées et une stabilité à toute épreuve. Ces
						bateaux, lourds et ronds, étaient conçus pour transporter des cargaisons
						conséquentes, un peu comme des camions antiques flottants.
					</p>
					<br />
					<p>
						<strong>C. Aires de commerce</strong>
					</p>
					<p>
						Leurs routes maritimes s&apos;étendaient à travers la Méditerranée et la mer
						Noire, reliant des partenaires comme les Phéniciens, les Égyptiens et les
						Scythes. Les colonies et comptoirs grecs, tels des avant-postes commerciaux,
						ont facilité la circulation des biens et des idées, faisant de la mer une
						véritable autoroute antique.
					</p>
					<br />
					<p>
						<strong>D. Spécialités et innovations</strong>
					</p>
					<p>
						Les Grecs échangeaient poterie, métaux, tissus, vin et huile d&apos;olive -
						des produits phares de la Méditerranée. Mais leur génie résidait dans leurs
						innovations : la monnaie, qui a remplacé le troc, les contrats commerciaux
						et les traités, qui sécurisaient les échanges.
					</p>
				</Section>

				<div className={styles.image}>
					<Image
						src={'/images/classical-greek-ship.jpg'}
						alt=''
						fill
						style={{
							objectFit: 'cover',
						}}
					/>
				</div>
				<p className={styles.caption}>&quot;Classical Greek Ship&quot; - Albert Sebille</p>

				<Section>
					<h1 className={styles.title}>V. Le commerce arabe : entre désert et océan</h1>
					<p>
						<strong>A. Période et contexte</strong>
					</p>
					<p>
						Les Arabes ont commencé tôt, dès l&apos;Âge de Bronze, avec des bateaux
						rudimentaires faits de bois, de roseaux et de bitume naviguant dans le golfe
						Arabique. Mais c&apos;est avec l&apos;avènement de l&apos;Islam au VIIe
						siècle que leur commerce prit son envol, intégrant des influences diverses
						dans un &quot;melting-pot&quot;{' '}
						<i>(un lieu où des échanges se font ce qui crée des fusions de cultures)</i>{' '}
						commercial impressionnant.
					</p>
					<br />
					<p>
						<strong>B. Types de navires</strong>
					</p>
					<p>
						Leur arme secrète ? Les boutres (<i>dhows que l&apos;on prononce</i>{' '}
						&quot;da-ouz&quot;), ces navires élancés parfaitement adaptés aux mers
						chaudes. Sans boussole, les marins arabes se guidaient avec les étoiles,
						utilisant des outils comme le <i>kamal</i> ou le quadrant.
					</p>
					<br />
					<p>
						<strong>C. Aires de commerce</strong>
					</p>
					<p>
						Les Arabes maîtrisaient un réseau hybride : routes terrestres via caravanes
						dans les déserts, et voies maritimes le long de la Mer Rouge et de
						l&apos;océan Indien. Leurs partenaires incluaient l&apos;Inde, la Chine,
						l&apos;Afrique de l&apos;Est et même l&apos;Europe, via des villes
						italiennes comme Venise. Il ne faut pas oublier aussi{' '}
						<i>la route de l&apos;encens</i>, reliant l&apos;Arabie au bassin
						méditerranéen.
					</p>
					<br />
					<p>
						<strong>D. Spécialités et innovations</strong>
					</p>
					<p>
						Encens, épices, soie, tissus et maroquinerie dominaient leurs échanges - des
						trésors qui rendaient envieux les marchés lointains.{' '}
						<strong>
							Au VIIe siècle, l&apos;Islam naissant a intégré l&apos;éthique :
							honnêteté, justice et interdiction de l&apos;usure (riba) devinrent des
							principes guidant le commerce arabe, le considérant comme une activité
							légitime.
						</strong>{' '}
						Leurs innovations incluaient les traités commerciaux pour protéger les
						caravanes, les bazars comme &quot;hubs&quot; <i>(pôle)</i> d&apos;échange,
						et des centres urbains comme Bagdad, une sorte de Wall Street du Moyen Âge
						avec plus de chameaux 🐫. D&apos;où le célèbre marchand à cette époque
						<strong>Sulaymān al-Tājir (Soleyman le Marchand)</strong>.
					</p>
				</Section>

				<div className={styles.image}>
					<Image
						src={'/images/arab-market-scene.jpg'}
						alt=''
						fill
						style={{
							objectFit: 'cover',
						}}
					/>
				</div>
				<p className={styles.caption}>
					&quot;An Arab Market Scene&quot; - Franz Xaver Kosler
				</p>

				<Section>
					<h1 className={styles.title}>
						VI. Entre échanges et héritages - les ponts culturels
					</h1>
					<p>
						<strong>A. Transmission des connaissances</strong>
					</p>
					<p>
						Comment les Grecs ont-ils passé le flambeau ? Principalement via
						l&apos;Espagne et la Sicile, où les Arabes ont traduit et adapté des textes
						grecs, mélangeant savoir antique et flair oriental.
					</p>
					<br />
					<p>
						<strong>B. Similitudes</strong>
					</p>
					<p>
						On retrouve chez les Arabes des échos grecs : l&apos;usage de la monnaie,
						les contrats pour sécuriser les relations marchandes, et les marchés urbains
						structurés. Bagdad, par exemple, reprend l&apos;idée grecque de ports et de
						relais commerciaux, mais avec une touche orientale - un peu comme si les
						Grecs avaient prêté leur recette et que les Arabes y avaient ajouté des
						épices.
					</p>
					<br />
					<p>
						<strong>C. Rôle des intermédiaires</strong>
					</p>
					<p>
						Phéniciens et Nabatéens ont servi de ponts entre ces mondes, transportant
						non seulement des marchandises, mais aussi des pratiques commerciales. Ces
						intermédiaires étaient les véritables coursiers de l&apos;Antiquité, livrant
						des colis et des idées sans frais de port exorbitants.
					</p>
				</Section>

				<div className={styles.image}>
					<Image
						src={'/images/bazar.jpg'}
						alt=''
						fill
						style={{
							objectFit: 'cover',
						}}
					/>
				</div>
				<p className={styles.caption}>&quot;Old Arab Market&quot; - Shereen Abdalla</p>

				<Section>
					<h1 className={styles.title}>VII. Conclusion</h1>
					<p>
						Les procédés commerciaux grecs - monnaie, contrats, réseaux maritimes - ont
						clairement laissé une empreinte sur les pratiques arabes, qui les ont
						adaptés à un contexte intercontinental unique. Mais les Arabes ne se sont
						pas contentés de copier : ils ont innové avec une intégration religieuse
						profonde et un réseau combinant routes terrestres et maritimes. En jouant
						les médiateurs entre Orient et Occident, ils ont transformé l&apos;héritage
						grec en un système commercial qui a marqué l&apos;histoire.
					</p>
					<br />
					<p>
						Comme quoi, deux cultures à des époques différentes et sur des territoires
						différents peuvent avoir de nombreux points communs !
					</p>
				</Section>
				<Sources />
			</div>
			<div className={styles.fadeEffect}></div>
		</div>
	);
}
