import Link from 'next/link'
import React from 'react'


type Props = {
  title: string
  description: string
  date: string
  tags: string[]
  slug: string
}

const SinglePosts = (props: Props) => {
  const { title, description, tags, date, slug } = props;
  return (
    <section className='bg-sky-900 mb-8 mx-auto rounded-md p-5 shadow-2xl hover:shadow-none hover:translate-y-1 transition-all duration-300'>
      <div className='flex items-center mb-2'>
        <h2 className='text-3xl text-white mr-4'>
          <Link href={`/posts/${slug}`}>{title}</Link>
        </h2>
        <div className='text-white mr-4'>{date}</div>
        {tags.map((tag, index) => (
          <span key={index} className='px-2 mx-1 text-white bg-gray-400 rounded-2xl'>{tag}</span>
        ))}
      </div>
      <p className='text-white'>{description}</p>
    </section>
  )
}

export default SinglePosts