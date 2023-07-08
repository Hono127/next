import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getAllPosts = async () => {
  const posts = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    page_size: 100,
  });
  const allPosts = posts.results;
  // return allPosts;
  return allPosts.map((post) => {
    return getPageMetaData(post);
    // return post;
  });
};

const getPageMetaData = (post) => {
  const getTags = (tags) => {
    const allTags = tags.map((tag) => {
      return tag.name;
    });
    return allTags;
  };
  return {
    id: post.id,
    title: post.properties.Name.title[0].plain_text,
    date: post.properties.Date.date.start,
    slug: post.properties.Slug.rich_text[0].plain_text,
    tag: getTags(post.properties.Tags.multi_select),
  };
};