<script lang="ts">
	import { AppBar, popup } from '@skeletonlabs/skeleton';
	import { locale, _ } from 'svelte-i18n';
	import Fa from 'svelte-fa';
	import { faBars } from '@fortawesome/free-solid-svg-icons';
	import { base } from '$app/paths';
	import logo from '$lib/images/logo-small.png';

	interface NavigationItem {
		label: string;
		url: string;
	}

	function toggleLang() {
		if ($locale && $locale.includes('de')) {
			locale.set('fr-CH');
			return;
		}
		locale.set('de-CH');
	}

	let navItems: NavigationItem[] = [];
	$: {
		navItems = [
			{ label: $_('subscriptions.title'), url: `${base}/subscriptions` },
			{ label: $_('depots.title'), url: `${base}/depots` },
			{ label: $_('tapatate.title'), url: `${base}/tapatate` },
			{ label: $_('farm.title'), url: `${base}/farm` },
			{ label: $_('userArea.title'), url: `${base}/user-area` },
			{ label: $_('recipes.title'), url: `${base}/recipes` },
			{ label: $_('gallery.title'), url: `${base}/gallery` },
			{ label: $_('contact.title'), url: `${base}/contact` }
		];
	}
</script>

<AppBar shadow="shadow-md">
	<svelte:fragment slot="lead">
		<a href="{base}/" class="flex items-center">
			<img src={logo} alt={$_('navigation.altMountain')} height="h-12" class="h-12 mr-2" />
		</a>
	</svelte:fragment>

	<svelte:fragment slot="trail">
		{#each navItems as navItem (navItem.label)}
			<a class="btn btn-sm hidden lg:block" href={navItem.url}>
				{navItem.label}
			</a>
		{/each}
		<button class="btn btn-sm variant-ghost-secondary hidden lg:block" on:click={toggleLang}>
			{$locale && $locale.includes('de') ? 'de' : 'fr'}
		</button>

		<div class="lg:hidden">
			<button
				class="btn btn-sm"
				use:popup={{
					event: 'click',
					target: 'small-navigation',
					closeQuery: '.small-navigation-item'
				}}
			>
				<Fa icon={faBars} />
			</button>
			<div class="card p-4 w-60 shadow-xl" data-popup="small-navigation">
				<nav class="list-nav">
					<ul>
						{#each navItems as navItem (navItem.label)}
							<li class="small-navigation-item">
								<a href={navItem.url}>{navItem.label}</a>
							</li>
						{/each}
						<li>
							<button class="btn btn-sm variant-ghost-secondary" on:click={toggleLang}>
								{$locale && $locale.includes('de') ? 'de' : 'fr'}
							</button>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</svelte:fragment>
</AppBar>
