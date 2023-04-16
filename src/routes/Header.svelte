<script lang="ts">
	import Fa from 'svelte-fa';
	import { AppBar, popup } from '@skeletonlabs/skeleton';
	import { _ } from 'svelte-i18n';
	import { faBars } from '@fortawesome/free-solid-svg-icons';
	import logo from '$lib/images/logo-small.png';

	interface NavigationItem {
		title: string;
		href: string;
	}

	const navigationItems: NavigationItem[] = [
		{ title: $_('project.title'), href: '/project' },
		{ title: $_('farm.title'), href: '/farm' },
		{ title: $_('participate.title'), href: '/participate' },
		{ title: $_('gallery.title'), href: '/gallery' },
		{ title: $_('knowledge.title'), href: '/knowledge' },
		{ title: $_('contact.title'), href: '/contact' }
	];
</script>

<AppBar shadow="shadow-md">
	<svelte:fragment slot="lead">
		<a href="/" class="flex items-center">
			<img src={logo} alt={$_('navigation.altMountain')} height="h-12" class="h-12 mr-2" />
		</a>
	</svelte:fragment>

	<svelte:fragment slot="trail">
		{#each navigationItems as navigationItem (navigationItem.title)}
			<a class="btn hidden lg:block" href={navigationItem.href}>
				{navigationItem.title}
			</a>
		{/each}

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
						{#each navigationItems as navigationItem (navigationItem.title)}
							<li class="small-navigation-item">
								<a href={navigationItem.href}>
									{navigationItem.title}
								</a>
							</li>
						{/each}
					</ul>
				</nav>
			</div>
		</div>
	</svelte:fragment>
</AppBar>
