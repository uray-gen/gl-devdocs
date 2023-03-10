<template>
	<a
		:href="`${meta ? sourceURL(meta.path, meta.file, meta.line) : sourceURL(path ?? '')}`"
		target="_blank"
		rel="noopener"
		aria-label="Go to source"
	>
		<heroicons-outline-code
			class="text-xl fill-current text-discord-green-530 hover:text-discord-green-500 dark:text-discord-green-330 dark:hover:text-discord-green-300"
			aria-hidden="true"
		/>
	</a>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { DocumentationClassMeta } from '~/interfaces/Documentation';
import { useStore } from '~/store';

const store = useStore();

defineProps<{ meta?: DocumentationClassMeta; path?: string }>();

const docs = computed(() => store.state.docs);

const sourceURL = (path: string, file?: string, line?: string | number) =>
	new URL(`${docs.value?.tag ?? ''}/${path}${file ? `/${file}` : ''}${line ? `#L${line}` : ''}`, docs.value?.source);
</script>
