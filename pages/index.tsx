import React from 'react';
import PostCard from '../src/components/post-card';

export default function Practice() {
  return (
    <div>
      {DATA.data.allRecommendPosts.map(item => (
        <PostCard key={item.name + item.title} {...item} />
      ))}
    </div>
  );
}

const DATA = {
  data: {
    allRecommendPosts: [
      {
        name: '깡스타일리스트',
        profileImageUrl:
          'https://fashiondogam-images.s3.ap-northeast-2.amazonaws.com/image/201910254366666062410unnamed.jpg',
        title: '와이드팬츠 & 코트 [더비슈즈 코디#4]',
        titleImageUrl:
          'https://fashiondogam-images.s3.ap-northeast-2.amazonaws.com/image/202001104385176714313%EC%9D%B4%EB%AF%B8%EC%A7%80074.jpg',
        time: '1578663773235',
        pickCount: 0,
        viewCount: 327,
        commentCount: 0,
        simpleItemList: [
          {
            brandKor: '더니트컴퍼니',
            imageUrl:
              'https://fashiondogam-images.s3.ap-northeast-2.amazonaws.com/image/2020011043851771447395753.jpg'
          },
          {
            brandKor: '리트',
            imageUrl:
              'https://fashiondogam-images.s3.ap-northeast-2.amazonaws.com/image/201912314382725986561145.jpg'
          },
          {
            brandKor: '로스트가든',
            imageUrl:
              'https://fashiondogam-images.s3.ap-northeast-2.amazonaws.com/image/2020011043851672748564398.jpg'
          }
        ]
      },
      {
        name: '깡스타일리스트',
        profileImageUrl:
          'https://fashiondogam-images.s3.ap-northeast-2.amazonaws.com/image/201910254366666062410unnamed.jpg',
        title: 'MA-1과 캐주얼하게 [더비슈즈 코디#3]',
        titleImageUrl:
          'https://fashiondogam-images.s3.ap-northeast-2.amazonaws.com/image/202001104385173514711%EC%9D%B4%EB%AF%B8%EC%A7%80068.jpg',
        time: '1578662916135',
        pickCount: 0,
        viewCount: 572,
        commentCount: 0,
        simpleItemList: [
          {
            brandKor: '미나브',
            imageUrl:
              'https://fashiondogam-images.s3.ap-northeast-2.amazonaws.com/image/201912034376011323142f456a7c040d05985b79231bd592edffb.jpg'
          },
          {
            brandKor: '가먼트레이블',
            imageUrl:
              'https://fashiondogam-images.s3.ap-northeast-2.amazonaws.com/image/2020011043851747642405431.jpg'
          },
          {
            brandKor: '닥터마틴',
            imageUrl:
              'https://fashiondogam-images.s3.ap-northeast-2.amazonaws.com/image/2020011043851672748565253.jpg'
          }
        ]
      },
      {
        name: '깡스타일리스트',
        profileImageUrl:
          'https://fashiondogam-images.s3.ap-northeast-2.amazonaws.com/image/201910254366666062410unnamed.jpg',
        title: '블레이저&슬랙스로 포멀하게 [더비슈즈 코디#2]',
        titleImageUrl:
          'https://fashiondogam-images.s3.ap-northeast-2.amazonaws.com/image/20200110438517141396%EC%9D%B4%EB%AF%B8%EC%A7%80065.jpg',
        time: '1578662393497',
        pickCount: 0,
        viewCount: 632,
        commentCount: 0,
        simpleItemList: [
          {
            brandKor: '핸스',
            imageUrl:
              'https://fashiondogam-images.s3.ap-northeast-2.amazonaws.com/image/201911264374297851518982cf7b2f533cfeb94c7a2352ead8fa3.png'
          },
          {
            brandKor: '지오다노',
            imageUrl:
              'https://fashiondogam-images.s3.ap-northeast-2.amazonaws.com/image/202001104385172534329201912114377909804246213123_medium.jpg'
          },
          {
            brandKor: 'mmrb',
            imageUrl:
              'https://fashiondogam-images.s3.ap-northeast-2.amazonaws.com/image/202001104385172964720%EC%9D%B4%EB%AF%B8%EC%A7%80057.jpg'
          }
        ]
      },
      {
        name: '깡스타일리스트',
        profileImageUrl:
          'https://fashiondogam-images.s3.ap-northeast-2.amazonaws.com/image/201910254366666062410unnamed.jpg',
        title: '라이더와 스티치 청바지 [더비슈즈 코디#1]',
        titleImageUrl:
          'https://fashiondogam-images.s3.ap-northeast-2.amazonaws.com/image/20200110438516841735%EC%9D%B4%EB%AF%B8%EC%A7%80058.jpg',
        time: '1578661617843',
        pickCount: 0,
        viewCount: 662,
        commentCount: 0,
        simpleItemList: [
          {
            brandKor: '로파이',
            imageUrl:
              'https://fashiondogam-images.s3.ap-northeast-2.amazonaws.com/image/201912114377910621444.jpg'
          },
          {
            brandKor: '가먼트레이블',
            imageUrl:
              'https://fashiondogam-images.s3.ap-northeast-2.amazonaws.com/image/201910244366421794815%EA%B0%80%EB%A8%BC%ED%8A%B80.png'
          },
          {
            brandKor: '로맨틱무브',
            imageUrl:
              'https://fashiondogam-images.s3.ap-northeast-2.amazonaws.com/image/2020011043851672748472969.jpg'
          }
        ]
      },
      {
        name: '깡스타일리스트',
        profileImageUrl:
          'https://fashiondogam-images.s3.ap-northeast-2.amazonaws.com/image/201910254366666062410unnamed.jpg',
        title: '패딩 베스트를 활용한 [아메카지 스타일링#3]',
        titleImageUrl:
          'https://fashiondogam-images.s3.ap-northeast-2.amazonaws.com/image/201912274381724734718%EC%9D%B4%EB%AF%B8%EC%A7%80027.jpg',
        time: '1577420910156',
        pickCount: 0,
        viewCount: 462,
        commentCount: 0,
        simpleItemList: [
          {
            brandKor: '빅유니온',
            imageUrl:
              'https://fashiondogam-images.s3.ap-northeast-2.amazonaws.com/image/201912274381724752469549.jpg'
          },
          {
            brandKor: '엘무드',
            imageUrl:
              'https://fashiondogam-images.s3.ap-northeast-2.amazonaws.com/image/201912274381724752536582.jpg'
          },
          {
            brandKor: '리바이스',
            imageUrl:
              'https://fashiondogam-images.s3.ap-northeast-2.amazonaws.com/image/201912274381724752547403.jpg'
          },
          {
            brandKor: '루오에스팩',
            imageUrl:
              'https://fashiondogam-images.s3.ap-northeast-2.amazonaws.com/image/20191227438172475255503.jpg'
          }
        ]
      }
    ]
  }
};
