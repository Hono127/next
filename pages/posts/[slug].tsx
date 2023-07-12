import React from 'react'
import { getSinglePost } from '../../lib/notionAPI'

export const getStaticProps = async (params) => {
  const post = await getSinglePost(params.slug);
  return {
    props: {
      post,
    },
    revalidate: 60 * 60 * 6,
  };
}

const Post = () => {
  return (
    <section>
      <h2 className='w-full text-2xl font-medium'>投稿内容</h2>
      <div className='border-b-2 w-1/3 mt-1 border-sky-900'></div>
      <span>2023/07/10</span>
      <br />
      <p className='text-white bg-sky-900 rounded-xl font-medium mt-2 px-2 inline-block'>タグ名</p>
      <div>まーぅダウン使う</div>
    </section>
  )
}

export default Post