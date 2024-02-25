import type MemberLink from "./memberLink.model";

/**
 * Member model
 * @class Member
 * @property {string} name - The name of the member
 * @property {string} description - The description of the member
 * @property {string} imageUrl - The image URL of the member
 * @property {MemberLink[]} links - The links of the member
 */
export default class Member {
	public name: string;
	public description: string;
	public imageUrl: string;
	public links: MemberLink[];

	constructor(name: string, description: string, imageUrl: string, links: MemberLink[]) {
		this.name = name;
		this.description = description;
		this.imageUrl = imageUrl;
		this.links = links;
	}
}