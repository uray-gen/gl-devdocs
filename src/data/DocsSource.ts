/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import semver from 'semver';

interface DocsSourceOptions {
	id: string;
	name: string;
	global: string;
	docsRepo: string;
	repo: string;
	defaultTag?: string;
	defaultFile?: { category: string; id: string };
	source?: string;
	branchFilter?: (branch: string) => boolean;
	tagFilter?: (tag: string) => boolean;
}

export const json = (res: Response) => {
	if (!res.ok) throw new Error('Failed to fetch docs data file from GitHub');
	return res.json();
};

export default class DocsSource {
	public id = this.options.id;

	public name = this.options.name;

	public global = this.options.global;

	public docsRepo = this.options.docsRepo;

	public repo = this.options.repo;

	public defaultTag = this.options.defaultTag ?? 'main';

	public defaultFile = this.options.defaultFile ?? { category: 'general', id: 'welcome' };

	public source = this.options.source ?? `https://github.com/${this.repo}/blob/`;

	public branchFilter = this.options.branchFilter ?? ((branch: string) => branch !== 'main');

	public tagFilter = this.options.tagFilter ?? (() => true);

	public tags: any[] | null = null;

	public recentTag: any = null;

	public constructor(public readonly options: DocsSourceOptions) {}

	public fetchTags() {
		if (this.tags) return Promise.resolve(this.tags);
		return Promise.all([
			fetch(`https://api.github.com/repos/${this.repo}/branches`).then(json),
			fetch(`https://api.github.com/repos/${this.repo}/tags`).then(json),
		])
			.catch((err) => {
				if (localStorage[`source-${this.id}`]) {
					console.error(err);
					const cache = JSON.parse(localStorage[`source-${this.id}`]);
					// eslint-disable-next-line @typescript-eslint/no-unsafe-return
					return [cache.branches, cache.tags];
				}
				throw err;
			})
			.then((data) => {
				const [branches, tags] = data;
				this.tags = [this.defaultTag];
				localStorage[`source-${this.id}`] = JSON.stringify({ branches, tags });

				for (const branch of branches) {
					if (branch.name !== this.defaultTag && this.branchFilter(branch.name)) {
						this.tags.push(branch.name);
					}
				}

				// Build a list of the latest patch versions
				const latestPatches: { [key: string]: number } = {};
				for (const tag of tags) {
					if (semver.valid(tag.name)) {
						const majorMinor = `${semver.major(tag.name)}.${semver.minor(tag.name)}`;
						const patch = semver.patch(tag.name);
						if (patch < latestPatches[majorMinor]) {
							continue;
						}
						latestPatches[majorMinor] = patch;
					}
				}

				// Build the list of tags
				for (const tag of tags) {
					if (tag.name === this.defaultTag) {
						continue;
					}
					if (!this.tagFilter(tag.name)) {
						continue;
					}

					// eslint-disable-next-line @typescript-eslint/no-unsafe-call
					tag.name = tag.name.replace(/(^@.*\/.*@v?)?(?<semver>\d+.\d+.\d+)-?.*/, '$<semver>');
					// Make sure the tag is the latest patch version
					if (semver.valid(tag.name)) {
						const majorMinor = `${semver.major(tag.name)}.${semver.minor(tag.name)}`;
						const patch = semver.patch(tag.name);
						if (patch < latestPatches[majorMinor]) {
							continue;
						}
					}

					this.tags.push(tag.name);
				}

				// eslint-disable-next-line @typescript-eslint/no-unsafe-return
				return this.tags;
			});
	}

	public async fetchDocs(tag: string) {
		const res = await fetch(`https://raw.githubusercontent.com/${this.docsRepo}/main/${this.id}/${tag}.json`);
		return json(res);
	}
}
