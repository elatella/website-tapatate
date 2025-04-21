<script lang="ts">
	import { locale, _ } from 'svelte-i18n';
	import Title from '$lib/Title.svelte';
	import backgroundImage from '$lib/images/bg-contact.jpg';
	import reworkFR from '$lib/images/website_rework_FR.jpg';
	import reworkDE from '$lib/images/website_rework.jpg';

	let firstName = '';
	let lastName = '';
	let email = '';
	let message = '';
</script>

<Title title={$_('contact.title')} {backgroundImage} />

<div
	class="flex flex-col md:flex-row justify-evenly items-center space-y-8 md:space-y-0 py-12 space-y-16"
>
	<img src={$locale && $locale.includes('fr') ? reworkFR : reworkDE} alt={$_('news.news.rework')} />
</div>

<div
	class="flex flex-col md:flex-row justify-evenly items-center space-y-8 md:space-y-0 py-12 space-y-16"
></div>

<div class="w-full px-8">
	<section class="container mx-auto flex flex-col max-w-5xl space-y-16">
		<div class="flex flex-col md:flex-row justify-around">
			<div>
				<h3 class="h3">{$_('contact.bank.title')}</h3>
				<p>{$_('contact.bank.text1')}</p>
				<p>{$_('contact.bank.text2')}</p>
				<p>{$_('contact.bank.text3')}</p>
				<p>{$_('contact.bank.text4')}</p>
				<p>{$_('contact.bank.text5')}</p>
				<p>{$_('contact.bank.text6')}</p>
				<p>{$_('contact.bank.text7')}</p>
			</div>

			<div>
				<h3 class="h3">{$_('contact.adress.title')}</h3>
				<p>{$_('contact.adress.text1')}</p>
				<p>{$_('contact.adress.text2')}</p>
				<p>{$_('contact.adress.text3')}</p>
			</div>
		</div>
		<div>
			<h3 class="h3">{$_('contact.arrival.title')}</h3>
			<br />
			<h5 class="h5"><strong>{$_('contact.arrival.bern.title')}</strong></h5>
			<ul class="list-disc p-4 space-y-1 list-inside">
				<li>
					<strong>{$_('contact.arrival.bern.bold1')}</strong>
					{$_('contact.arrival.bern.text1')}<a
						href="https://{$_('contact.arrival.bern.link1')}"
						class="anchor">{$_('contact.arrival.bern.linkText1')}</a
					>{$_('contact.arrival.bern.text2')}<a
						href="https://{$_('contact.arrival.bern.link2')}"
						class="anchor">{$_('contact.arrival.bern.linkText2')}</a
					>{$_('contact.arrival.bern.text3')}
				</li>
				<li>
					<strong>{$_('contact.arrival.bern.bold2')}</strong>{$_('contact.arrival.bern.text1')}<a
						href="https://{$_('contact.arrival.bern.link1')}"
						class="anchor">{$_('contact.arrival.bern.linkText1')}</a
					>{$_('contact.arrival.bern.text4')}<a
						href="https://{$_('contact.arrival.bern.link2')}"
						class="anchor">{$_('contact.arrival.bern.linkText2')}</a
					>{$_('contact.arrival.bern.bracet')}
				</li>
				<li>
					<strong>{$_('contact.arrival.bern.bold3')}</strong>
					{$_('contact.arrival.bern.text5')}<a
						href="https://{$_('contact.arrival.bern.link3')}"
						class="anchor">{$_('contact.arrival.bern.linkText3')}</a
					>{$_('contact.arrival.bern.text6')}
				</li>
				<li>
					<strong>{$_('contact.arrival.bern.bold4')}</strong>
					{$_('contact.arrival.bern.text7')}<a
						href="https://{$_('contact.arrival.bern.link4')}"
						class="anchor">{$_('contact.arrival.bern.linkText4')}</a
					>{$_('contact.arrival.bern.text8')}<a
						href="https://{$_('contact.arrival.bern.link5')}"
						class="anchor">{$_('contact.arrival.bern.linkText5')}</a
					>
					{$_('contact.arrival.bern.dot')}
				</li>
			</ul>
			<h5 class="h5"><strong>{$_('contact.arrival.fribourg.title')}</strong></h5>
			<ul class="list-disc p-4 space-y-1 list-inside">
				<li>
					<strong>{$_('contact.arrival.fribourg.bold1')}</strong>
					{$_('contact.arrival.fribourg.text1')}<a
						href="https://{$_('contact.arrival.fribourg.link1')}"
						class="anchor">{$_('contact.arrival.fribourg.linkText1')}</a
					>{$_('contact.arrival.fribourg.text2')}<a
						href="https://{$_('contact.arrival.fribourg.link2')}"
						class="anchor">{$_('contact.arrival.fribourg.linkText2')}</a
					>{$_('contact.arrival.fribourg.text3')}
				</li>
				<li>
					<strong>{$_('contact.arrival.fribourg.bold2')}</strong>
					{$_('contact.arrival.fribourg.text1')}<a
						href="https://{$_('contact.arrival.fribourg.link1')}"
						class="anchor">{$_('contact.arrival.fribourg.linkText1')}</a
					>{$_('contact.arrival.fribourg.text4')}<a
						href="https://{$_('contact.arrival.fribourg.link2')}"
						class="anchor">{$_('contact.arrival.fribourg.linkText2')}</a
					>{$_('contact.arrival.fribourg.bracet')}
				</li>
				<li>
					<strong>{$_('contact.arrival.fribourg.bold3')}</strong>
					{$_('contact.arrival.fribourg.text5')}<a
						href="https://{$_('contact.arrival.fribourg.link3')}"
						class="anchor">{$_('contact.arrival.fribourg.linkText3')}</a
					>{$_('contact.arrival.fribourg.text6')}
				</li>
				<li>
					<strong>{$_('contact.arrival.fribourg.bold4')}</strong>
					{$_('contact.arrival.fribourg.text7')}<a
						href="https://{$_('contact.arrival.fribourg.link4')}"
						class="anchor">{$_('contact.arrival.fribourg.linkText4')}</a
					>{$_('contact.arrival.fribourg.text8')}<a
						href="https://{$_('contact.arrival.fribourg.link5')}"
						class="anchor">{$_('contact.arrival.fribourg.linkText5')}</a
					>{$_('contact.arrival.fribourg.dot')}
				</li>
			</ul>
		</div>
		<div>
			<h3 class="h3">{$_('contact.form.title')}</h3>
			<p>{$_('contact.form.subtitle')}</p>

			<form action="https://formspree.io/f/mblrbvar" method="POST" class="mt-8 max-w-2xl">
				<input
					name="firstName"
					type="text"
					placeholder={$_('contact.form.firstName')}
					bind:value={firstName}
					class="input mb-4"
				/>
				<input
					name="lastName"
					type="text"
					placeholder={$_('contact.form.lastName')}
					bind:value={lastName}
					class="input mb-4"
				/>
				<input
					name="email"
					type="email"
					placeholder={$_('contact.form.email')}
					bind:value={email}
					class="input mb-4"
				/>
				<textarea
					name="message"
					rows="4"
					placeholder={$_('contact.form.message')}
					bind:value={message}
					class="textarea mb-4"
				/>
				<button class="btn variant-ghost-primary" type="submit">{$_('contact.form.submit')}</button>
			</form>
		</div>
	</section>
</div>
