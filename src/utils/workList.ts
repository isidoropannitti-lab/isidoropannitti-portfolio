import { readFile } from "node:fs/promises";

type WorkListLang = "it" | "en";

export type WorkListItem = {
	place: string;
	year: string;
	type: string;
	href?: string;
};

const DEFAULT_WORK_LIST = `
[it]
Milano | 2026 | allestimento museale | /projects/26-2
Roma | 2025 | residenza privata | /projects/25-6
Milano | 2025 | allestimento museale | /projects/25-4
Milano | 2025 | residenza privata | /projects/25-2
Maddaloni | 2025 | padiglione pubblico | /projects/25-1
Milano | 2023 | allestimento espositivo | /projects/23-4

[en]
Milan | 2026 | museum installation | /en/projects/26-2
Rome | 2025 | private residence | /en/projects/25-6
Milan | 2025 | museum installation | /en/projects/25-4
Milan | 2025 | private residence | /en/projects/25-2
Maddaloni | 2025 | public pavilion | /en/projects/25-1
Milan | 2023 | exhibition installation | /en/projects/23-4
`;

const parseWorkList = (source: string, lang: WorkListLang): WorkListItem[] => {
	let activeSection = "";

	return source
		.split(/\r?\n/)
		.map((line) => line.trim())
		.filter((line) => line && !line.startsWith("#"))
		.flatMap((line) => {
			const section = line.match(/^\[(.+)\]$/);
			if (section) {
				activeSection = section[1]?.trim().toLowerCase() ?? "";
				return [];
			}

			if (activeSection !== lang) return [];

			const [place, year, type, href] = line.split("|").map((part) => part.trim());
			if (!place || !year || !type) return [];

			return [
				{
					place,
					year,
					type,
					href: href || undefined,
				},
			];
		});
};

export const getWorkList = async (lang: WorkListLang): Promise<WorkListItem[]> => {
	let source = DEFAULT_WORK_LIST;

	try {
		const fileText = await readFile(new URL("../../public/content/work-list.txt", import.meta.url), "utf-8");
		if (fileText.trim()) source = fileText;
	} catch {
		// Use the built-in list if the editable text file is missing.
	}

	const items = parseWorkList(source, lang);
	return items.length ? items : parseWorkList(DEFAULT_WORK_LIST, lang);
};
