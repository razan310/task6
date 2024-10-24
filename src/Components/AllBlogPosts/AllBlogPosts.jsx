import { useEffect } from 'react';
import useStore from './../../zustand/store/useStore';
import Blog from './../Blog/Blog'; 
import Pagination from './Pagination/Pagination';

function AllBlogPosts() {
    const { articles, currentPage, articlesPerPage, setCurrentPage, getAllArticles } = useStore();

    // استرجاع جميع المقالات
    const articlesData = getAllArticles();

    // تحديد القيم لصفحة المقالات
    const startingIndex = 0; // بدء من المقالة الأولى
    const indexOfLastArticle = currentPage * articlesPerPage; // آخر مقالة في الصفحة الحالية
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage; 
    const currentArticles = articlesData.slice(indexOfFirstArticle, indexOfLastArticle);

    // تحديد عدد الصفحات
    const totalPages = Math.ceil(articlesData.length / articlesPerPage);

    useEffect(() => {
        // Reset to page 1 if the articles change
        if (articlesData.length > 0 && currentPage > totalPages) {
            setCurrentPage(1);
        }
    }, [articlesData, totalPages, currentPage, setCurrentPage]);

    // أنماط مخصصة موحدة لكل مقالة
    const commonArticleStyles = {
        articleClass: 'flex flex-col', 
        imgClass: 'w-full h-[240px] object-cover', // توحيد مقاس الصورة
        textClass: '', 
        flexBasis: 'flex-1',
    };

    // مصفوفة تحتوي على 6 أنماط مخصصة للأزرار
    const buttonStyles = [
        ['bg-sky-100 text-sky-500', 'bg-red-100 text-red-400', 'bg-lime-100 text-lime-500'], // نمط 1
        ['bg-indigo-100 text-indigo-500', 'bg-green-100 text-green-500', 'bg-pink-100 text-pink-500'], // نمط 2
        ['bg-yellow-100 text-yellow-500', 'bg-blue-100 text-blue-500', 'bg-gray-100 text-gray-500'], // نمط 3
        ['bg-purple-100 text-purple-500', 'bg-orange-100 text-orange-500', 'bg-teal-100 text-teal-500'], // نمط 4
        ['bg-cyan-100 text-cyan-500', 'bg-gray-100 text-gray-500', 'bg-fuchsia-100 text-fuchsia-500'], // نمط 5
        ['bg-emerald-100 text-emerald-500', 'bg-amber-50 text-amber-500'], // نمط 6
    ];

    return (
        <>
        <p className='mt-14 mb-5 font-semibold text-2xl dark:text-light'>All blog posts</p>
        <div className="articles-list grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {/* الشبكة تبدأ من عمود واحد على الشاشات الصغيرة، عمودين على المتوسطة، وثلاثة أعمدة على الكبيرة */}
            {currentArticles.length > 0 ? (
                currentArticles.map((article, index) => {
                    const buttonClass = buttonStyles[index % buttonStyles.length]; // اختر نمط زر مختلف بناءً على الفهرس
                    return (
                        <div className='flex justify-items-center' key={article.id}>
                            <Blog 
                                id={article.id}
                                date={article.date} 
                                imageSrc={article.mainImage} 
                                title={article.title} 
                                discription={article.discription} 
                                buttons={article.categories}
                                articleClass={`${commonArticleStyles.articleClass} ${commonArticleStyles.flexBasis}`} // استخدام الأنماط الموحدة
                                imgClass={commonArticleStyles.imgClass}
                                textclass={commonArticleStyles.textClass}
                                buttonClass={buttonClass} // تمرير الأنماط المخصصة للأزرار
                            />
                        </div>
                    );
                })
            ) : (
                <p>No blog posts available at the moment.</p>
            )}
        </div>

        {/* ترقيم الصفحات */}
        {totalPages > 1 && (
            <Pagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
                onPageChange={setCurrentPage} 
            />
        )}
        </>
    );
}

export default AllBlogPosts;
