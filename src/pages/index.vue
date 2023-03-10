<template>
	<div class="bg-discord-green-500 py-20">
		<div class="max-w-3xl sm:mx-auto text-center px-8 sm:px-16 flex flex-col gap-10 md:px-12">
			<Logo class="filter drop-shadow-lg my-6" />
			<InstallButton />
		</div>
	</div>

	<div
		class="prose prose-discord dark:prose-light lg:prose-lg px-6 mx-auto pb-8 w-full xl:grid xl:grid-cols-2 xl:gap-x-12 xl:max-w-prose"
	>
		<div class="col-span-full">
			<h2>About</h2>
			<p>
				Game Lobby is the place for gamers. Also, the place for developers, possibly you!

				This is THE place to use Game Lobby's api wrapper's and packages. Welcome to Game Lobby documentations!
			</p>
		</div>
		<div>
			<h2>Why?</h2>
			<ul>
				<li>Easy-to-use</li>
				<li>Feature-rich</li>
				<li>Has documentation avaible</li>
			</ul>
		</div>
		<div>
			<h2>Statistics</h2>
			<Stats />
			<p class="text-center">... and growing!</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import InstallButton from '~/components/InstallButton.vue';
import Logo from '~/components/Logo.vue';
import Stats from '~/components/Stats.vue';
import MainSource from '~/data/MainSource';
import { useStore } from '~/store';

const store = useStore();

const docs = computed(() => store.state.docs);

if (!docs.value) {
	void store.dispatch('fetchDocs', { inputSource: MainSource });
	void store.dispatch('fetchTags', { currentSource: MainSource });
}
</script>
