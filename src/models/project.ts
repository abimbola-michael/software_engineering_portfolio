export default class Project {
  title: string;
  description: string;
  url: string;
  images: string[];
  constructor(
    title: string,
    description: string,
    url: string,
    images: string[]
  ) {
    this.title = title;
    this.description = description;
    this.url = url;
    this.images = images;
  }
}
