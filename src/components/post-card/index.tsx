import React from 'react';

export type PostCardProps = {
  name;
  profileImageUrl;
  title;
  titleImageUrl;
  time;
  pickCount;
  viewCount;
  commentCount;
  simpleItemList;
};

export default function PostCard({
  name,
  profileImageUrl,
  title,
  titleImageUrl,
  time,
  pickCount,
  viewCount,
  commentCount,
  simpleItemList
}: PostCardProps) {
  return <div>{name + title}</div>;
}
