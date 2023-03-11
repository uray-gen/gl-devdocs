import semver from 'semver';

import DocsSource from './DocsSource';

const branchBlacklist = new Set(['list']);
export default new DocsSource({
	id: 'brawlstars',
	name: 'Brawl Stars',
	global: 'gl-brawlstars',
	docsRepo: 'uray-gen/gl-devdocs',
	repo: 'uray-gen/gl-brawlstars',
	defaultTag: 'main',
	branchFilter: (branch: string) => !branchBlacklist.has(branch) && !branch.startsWith('renovate/') && !branch.startsWith('chore/'),
	tagFilter: (tag: string) => semver.gte(tag.replace(/(^@.*\/.*@v?)?(?<semver>\d+.\d+.\d+)-?.*/, '$<semver>'), '9.0.0'),
});
