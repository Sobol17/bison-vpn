<template>
	<div class="container">
		<Breadcrumb page-url="/privacy" page-slug="Политика конфиденциальности" />
		<div class="privacy">
			<h1 class="privacy__title">Privacy</h1>
			<p class="privacy__text privacy__text--grey">
				Approved December 11, 2020 - Updated April 24, 2024
			</p>
			<p class="privacy__text">
				Welcome to the Privacy Policy of Saga VPN. Our commitment is to uphold user trust through
				transparent and responsible data management practices. This policy details how we collect,
				use, and protect your personal information, while respecting your data protection rights.
			</p>
			<h2 class="privacy__subtitle">Policy Overview</h2>
			<div>This document covers:</div>
			<ul class="privacy__list">
				<li>Methods of data collection</li>
				<li>Use of personal information</li>
				<li>Data protection measures</li>
				<li>Your option to opt-out of data sharing</li>
			</ul>
			<h2 class="privacy__subtitle">Policy Updates</h2>
			<p class="privacy__text">
				This policy may be updated without prior notice, and regular reviews are recommended. Your
				continued use of Saga VPN services signifies acceptance of any changes.
			</p>
			<h2 class="privacy__subtitle">Privacy and Anonymity</h2>
			<p class="privacy__text">
				Your privacy is our utmost priority when using Saga VPN. This policy outlines our data
				management practices, emphasizing your rights and options. For questions or concerns, please
				reach out to us through our support channels. Saga VPN does not retain your IP address after
				your session. We do not log your online activities or associate your VPN usage with personal
				identifiers. Registration or personal contact information is not required to use our
				services. While we ensure your IP is anonymized during VPN use, please note that data
				collection from external sources is beyond our control. Scope of this Privacy Policy
			</p>
			<h2 class="privacy__subtitle">Scope of this Privacy Policy</h2>
			<p class="privacy__text">
				This policy applies solely to the Saga VPN mobile application. By using our services, you
				agree to these privacy terms and the Terms of Use.
			</p>
			<h2 class="privacy__subtitle">Automatic Personal Information Collection</h2>
			<p class="privacy__text">
				"Personal Information" refers to data that can uniquely identify an individual. Saga VPN
				ensures that IP addresses, encrypted during use, remain separate from online activities and
				are deleted after disconnection. No registration is required to use the product. Payments
				made via third-party processors adhere to their respective privacy policies. Any direct
				contact with us may involve additional personal data collection. <br />
				The Saga VPN app automatically gathers device-specific data prior to VPN connection,
				essential for service delivery, troubleshooting, and analytics. Service providers may use IP
				addresses for marketing attribution. <br />
				Your IP address is encrypted and stored only for the duration of the VPN session and is
				never associated with your online activity. Aggregated data on website access helps improve
				our services and analyze performance.
			</p>
			<h2 class="privacy__subtitle">Usage of Personal Information</h2>
			<span>We use your data to:</span>
			<ul class="privacy__list">
				<li>Enhance service features and delivery</li>
				<li>Respond to requests and provide support</li>
				<li>Analyze usage patterns for development</li>
				<li>Fulfill business requirements and uphold legal rights</li>
			</ul>
			<span
				>In the European Economic Area (EEA), data processing is carried out based on legal grounds,
				weighing our interests against your rights.</span
			>
			<h2 class="privacy__subtitle">Sharing of Personal Information</h2>
			<p class="privacy__text">
				Any data sharing is done under this policy, focusing on service enhancement, business
				transactions, and legal compliance. Browsing data is not logged, and IP addresses are
				deleted after each session. Though we rarely have data that could be requested for law
				enforcement, any data we may have will be shared only under legal mandate. This policy does
				not cover third-party privacy practices.
			</p>
			<h2 class="privacy__subtitle">Security Measures</h2>
			<p class="privacy__text">
				Saga VPN encrypts data between your device and our servers, providing enhanced security on
				public networks and protecting against ISP monitoring. We employ robust security protocols
				to guard against unauthorized access and misuse of data.
			</p>
			<h2 class="privacy__subtitle">Data Retention</h2>
			<p class="privacy__text">
				We do not retain IP addresses post-session, nor do we log any online activities. Personal
				data is deleted or anonymized when no longer necessary, except where legal retention is
				required.
			</p>
			<h2 class="privacy__subtitle">EEA Data Protection Rights</h2>
			<p class="privacy__text">
				EEA residents have specific rights over their personal data, including access, correction,
				restriction, deletion, and portability. These rights may be subject to legal limitations.
				Complaints can be directed to supervisory authorities, and consent can be withdrawn where
				applicable. Please note that product page images or videos cannot be used as evidence of
				data breaches.
			</p>
			<h2 class="privacy__subtitle">Services for Individuals Under 16</h2>
			<p class="privacy__text">
				Saga VPN is not intended for individuals under 16. Any personal information inadvertently
				collected from minors will be promptly deleted upon discovery.
			</p>
			<h2 class="privacy__subtitle">International Data Transfer</h2>
			<p class="privacy__text">
				Saga VPN primarily uses servers located within the EEA but may transfer data internationally
				as necessary. By using our services, you consent to any international data transfers as per
				this policy.
			</p>
			<h2 class="privacy__subtitle">Policy Revisions</h2>
			<p class="privacy__text">
				We reserve the right to modify this Privacy Policy. We encourage regular reviews, and your
				continued use of Saga VPN signifies acceptance of any updates.
			</p>
		</div>
	</div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.privacy {
	margin: 40px auto;
	max-width: 700px;

	&__title {
		color: $black-90;
		font-size: 48px;
		font-style: normal;
		font-weight: 700;
		line-height: 120%; /* 57.6px */
		letter-spacing: 0.96px;
		margin-bottom: 24px;
		text-align: center;
	}

	&__subtitle {
		margin-bottom: 8px;
		font-size: 30px;
		font-style: normal;
		font-weight: 600;
		line-height: 130%;
		color: $black-90;
		margin-top: 24px;
	}

	&__text {
		color: $black-90;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 150%; /* 24px */

		&--grey {
			color: $grey-100;
			margin-bottom: 32px;
			text-align: center;
		}
	}

	a {
		text-decoration-line: underline;
		text-decoration-style: solid;
		text-decoration-skip-ink: none;
		text-decoration-thickness: auto;
		text-underline-offset: auto;
		text-underline-position: from-font;
		color: $accent;
		font-weight: 600;
	}

	&__list {
		list-style-type: disc;
		margin-left: 24px;
		color: $black-90;
		line-height: 1.5;
	}

	span {
		line-height: 1.5;
	}
}
</style>
