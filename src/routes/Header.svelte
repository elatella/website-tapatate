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
			{ label: $_('project.title'), url: `${base}/project` },
			{ label: $_('farm.title'), url: `${base}/farm` },
			{ label: $_('participate.title'), url: `${base}/participate` },
			{ label: $_('gallery.title'), url: `${base}/gallery` },
			{ label: $_('knowledge.title'), url: `${base}/knowledge` },
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
			<a class="btn hidden lg:block" href={navItem.url}>
				{navItem.label}
			</a>
		{/each}
		<button class="btn btn-xs variant-ghost-secondary hidden lg:block" on:click={toggleLang}>
			{$locale && $locale.includes('de') ? 'de' : 'fr'}
		</button>

		<div class="lg:hidden">
			<button
				class="btn"
				use:popup={{
					event: 'focus-click',
					target: 'small-navigation',
					closeQuery: '.small-navigation-item'
				}}
			>
				<Fa icon={faBars} />
			</button>
			<div class="card p-4 w-60 shadow-xl" data-popup="small-navigation">
				<nav class="list-nav">
					<ul>
						{#each navItems as navigationItem (navigationItem.label)}
							<li class="small-navigation-item">
								<a href={navigationItem.url}>
									{navigationItem.label}
								</a>
							</li>
						{/each}
						<li>
							<button class="btn btn-xs variant-ghost-secondary" on:click={toggleLang}>
								{$locale && $locale.includes('de') ? 'de' : 'fr'}
							</button>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</svelte:fragment>
</AppBar>
