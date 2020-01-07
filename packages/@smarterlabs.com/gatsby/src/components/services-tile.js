import React from 'react'
import { css } from '@emotion/core'
import BgImg from './background-image-main'
import { secondaryColor } from '../config/colors'

function ServicesBlock({ title, list }){
	return (
		<li css={styles.serviceItem}>
			<h4 css={styles.serviceHeader}>{title}</h4>
			<ul css={styles.serviceSubList}>
				{list.map((item, key) => (
					<li key={key}>{item}</li>
				))}
			</ul>
		</li>
	)
}

export default function ServicesTile(){
	return (
		<BgImg css={styles.container}>
			<section css={styles.services}>
				<h2 css={styles.header}>Services</h2>
				<h3 css={styles.subheader}>We do these things and do them well.</h3>
				<ul css={styles.servicesList}>
					<ServicesBlock
						title='Digital'
						list={[
							`Website Development`,
							`Mobile Application Development`,
							`Desktop Application Development`,
							`UX/UI Design`,
							`Custom Branded Experiences`,
						]}
					/>
					<ServicesBlock
						title='Design'
						list={[
							`Website Development`,
							`Mobile Application Development`,
							`Desktop Application Development`,
							`UX/UI Design`,
							`Custom Branded Experiences`,
						]}
					/>
					<ServicesBlock
						title='Support'
						list={[
							`Website Development`,
							`Mobile Application Development`,
							`Desktop Application Development`,
							`UX/UI Design`,
							`Custom Branded Experiences`,
						]}
					/>
					<ServicesBlock
						title='Asset Creation'
						list={[
							`Website Development`,
							`Mobile Application Development`,
							`Desktop Application Development`,
							`UX/UI Design`,
							`Custom Branded Experiences`,
						]}
					/>
				</ul>
			</section>
		</BgImg>
	)
}

const styles = {
	container: css`
		padding: 120px 0;
	`,
	services: css`
		padding: 30px 30px;
		background: #fff;
	`,
	serviceHeader: css`
		margin-top: 0;
	`,
	servicesList: css`
		list-style-type: none;
		margin: 0;
		padding: 0;
		column-count: 2;
	`,
	serviceSubList: css`
		padding: 0 20px;
	`,
	serviceItem: css`
		padding-top: 20px;
	`,
	header: css`
		margin: 0;
		font-size: 2.0em;
		@media(min-width: 1200px){
			font-size: 2.5em;
		}
	`,
	subheader: css`
		color: ${secondaryColor};
		font-weight: normal;
		font-style: italic;
		font-size: 1.4em;
		margin: 0;
		border-bottom: 2px solid ${secondaryColor};
		@media(min-width: 1200px){
			font-size: 2.2em;
		}
	`,
}