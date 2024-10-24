import Blog from '../Components/Blog/Blog';
import SpecificArticle from '../Components/SpecificArticle/SpecificArticle';
import Subscribe from '../Components/Subscribe/Subscribe';
import useStore from './../zustand/store/useStore';
import { useParams } from 'react-router-dom'; // Import useParams

const Article = () => {
    const { id } = useParams(); // Get the id from the URL
    const { getArticlesByLimit_id } = useStore(); 
    const articles = getArticlesByLimit_id(9, id); 

    const commonArticleStyles = {
        articleClass: 'flex flex-col', 
        imgClass: 'w-full h-[240px] object-cover', // توحيد مقاس الصورة
        textClass: '', 
        flexBasis: 'flex-auto',
        buttonClass : [
          ['bg-sky-100 text-sky-500', 'bg-red-100 text-red-400', 'bg-lime-100 text-lime-500'], // نمط 1
          ['bg-indigo-100 text-indigo-500', 'bg-green-100 text-green-500', 'bg-pink-100 text-pink-500'], // نمط 2
          ['bg-yellow-100 text-yellow-500', 'bg-blue-100 text-blue-500', 'bg-gray-100 text-gray-500'], // نمط 3
          ['bg-purple-100 text-purple-500', 'bg-orange-100 text-orange-500', 'bg-teal-100 text-teal-500'], // نمط 4
          ['bg-cyan-100 text-cyan-500', 'bg-gray-100 text-gray-500', 'bg-fuchsia-100 text-fuchsia-500'], // نمط 5
          ['bg-emerald-100 text-emerald-500', 'bg-amber-50 text-amber-500'], // نمط 6
        ]
      };
    

    if (!articles) {
        return <div>Article not found</div>;
    }

    return (
        <div>
            <div className='flex flex-col md:flex-row-reverse px-8 mx-5 my-6 md:my-7 lg:my-8 lg:mx-28'>
                <div className='w-full md:w-2/2'>
                    <SpecificArticle/>
                </div>

                <div className='w-full md:w-44.4'>
                    {articles.map((article, index) => {
                    const buttonStyles = commonArticleStyles.buttonClass[index % commonArticleStyles.buttonClass.length]; // تنويع أنماط الأزرار
                    return (
                        <div 
                        key={article.id}
                        className="w-full" // 3 في الكبيرة، 2 في المتوسطة، 1 في الصغيرة
                        >
                        <Blog 
                            id={article.id}
                            date={article.date} 
                            imageSrc={article.mainImage} 
                            title={article.title} 
                            discription={article.discription} 
                            buttons={article.categories}
                            articleClass={`${commonArticleStyles.articleClass} ${commonArticleStyles.flexBasis}`} // دمج flexBasis مع articleClass
                            imgClass={commonArticleStyles.imgClass}
                            textclass={commonArticleStyles.textClass}
                            buttonClass={buttonStyles} // تمرير أنماط الأزرار
                        />
                        </div>
                    );
                    })}
                </div>
            </div>
            <div>
                <Subscribe/>
            </div>
        </div>
    );
};

export default Article;
