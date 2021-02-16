import React from 'react'
import ReactDOM from 'react-dom'
import Head from 'next/head'
import App from 'next/app'
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import '../css/app.css';

export default class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		return {
			pageProps: {
				// Call page-level getInitialProps
				...(Component.getInitialProps
					? await Component.getInitialProps(ctx)
					: {}),
			},
		}
	}

	componentDidMount() {
		if (process.env.NODE_ENV !== 'production') {
			const axe = require('react-axe')
			axe(React, ReactDOM, 1000)
		}
	}

	render() {
		const { Component, pageProps } = this.props

		return (
			<>
				<Head>
					<title>Expence Tracker</title>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					/>
				</Head>
						<Component {...pageProps} />
			</>
		)
	}
}
