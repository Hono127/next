import React from 'react'



type Props = {
  title: string
  description: string
  date: string
  tag: string
  slug: string
}

const SinglePosts = (props: Props) => {
  const { title, description, tag, date, slug } = props;
  return (
    <div>{title}</div>
  )
}

export default SinglePosts