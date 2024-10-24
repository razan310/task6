import useStore from './../../zustand/store/useStore';
import Blog from './../Blog/Blog'; 

const RecentBlog = () => {
  const { getLastArticles } = useStore();
  const articles = getLastArticles(4); 

  const articleStyles = [
    { 
      articleClass: 'flex flex-col', 
      imgClass: 'w-full h-[200px] md:w-[770px] lg:w-full h-[228px] object-cover', 
      textClass: '', 
      buttonClass: ['bg-sky-50 text-sky-500',
                    'bg-red-50 text-red-400',
                    'bg-lime-50 text-lime-500'], 
      flexBasis: 'flex-[3] basis-full' // First column
    },
    { 
      articleClass: 'flex flex-col md:flex-row', 
      imgClass: 'w-full md:w-[320px] md:h-[200px] object-cover', 
      textClass: 'flex flex-col', 
      buttonClass: ['bg-emerald-50 text-emerald-500',
                    'bg-indigo-50 text-indigo-500',
                    'bg-lime-50 text-lime-500'], 
      flexBasis: 'flex-[1] basis-1/2' // Second column (first half)
    },
    { 
      articleClass: 'flex flex-col md:flex-row', 
      imgClass: 'w-full md:w-[320px] md:h-[200px] object-cover', 
      textClass: 'flex flex-col', 
      buttonClass: ['bg-fuchsia-50 text-fuchsia-500',
                    'bg-yellow-50 text-yellow-500'], 
      flexBasis: 'flex-[1] basis-1/2' // Second column (second half)
    },
    { 
      articleClass: 'flex flex-col', 
      imgClass: 'w-full h-[300px] object-cover', 
      textClass: '', 
      buttonClass: ['bg-pink-50 text-pink-500',
                    'bg-teal-50 text-teal-500'],
      flexBasis: 'flex-[1] basis-full' // Last column
    }
  ];

  return (
    <>
      <p className='mt-7 mb-5 font-semibold text-2xl dark:text-light'>Recent blog posts</p>
      <div className="articles-list flex flex-wrap gap-4">
        {articles.map((article, index) => {
          const { articleClass, imgClass, buttonClass, flexBasis, textClass } = articleStyles[index];
          return (
            <Blog 
              id={article.id}
              key={article.id}
              date={article.date} 
              imageSrc={article.mainImage} 
              title={article.title} 
              discription={article.discription} 
              buttons={article.categories}
              articleClass={`${articleClass} ${flexBasis}`} 
              imgClass={imgClass}
              textclass={textClass}
              buttonClass={buttonClass}
            />
          );
        })}
      </div>
    </>
  );
};

export default RecentBlog;
